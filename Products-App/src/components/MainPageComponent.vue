<script setup>
import CopyrightsComponent from './CopyrightsComponent.vue';
import NavbarComponent from './NavbarComponent.vue';

</script>

<template>
    <NavbarComponent />
    <div class="main-container">
        <slot />
    </div>
    <CopyrightsComponent />
</template>