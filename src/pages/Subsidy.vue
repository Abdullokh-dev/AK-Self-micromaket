<script setup>
import {onMounted} from "vue";
import SubsContent from "../components/SubsContent.vue";
import SubsBelt from "../components/SubsBelt.vue";
import SubsHowWork from "../components/SubsHowWork.vue";
import Capabilities from "../components/Capabilities.vue";
import SelfSecondBelt from "../components/SelfSecondBelt.vue";
import Header from "../components/Header.vue";

const scrollTop = () => {
  window.scrollTo(0,0);
}

onMounted(scrollTop)
</script>

<template>
  <Header />
  <SubsContent />
  <SubsBelt />
  <SubsHowWork />
  <Capabilities />
  <SelfSecondBelt />
</template>

<style scoped>

</style>
