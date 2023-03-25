<script setup>
import MainPageComponent from '../components/MainPageComponent.vue';
import { useUsersStore } from '../stores/usersStore';
import { useUserStore } from '../stores/userStore';
import { ref } from 'vue';
import router from '../../../../Final-Project/src/router';
import axios from 'axios';

const usersStore = useUsersStore()
usersStore.fillUsers()

const userStore = useUserStore()

const name = ref("")
const email = ref("")
const password = ref("")

function chekEmail() {
    for (let i = 0; i < usersStore.users.length; i++) {
        if (usersStore.users[i].email === email.value) {
            return false
        }
    }
    return true
}

function checkFields() {
    if (name.value && email.value && password.value) {
        if (chekEmail()) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

function register() {
    console.log("run")
    if (checkFields()) {
        axios.post("http://localhost:3000/users", {
            "name": name.value,
            "email": email.value,
            "password": password.value
        }).then(res => {
            userStore.setUser(res.data)
            alert(`user ${name.value} registered`)
            router.push({ "path": "/" })
        })
    }
}
</script>

<template>
    <MainPageComponent>
        <section class="add-form last-sec">
            <form @submit.prevent="register()" method="post">
                <label for="uname">Name</label>
                <input type="text" id="uname" v-model="name">

                <label for="email">Email</label>
                <input type="email" id="email" v-model="email">

                <label for="password">Password</label>
                <input id="password" type="password" v-model="password">

                <button type="submit" class="btn">Create Account</button>
            </form>
        </section>
    </MainPageComponent>
</template>