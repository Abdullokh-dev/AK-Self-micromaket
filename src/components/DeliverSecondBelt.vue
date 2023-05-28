<script setup>

import MyButton from "./MyButton.vue";
</script>

<template>
  <div class="row my-5 d-flex justify-content-center">
    <div class="col-11 mt-5 mb-5 rounded-5 main-row ps-0">

      <div class="row flex-md-row-reverse">
        <div class="col-12 col-md-6 mt-5 pt-md-5">
          <div class="title ps-4 mt-xl-4 ps-md-0">
            Leave an application for cooperation, advertising, and promotion of your product and we will contact you!
          </div>
          <div class="text-center text-md-start my-5">
            <MyButton text="Leave an application" class="px-4"/>
          </div>
        </div>

        <div class="col-12 col-md-6 text-center">
          <div class="mb-5 mt-md-5 image">
            <img src="../assets/delivery/img_2.png" alt="#" draggable="false">
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
  background-color: #6357AD;
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

.image > img{
  width: 90%;
  max-width: 400px;
}
</style>
