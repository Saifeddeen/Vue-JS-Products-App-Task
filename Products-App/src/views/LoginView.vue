<script setup>
import MainPageComponent from '../components/MainPageComponent.vue';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import router from '../router';
import { useUserStore } from '../stores/userStore';
import {useUsersStore} from '../stores/usersStore';

const usersStore = useUsersStore()
const userStore = useUserStore()
const email = ref("")
const password = ref("")

usersStore.fillUsers()

function login() {
    if (email.value && password.value) {

        for(let i = 0; i < usersStore.users.length; i++){
            if(usersStore.users[i].email === email.value){
                if(usersStore.users[i].password === password.value){
                    userStore.setUser(usersStore.users[i])
                    router.push({ "path": "/" })
                    alert(`Hello ${userStore.user.name}`)
                    return
                } else alert("Wrong password !!!")
            }
        }
        alert("User email not found !!!")
    } else alert("Complete login fields !!!")

}

</script>

<template>
    <MainPageComponent>
        <section class="add-form last-sec">
            <form @submit.prevent="login()" method="post">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email">

                <label for="password">Password</label>
                <input id="password" type="password" v-model="password">

                <button type="submit" class="btn">Sign in</button>
            </form>
        </section>
    </MainPageComponent>
</template>