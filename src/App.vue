<script setup>

import Slider from "./components/Slider.vue";
import Header from "./components/Header.vue";
// import WhoWe from "./components/WhoWe.vue";
import Belt from "./components/Belt.vue";
import Advantages from "./components/Advantages.vue";
import Assortment from "./components/Assortment.vue";
import Systems from "./components/Systems.vue";
import Projects from "./components/Projects.vue";
import HowWeWork from "./components/HowWeWork.vue";
import FormRequest from "./components/FormRequest.vue";
import Reviews from "./components/Reviews.vue";
import Partners from "./components/Partners.vue";

</script>

<template>
<div class="container-fluid main-container">
  <Header />
  <Slider />
<!--  <WhoWe />-->
  <Belt />
  <Advantages />
  <Assortment />
  <Systems />
  <Projects />
  <HowWeWork />
  <FormRequest />
  <Reviews />
  <Partners />
</div>
</template>

<style>
 * {
   font-family: 'Montserrat', sans-serif;
   font-weight: 700;
 }

 button {
   border: none;
 }

 .main-container {
   background: #F5F8FF;
 }
</style>
