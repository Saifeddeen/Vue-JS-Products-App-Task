<script setup>
import { useUserStore } from "../stores/userStore"

const userStore = useUserStore()

function logout() {
    userStore.setUser({})
}
</script>

<template>
    <nav>
        <div class="logo">Logo</div>
        <div class="navigation">
            <ul>
                <li :class="{selected: $route.name == 'home'}">
                    <router-link to="/">Home</router-link>
                </li>
                <li :class="{selected: $route.name == 'products'}">
                    <router-link to="/products">Products</router-link>
                </li>
                <li :class="{selected: $route.name == 'add-product'}">
                    <router-link to="/add">Add Products</router-link>
                </li>
                <li v-if="!userStore.user.id" :class="{selected: $route.name == 'login'}">
                    <router-link to="/login">Sign in</router-link>
                </li>
                <li v-if="!userStore.user.id" :class="{selected: $route.name == 'register'}">
                    <router-link to="/register">Sign up</router-link>
                </li>
                <li v-if="userStore.user.id">
                    <a @click="logout()">Sign out</a>
                </li>
            </ul>
        </div>
    </nav>
</template>