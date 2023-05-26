<script setup>
import Flicking from "@egjs/vue3-flicking";
import '@egjs/vue3-flicking/dist/flicking.css';
import '../styles/flicking-inline.css';
import { Pagination, AutoPlay } from "@egjs/flicking-plugins";
import "../styles/pagination.css";

import {ref} from "vue";
const plugins = ref([new Pagination({ type: 'bullet' }), new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: false })])
</script>

<template>
  <div class="row">
    <div class="col-12 p-0">
      <Flicking :options="{align: 'center', circular: true, camera: '100%', panel: '100%'}" :plugins="plugins">
        <!-- First Slide -->
        <div class="panel">
          <div class="row my-setting-slide first-slide">
            <!-- First half 50% -->
            <div class="col-lg-1"></div>
            <div class="col-12 col-lg-5">
              <div class="ms-3 ms-md-5 ps-md-5 ms-lg-0 ps-lg-0">
                <img src="../assets/vector.png" width="185" alt="" class="vector">
              </div>
              <div class="mt-2 ms-3 ms-md-5 ps-md-5 ms-lg-0 ps-lg-0">
                <span class="description">
                  More than 400 ready-made dishes for every taste
                </span>
              </div>
              <div class="mt-4 ms-3 ms-md-5 ps-md-5 ms-lg-0 ps-lg-0">
                <span class="addition">
                  Plus snacks, ice cream, and coffee
                </span>
              </div>
              <div class="d-none d-lg-block">
                <button type="button" class="btn px-4 rounded-pill mt-4">
                  leave an application
                </button>
              </div>
            </div>
            <!-- First half 50% -->
            <div class="col-12 col-lg-6 d-flex justify-content-center">
                <img src="../assets/bottle.png" alt="#" draggable="false" class="bottle">
            </div>
            <!-- mobile button -->
            <div class="col-12 text-center">
              <div class="d-block d-lg-none">
                <button type="button" class="btn px-4 rounded-pill mb-5">
                  leave an application
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Second Slide -->
        <div class="panel">
          <div class="row my-setting-slide second-slide">
            <!-- Second Slide half 50% -->
            <div class="col-lg-1 d-none d-lg-block"></div>
            <div class="col-12 col-lg-5">
              <div class="ms-3 ms-md-5 ps-md-5 ms-lg-0 ps-lg-0 mt-4 mt-lg-0">
                <img src="../assets/vector-light.png" width="185" alt="" class="vector">
              </div>
              <div class="mt-2 ms-3 ms-md-5 ps-md-5 ms-lg-0 ps-lg-0">
              <span class="description text-light">
                More than 400 ready-made dishes for every taste
              </span>
              </div>
              <div class="mt-4 ms-3 ms-md-5 ps-md-5 ms-lg-0 ps-lg-0">
              <span class="addition text-light">
                Plus snacks, ice cream, and coffee
              </span>
              </div>
              <div class="d-none d-lg-block">
                <button type="button" class="btn px-4 rounded-pill mt-4">
                  leave an application
                </button>
              </div>
            </div>
            <!--Second Slide mobile button-->
            <div class="row align-items-end">
              <div class="col-12 d-block d-lg-none text-center mb-5 pb-4">
                <button type="button" class="btn px-4 rounded-pill">
                  leave an application
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="panel">3</div>
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
  height: 714px;
  margin: 0;
}
.first-slide {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background: url(../assets/img.png) no-repeat bottom right fixed;
}

.second-slide {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background: url(../assets/img-coffee.png) no-repeat bottom center fixed;
}

.second-slide {
  background-color: #31C2B0;
}

.bottle {
  margin: auto;
  width: 100%;
  min-width: 400px;
  max-width: 504px;
}

.panel {
  width: 100vw;
}

.vector {
  margin-top: 182px;
}

.description {
  font-size: 40px;
  font-weight: 800;
  line-height: 56px;
  letter-spacing: 0;
  text-align: left;
}

.addition {
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0;
  text-align: left;
}

.rounded-pill {
  background-color: #6357AD;
  color: white;
  font-size: 24px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  .description {
    font-size: 32px;
    line-height: 38px;
  }
}

@media only screen and (max-width: 991px) {
  .my-setting-slide {
    height: 1000px;
  }
  .bottle {
    margin: auto 0;
  }
  .vector {
    margin-top: 90px;
  }
}


@media only screen and (min-width: 992px) {
  .bottle {
    margin: 170px;
    min-width: 450px;
  }
  .second-slide {
    background: url(../assets/img-md-coffee.png) #31C2B0 no-repeat right fixed;
  }
}

@media only screen and (min-width: 1199px) {
  .second-slide {
    background: url(../assets/img-coffee.png) #31C2B0 no-repeat right fixed;
  }
}

</style>
