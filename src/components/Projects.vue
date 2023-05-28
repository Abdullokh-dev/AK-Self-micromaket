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
    } else if(width.value <= 1200) {
      options.perPage = 2
      options.padding = '10%'
    } else if(width.value >= 1200) {
      options.perPage = 3
    }
  },
  {immediate: true}
)
</script>

<template>
  <div class="row mt-5 p-0 m-0">
    <div class="col-12 text-center main-title p-0 m-0">
      completed projects
    </div>
    <!-- Bg INDEX -->
    <div>
      <img alt="#" class="bg-index-drop" src="../assets/home/bg-index.png" height="70" draggable="false">
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div class="col-11 col-md-12 p-0">
      <div class="col-12 p-0 m-0">
        <Splide :options="options" aria-label="My Favorite Images">
          <SplideSlide>
            <div class="image d-flex align-items-center">
              <img src="../assets/home/slide-1.png" alt="">
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="image">
              <img src="../assets/home/slide-2.png" alt="">
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="image">
              <img src="../assets/home/slide-3.png" alt="">
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="image">
              <img src="../assets/home/slide-4.png" alt="">
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="image">
              <img src="../assets/home/slide-5.png" alt="">
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="image">
              <img src="../assets/home/slide-6.png" alt="">
            </div>
          </SplideSlide>
          <SplideSlide>
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

.bg-index-drop {
  position: relative;
  left: 58%;
  z-index: 0;
  margin-top: -50px;
}

.main-title {
  font-size: 32px;
  font-weight: 800;
  line-height: 32px;
  z-index: 1;
}

.bg-index-drop {
  position: relative;
  left: 57%;
  z-index: 0;
  margin-top: -50px;
}

.image > img {
  width: 100% !important;
}

.splide {
  padding: 3em 0;
}

</style>
