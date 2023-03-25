<script setup>
import { defineProps } from 'vue';
import { toRefs } from 'vue';

const props = defineProps({
    product: Object
})

const { product } = toRefs(props)

</script>

<template>
    <div class="product">
        <div class="info">
            <h1>{{ product.name }}</h1>
            <h1>${{ product.price }}</h1>
            <h3>Details</h3>
            <p>{{ product.details }}</p>
        </div>
        <div class="img">
            <img :src="product.image" alt="package">
        </div>
    </div>
</template>