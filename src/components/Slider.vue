<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import {reactive} from "vue";
const slides = reactive([
  {
    title: 'Slide #1',
    content: 'Slide 1 content.',
    image: "https://bigbendfarflung.com/wp-content/uploads/2020/03/ashley-knedler-Pf5Pj7A5ddA-unsplash-1.jpg"
  },
  {
    title: 'Slide #2',
    content: "Slide 2 content.",
    image: "https://bigbendfarflung.com/wp-content/uploads/2020/03/ashley-knedler-Pf5Pj7A5ddA-unsplash-1.jpg"
  }
])
</script>

<template>
  <div class="row">
    <div class="col-12">
      <vueper-slides :arrows="false" :dragging-distance="70" prevent-y-scroll>
        <vueper-slide v-for="slide in slides"
                      :key="slide"
                      :title="slide.title.toString()"
                      :image="slide.image"
        />
      </vueper-slides>
    </div>
  </div>
</template>


<style scoped>
</style>
