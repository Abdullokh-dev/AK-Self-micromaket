<script setup>

import MyButton from "./MyButton.vue";
</script>
<template>
  <div class="row d-flex justify-content-center">
    <div class="col-11 col-md-10">

      <div class="row">
        <div class="col-12 col-lg-6">
          <h1 class="title"><span>for suppliers</span></h1>
          <div class="info mt-5">
            placement of your products in the micromarket
          </div>
          <div class="additional-info mt-4">
            This will allow you to present your products to a constant paying audience on a daily basis, who will become your potential customers.
          </div>
          <div class="mt-4 mb-5 pt-3">
            <MyButton text="leave an application" class="px-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop"/>
          </div>
        </div>
        <div class="col-12 col-lg-6 text-center">
          <div class="image">
            <img src="../assets/delivery/img.png" alt="subsidy" class="ms-0 ms-lg-5" draggable="false">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
* {
  color: black;
}
.title {
  font-weight: 800;
  font-size: 28px;
  line-height: 34px;
  margin-top: 130px;
}

.title > span {
  border-bottom: 6px solid black;
}

.info {
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  text-align: left;
}

.additional-info {
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  max-width: 500px;
}

.image > img{
  margin-top: 33px;
  width: 100%;
  max-width: 540px;
}

@media only screen and (min-width: 992px) {
  .title {
    margin-top: 191px;
    font-size: 40px;
    line-height: 40px;
  }

  .info {
    font-size: 32px;
    line-height: 45px;
  }

  .additional-info {
    font-size: 20px;
    line-height: 28px;
  }

  .image > img{
    margin-top: 233px;
  }
}
</style>
