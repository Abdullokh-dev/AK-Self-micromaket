<script setup>

import MyButton from "./MyButton.vue";
</script>

<template>
<div class="row my-5 d-flex justify-content-center">
  <div class="col-12 col-md-11 main-row ps-0">

    <div class="row flex-md-row-reverse">
      <div class="col-12 col-md-6 mt-5 pt-md-5">
        <div class="title ps-4 ps-md-0" data-aos="fade-up">
          to connect subsidies in your office, fill out an application.
        </div>
        <div class="text-center text-md-start my-5" data-aos="flip-down">
          <MyButton text="leave an application" class="px-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop"/>
        </div>
      </div>

      <div class="col-12 col-md-6 text-center">
        <div class="mb-5 mt-md-5" data-aos="flip-right">
          <img src="../assets/subsidy/wallet.png" alt="#" draggable="false">
        </div>
      </div>
    </div>

    <div class="ps-0 drop position-absolute">
      <img src="../assets/subsidy/drop.png" draggable="false" alt="">
    </div>

  </div>
</div>
</template>

<style scoped>
.main-row {
  background-color: #00C3B2;
}

.title {
  font-size: 24px;
  font-weight: 800;
  line-height: 34px;
  text-align: left;
  color: white;
  max-width: 500px;
}

.drop > img {
  border-bottom-left-radius: 30px;
  margin-top: -136px;
}

@media only screen and (min-width: 768px) {
  .main-row {
    border-radius: 50px;
  }
}
</style>
