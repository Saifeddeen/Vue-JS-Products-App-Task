<script setup>
import { defineProps } from 'vue';
import { toRefs } from 'vue';

const props = defineProps({
    product: Object
})

const { product } = toRefs(props)
</script>

<template>
    <div class="gallary">
        <div class="product-card">
            <img :src="product.image" :alt="product.name">
            <h3 class="name">{{ product.name }}</h3>
            <router-link to="/products" class="btn">See Details</router-link>
        </div>
    </div>
</template>