<script setup>
import Flicking from "@egjs/vue3-flicking";
import '@egjs/vue3-flicking/dist/flicking.css';
import '../styles/flicking-inline.css';
import { Pagination, AutoPlay } from "@egjs/flicking-plugins";
import "../styles/pagination.css";

import {ref} from "vue";
import MyButton from "./MyButton.vue";
const plugins = ref([new Pagination({ type: 'bullet' }), new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: false })])
</script>

<template>
  <div class="row">
    <div class="col-12 p-0">
      <Flicking :options="{align: 'center', circular: true, camera: '100%', panel: '100%'}" :plugins="plugins">
        <!-- First Slide -->
        <div class="panel" style="position: relative">
          <div class="row my-setting-slide first-slide">
            <!-- First half 50% -->
            <div class="col-lg-1"></div>
            <div class="col-12 col-lg-5">
              <div class="ms-3 ms-md-5 ps-md-5 ms-lg-0 ps-lg-0">
                <img src="../assets/home/vector.png" width="185" alt="" class="vector">
              </div>
              <div class="mt-2 ms-3 ms-md-5 ps-md-5 ms-lg-0 ps-lg-0">
                <div class="description">
                  more than 400 ready-made dishes for every taste
                </div>
              </div>
              <div class="mt-4 ms-3 ms-md-5 ps-md-5 ms-lg-0 ps-lg-0">
                <div class="addition">
                  Plus snacks, ice cream, and coffee
                </div>
              </div>
              <div class="d-none d-lg-block">
                <button type="button" class="btn px-4 rounded-pill mt-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  leave an application
                </button>
              </div>
            </div>
            <!-- First half 50% -->
            <div class="col-12 col-lg-6 d-flex justify-content-center">
                <img src="../assets/home/bottle.png" alt="#" draggable="false" class="bottle" height="509" data-aos="fade-left" data-aos-duration="1500">
            </div>
            <!-- mobile button -->
            <div class="col-12 text-center">
              <div class="d-block d-lg-none">
                <button type="button" class="btn px-4 rounded-pill mb-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  leave an application
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Slide -->
        <div class="panel" style="position: relative">
          <div class="row my-setting-slide second-slide">
            <!-- Second Slide half 50% -->
            <div class="col-lg-1 d-none d-lg-block"></div>
            <div class="col-12 col-lg-5">
              <div class="ms-3 ms-md-5 ps-md-5 ms-lg-0 ps-lg-0 mt-4 mt-lg-0">
                <img src="../assets/home/vector-light.png" width="185" alt="" class="vector">
              </div>
              <div class="mt-2 ms-3 ms-md-5 ps-md-5 ms-lg-0 ps-lg-0">
              <div class="description text-light">
                natural grain coffee from trusted suppliers
              </div>
              </div>
              <div class="mt-4 ms-3 ms-md-5 ps-md-5 ms-lg-0 ps-lg-0">
              <div class="addition text-light">
                20 types of drinks, 5 types of alternative milk
              </div>
              </div>
              <div class="d-none d-lg-block">
                <button type="button" class="btn px-4 rounded-pill mt-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  leave an application
                </button>
              </div>
            </div>
            <!--Second Slide mobile button-->
            <div class="row align-items-end m-0">
              <div class="col-12 d-block d-lg-none text-center mb-5 pb-4">
                <button type="button" class="btn px-4 rounded-pill" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  leave an application
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Third Slide -->
        <div class="panel">
          <div class="row my-setting-slide third-slide" style="position: relative">
            <!-- Third half 50% -->
            <div class="col-lg-1 d-none d-lg-block"></div>
            <div class="col-12 col-lg-5">
              <div class="ms-3 ms-md-5 ps-md-5 ms-lg-0 ps-lg-0 mt-4 mt-lg-0">
                <img src="../assets/home/vector-light.png" width="185" alt="" class="vector">
              </div>
              <div class="mt-2 ms-3 ms-md-5 ps-md-5 ms-lg-0 ps-lg-0">
                <div class="description text-light">
                  micromarket with delicious and nutritious food
                </div>
              </div>
              <div class="mt-4 ms-3 ms-md-5 ps-md-5 ms-lg-0 ps-lg-0">
                <div class="addition text-light">
                  ready solution for organizing your employees' meals
                </div>
              </div>
              <div class="d-none d-lg-block">
                <MyButton text="leave an application" background="#31C2B0" class="mt-4 px-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
              </div>
            </div>
            <!-- Third half 50% -->
            <div class="col-12 col-lg-6 d-flex justify-content-center">
              <div class="row">
                <div class="col d-flex align-items-center">
                  <img src="../assets/home/coffee-bar.png" alt="#" draggable="false" class="third-slide-img mt-lg-5 pt-lg-5">
                </div>
              </div>
            </div>
            <!--Third mobile button -->
            <div class="col-12 text-center">
              <div class="d-block d-lg-none">
                <MyButton text="leave an application" background="#31C2B0" class="mt-4 px-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
              </div>
            </div>
          </div>
        </div>
        <template #viewport>
          <div class="flicking-pagination"></div>
        </template>
      </Flicking>
    </div>
  </div>
</template>


<style scoped>
.my-setting-slide {
  width: 100% !important;
  height: 1000px;
  margin: 0;
}

.first-slide {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background: url(../assets/home/img.png) no-repeat bottom right fixed;
}

.second-slide {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  -webkit-background-image: url(../assets/home/img-coffee.png);
  background: url(../assets/home/img-coffee.png) #31C2B0 no-repeat bottom center fixed !important;
}

.third-slide {
  background-color: #6357AD;
}

.bottle {
  margin-right: -130px !important;
  width: 367px;
  height: 350px;
}

.third-slide-img {
  width: 100%;
}

.panel {
  width: 100vw;
}

.vector {
  margin-top: 91px;
}

.description {
  font-weight: 800;
  letter-spacing: 0;
  text-align: left;
  font-size: 32px;
  line-height: 38px;
  max-width: 618px;
}

.addition {
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  letter-spacing: 0;
  text-align: left;
  max-width: 530px;
}

.rounded-pill {
  background-color: #6357AD;
  height: 64px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0;
  text-align: center;
}

@media only screen and (min-width: 768px) {
  .bottle {
    width: 100%;
    min-width: 400px;
    max-width: 504px;
    height: 509px;
  }
}

@media only screen and (min-width: 992px) {
  .vector {
    margin-top: 184px;
  }

  .my-setting-slide {
    height: 714px;
  }

  .description {
    font-size: 40px;
    line-height: 56px;
  }

  .addition {
    font-size: 24px;
    line-height: 29px;
  }

  .bottle {
    margin: 127px 0 auto!important;
    min-width: 450px;
    height: auto;
  }

  .second-slide {
    background: url(../assets/home/img-md-coffee.png) #31C2B0 no-repeat right fixed;
  }

  .third-slide {
    background: url(../assets/home/img_2.png) #6357AD no-repeat bottom right fixed;
  }
}

@media only screen and (min-width: 1199px) {
  .second-slide {
    background: url(../assets/home/img-coffee.png) #31C2B0 no-repeat right fixed;
  }
}

</style>
