<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import {reactive, watch} from "vue";
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize();

const options = reactive( {
  perPage: 1,
  width: '100%',
  rewind : true,
  gap    : '1rem',
  type   : 'loop',
  padding: '20%',
})

watch(
  () => width.value,
  () => {
    if(width.value <= 767) {
      options.perPage = 1
      options.padding = '0%'
      console.log('lll')
    } else if(width.value <= 1200) {
      options.perPage = 2
      options.padding = '10%'
    } else {
      options.perPage = 3
      options.padding = '10%'
    }
  },
  {immediate: true}
)
</script>

<template>
  <div class="row mt-5 p-0 m-0">
    <div class="col-12 text-center main-title p-0 m-0" data-aos="zoom-in" data-aos-delay="100">
      completed projects
      <!-- Bg INDEX -->
      <div class="d-none d-lg-block">
        <img alt="#" class="bg-index-drop" src="../assets/home/bg-index.png" height="70" draggable="false">
      </div>
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div class="col-11 col-md-12 p-0">
      <div class="col-12 p-0 m-0">
        <Splide :options="options" aria-label="My Favorite Images" data-aos="zoom-in">
          <SplideSlide>
            <div class="image d-flex align-items-center">
              <img src="../assets/home/slide-1.png" alt="">
            </div>
          </SplideSlide>
          <SplideSlide data-aos="zoom-in">
            <div class="image">
              <img src="../assets/home/slide-2.png" alt="">
            </div>
          </SplideSlide>
          <SplideSlide data-aos="zoom-in">
            <div class="image">
              <img src="../assets/home/slide-3.png" alt="">
            </div>
          </SplideSlide>
          <SplideSlide data-aos="zoom-in">
            <div class="image">
              <img src="../assets/home/slide-4.png" alt="">
            </div>
          </SplideSlide>
          <SplideSlide data-aos="zoom-in">
            <div class="image">
              <img src="../assets/home/slide-5.png" alt="">
            </div>
          </SplideSlide>
          <SplideSlide data-aos="zoom-in">
            <div class="image">
              <img src="../assets/home/slide-6.png" alt="">
            </div>
          </SplideSlide>
          <SplideSlide data-aos="zoom-in">
            <div class="image">
              <img src="../assets/home/slide-7.png" alt="">
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-title {
  font-size: 32px;
  font-weight: 800;
  line-height: 32px;
  z-index: 1;
}

.main-title {
  font-size: 32px;
  font-weight: 800;
  line-height: 32px;
  z-index: 1;
}

.bg-index-drop {
  position: relative;
  top: 50%;
  left: 140px;
  z-index: -1;
  margin-top: -60px;
}

.image > img {
  width: 100% !important;
}

.splide {
  padding: 2em 0;
}

.splide__slide {
  padding-bottom: 25px;
}
</style>
