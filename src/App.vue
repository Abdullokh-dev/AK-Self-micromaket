<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
<div class="container-fluid main-container">
  <Header />
    <router-view />
  <Footer />
</div>
</template>

<style>
 * {
   font-family: 'Montserrat', sans-serif;
   font-weight: 700;
 }

 input {
   border: none;
   outline: none;
 }

 .main-container {
   background: #F5F8FF;
 }
</style>
