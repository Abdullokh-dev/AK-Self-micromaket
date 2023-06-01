<script setup>
</script>

<template>
  <div class="row d-flex justify-content-center main-row mt-5 pb-5">
  <div class="col-11 col-md-12 col-lg-10 main-col">
    <div class="row">

      <div class="col-12 col-md-6" data-aos="zoom-in">
        <div class="title-box">
          <div class="title mt-5 pe-lg-4">
            we are the developers of our own Self.Subsidy program.
          </div>
          <!-- Bg INDEX -->
          <div class="d-none d-lg-inline-block" data-aos="fade-left" data-aos-delay="400">
            <img alt="#" class="bg-index-drop-2" src="../assets/subsidy/card-2.png" height="110" draggable="false">
          </div>
        </div>
        <!-- Bg INDEX -->
        <div class="d-lg-none">
          <img alt="#" class="bg-index-drop" src="../assets/subsidy/card.png" height="70" draggable="false">
        </div>
      </div>
      <div class="col-12 col-md-6 mt-md-5 ps-lg-5 my-4" data-aos="zoom-in">
        <div class="info mt-md-3 pt-lg-2">
          self.supsidy allows companies to flexibly manage the subsidy provided and gives employees the opportunity to use the subsidy in our micromarkets at their discretion.
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<style scoped>
.main-row {
  background-color: white;
}

.main-col {
  max-width: 1600px;
}

.title {
  font-size: 20px;
  font-weight: 900;
  line-height: 32px;
  text-align: left;
  color: white;
  padding: 24px 5px 19px 24px;
}

.title-box {
  background-color: #00C3B2;
  border-radius: 20px;
  height: 151px;
  z-index: 1;
}

.info {
  font-size: 18px;
  font-weight: 400;
  line-height: 29px;
  text-align: left;
}

.bg-index-drop {
  position: absolute;
  right: 50px;
  z-index: 0;
  margin-top: -60px;
}

@media only screen and (min-width: 768px) {
  .bg-index-drop {
    left: 37vw;
    z-index: 0;
  }
}

@media only screen and (min-width: 992px) {
  .bg-index-drop-2 {
    position: absolute;
    left: 35vw;
    z-index: 0;
    margin-top: -170px;
  }
}
@media only screen and (min-width: 1200px) {
  .title {
    position: relative;
    font-size: 32px;
    line-height: 44px;
    max-width: 433px;
  }
  .info {
    font-size: 20px;
    line-height: 28px;
  }
  .title-box {
    height: auto;
  }
  .bg-index-drop-2 {
    position: relative;
    margin-left: -20px;
    margin-top: -450px;
  }
}
</style>
