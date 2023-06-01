<script setup>
import {onMounted} from "vue";
import DeliveryContent from "../components/DeliveryContent.vue";
import DeliveryBelt from "../components/DeliveryBelt.vue";
import DeliveryOffer from "../components/DeliveryOffer.vue";
import DeliverSecondBelt from "../components/DeliverSecondBelt.vue";
import Header from "../components/Header.vue";

const scrollTop = () => {
  window.scrollTo(0,0);
}

onMounted(scrollTop)
</script>

<template>
  <Header />
  <DeliveryContent />
  <DeliveryBelt />
  <DeliveryOffer />
  <DeliverSecondBelt />
</template>

<style scoped>

</style>
