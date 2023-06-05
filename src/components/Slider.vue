<script setup>
</script>

<template>
  <div class="row">
    <div class="col-12 p-0">
        <!-- First Slide -->
        <div class="panel main-slide">
          <div class="row my-setting-slide">
            <!-- LEFT SIDE 50% -->
            <div class="col-lg-1 d-none d-lg-block"></div>
            <div class="col-12 col-lg-5" data-aos="fade-up">
              <div class="ms-3 ms-md-5 ps-md-5 ms-lg-0 ps-lg-0 mt-4 mt-lg-0" data-aos="flip-up" data-aos-delay="400">
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
              <div class="text-center text-lg-start" data-aos="flip-up">
                <button type="button" class="btn px-4 main-btn rounded-pill mt-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  leave an application
                </button>
              </div>
            </div>

            <!-- RIGHT SIDE -->
            <div class="col-12 col-lg-6 d-flex justify-content-center mt-lg-5 pt-lg-5">
              <div class="row">
                <div class="col d-flex align-items-top">
                  <img src="../assets/home/img_4.png" alt="#" draggable="false" class="first-slide-img mt-lg-5 pt-lg-5">
                </div>
              </div>
            </div>

            <!--First mobile button -->
            <div class="col-12 text-center">
              <div class="d-block d-lg-none">
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>


<style scoped>
.my-setting-slide {
  width: 100% !important;
  height: 1000px;
  margin: 0;
}

.main-slide {
  background: url("../assets/home/img_3.png") no-repeat center bottom;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index: 1;
}

.main-btn {
  background-color: #6357AD;
}

.first-slide-img {
  width: 100%;
  max-width: 500px;
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

@media only screen and (min-width: 992px) {
  .first-slide-img {
    width: 90%;
    max-width: 500px;
  }

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
}
</style>
