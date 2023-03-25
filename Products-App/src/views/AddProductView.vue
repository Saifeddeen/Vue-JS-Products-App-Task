<script setup>
import axios from 'axios';
import { ref } from 'vue';
import MainPageComponent from '../components/MainPageComponent.vue';
import { useProductsStore } from '../stores/productsStore';
import { useUserStore } from '../stores/userStore';

const productsStore = useProductsStore()
const userStore = useUserStore()

productsStore.fillProducts()

const name = ref("")
const price = ref(0)
const details = ref("")

function addProduct() {
    if (name.value && price.value) {
        axios.post("http://localhost:3000/products", {
            "name": name.value,
            "price": price.value,
            "details": details.value,
            "image": "/src/assets/images/laptop-bg.jpg"
        }).then(() => {alert(`product ${name.value} added`)})
    }else {alert(price.value)}
}
</script>

<template>
    <MainPageComponent>
        <section class="add-form last-sec">
            <form v-if="userStore.user.id" @submit.prevent="addProduct()" method="post">
                <label for="pname">Product Name</label>
                <input type="text" id="pname" v-model="name">

                <label for="pprice">Product Price</label>
                <input type="number" id="pprice" v-model="price">

                <label for="pdetails">Product Details</label>
                <textarea id="pdetails" cols="30" rows="5" v-model="details"></textarea>

                <button type="submit" class="btn">Add</button>
            </form>
            <h1 v-else>Sign in to Add New Products</h1>
        </section>
    </MainPageComponent>
</template>