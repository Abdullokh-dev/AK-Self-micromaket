<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '../styles/splide-sea-green.css';
import {reactive, watch} from "vue";
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()
const slideNum = reactive({
  number: 1
})

watch(
  () => width.value,
  () => {
      if(width.value <= 767) {
        slideNum.number = 1
      } else if(width.value <= 1200) {
        slideNum.number = 2
      } else if(width.value >= 1200) {
        slideNum.number = 3
      }
    },
  {immediate: true}
)
</script>

<template>
  <div class="row main-row">
    <div class="col-12 text-center main-title" data-aos="flip-up">
      customer reviews
      <!-- Bg INDEX -->
      <div class="d-none d-lg-block">
        <img alt="#" class="bg-index-drop" src="../assets/home/bg-index.png" height="70" draggable="false">
      </div>
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div class="col-11 col-sm-9 col-md-11 col-lg-10 p-0 d-flex justify-content-between"  style="max-width: 1800px">

      <Splide :options="{ perPage: slideNum.number, width: '100%' }" aria-label="My Favorite Images">
        <SplideSlide data-aos="zoom-in">
          <div class="rounded-5 align-items-end">
            <div class="customer-name">
              Alice James
            </div>
            <div class="customer-comment">
              "I really like the service and food. As a rule, by the evening there is nothing left, everything is bought up by employees. A large selection from sweet to healthy food, any consumer will find a delicacy according to taste. Thank you!"
            </div>
            <div class="image d-flex align-items-end position-absolute bottom-0">
              <img src="../assets/home/customer-1.png" alt="">
            </div>
          </div>
        </SplideSlide>
        <SplideSlide data-aos="zoom-in">
          <div class="rounded-5">
            <div class="customer-name">
              Paul Gurok
            </div>
            <div class="customer-comment">
              "I want to share my opinion about the product range in the micromarket of our office! I really like pancakes with meat and cheese, it's really cool that cheese and meat are sliced ​​and not mixed into porridge. But they run out very quickly, bring more :)"
            </div>
            <div class="image d-flex align-items-end position-absolute bottom-0">
              <img src="../assets/home/customer-2.png" alt="">
            </div>
          </div>
        </SplideSlide>
        <SplideSlide data-aos="zoom-in">
          <div class="rounded-5">
            <div class="customer-name">
              Mary Senatorova
            </div>
            <div class="customer-comment">
              "We love eating dishes from Self kiosks, everything is always fresh and there is a wide choice! The variety of snacks is especially pleasing, protein bars are my real love and ice cream in the summer was more than ever! Thank you very much for your work!!"
            </div>
            <div class="image d-flex align-items-end position-absolute bottom-0">
              <img src="../assets/home/customer-3.png" alt="">
            </div>
          </div>
        </SplideSlide>
      </Splide>

    </div>
  </div>
</template>

<style scoped>
.main-row {
  margin-top: 95px;
}

.main-title {
  font-size: 32px;
  font-weight: 800;
  line-height: 32px;
  z-index: 1;
}

.bg-index-drop {
  position: relative;
  left: 140px;
  z-index: -1;
  margin-top: -60px;
}

.rounded-5 {
  background-color: white;
  height: 576px !important;
  max-height: 576px !important;
}

.customer-name {
  font-size: 16px;
  font-weight: 900;
  line-height: 16px;
  padding: 32px 0 0 24px;
}

.customer-comment {
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
  padding: 20px 24px 0 24px;
}

.image > img {
  width: 100% !important;
  height: 100%;
  padding-right: 15px;
}

.splide__slide {
  padding: 15px;
}

.splide {
  padding: 20px 0 50px 0;
}

@media only screen and (min-width: 768px) {
  .customer-name {
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
 }

  .customer-comment {
    font-size: 17px;
    line-height: 28px;
  }

}
</style>
