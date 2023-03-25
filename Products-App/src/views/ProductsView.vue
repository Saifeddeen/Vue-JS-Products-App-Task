<script setup>
import MainPageComponent from '../components/MainPageComponent.vue';
import ProductComponent from '../components/ProductComponent.vue';
import { useProductsStore } from '../stores/productsStore';

const productsStore = useProductsStore()
productsStore.fillProducts()

</script>

<template>
    <MainPageComponent>
        <section class="psection last-sec">
            <ProductComponent v-for="p in productsStore.products" :product="p"></ProductComponent>
        </section>
    </MainPageComponent>
</template>