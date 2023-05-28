<script setup>

import MyButton from "./MyButton.vue";
</script>
<template>
  <div class="row d-flex justify-content-center">
    <div class="col-11 col-md-10">

      <div class="row">
        <div class="col-12 col-lg-6">
          <h1 class="title"><span>Subsidy system</span></h1>
          <div class="info mt-5">
            make your employees more productive and happier
          </div>
          <div class="additional-info mt-4">
            Connection of the subsidy system is an additional but not mandatory service. All connection terms are discussed individually.
          </div>
          <div class="mt-4 pt-3">
            <MyButton text="Leave an application" class="px-4"/>
          </div>
        </div>
        <div class="col-12 col-lg-6 text-center">
          <div class="image">
            <img src="../assets/subsidy/img.png" alt="subsidy" class="ms-0 ms-lg-5">
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
