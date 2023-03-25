<script setup>
import MainPageComponent from '../components/MainPageComponent.vue';
import ProductCard from '../components/ProductCard.vue';
import { useProductsStore } from '../stores/productsStore';
import { useUserStore } from '../stores/userStore';

const productsStore = useProductsStore()
const userStore = useUserStore()

productsStore.fillProducts()
</script>

<template>
    <MainPageComponent>
        <section>
            <h1 v-if="userStore.user.id">Hello {{ userStore.user.name }}</h1>
            <div class="intro">
                <h1>Vue app</h1>
                <h3>Add, Update and Remove Products</h3>
            </div>
            <div class="img">
                <img src="../assets/images/all-apple.jpg" alt="package">
            </div>
        </section>

        <section class="gallary-container last-sec">
            <h1>Our Products</h1>
            <div class="gallary">
                <ProductCard v-for="p in productsStore.products" :product="p"></ProductCard>
            </div>
        </section>
    </MainPageComponent>
</template>