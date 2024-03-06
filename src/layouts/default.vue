<template>
  <div class="">
    <Header />
    <div class="main"><slot /></div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/core/Header.vue";
import Footer from "../components/core/Footer.vue";
</script>

<style scoped>

</style>