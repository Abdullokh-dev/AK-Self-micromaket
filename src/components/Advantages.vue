<script setup>

</script>

<template>
  <div class="row">
    <!-- Bg INDEX -->
    <div class="p-0 d-none d-lg-block" data-aos="fade-right"  data-aos-delay="500">
      <img alt="#" class="bg-index" src="../assets/home/cake.png" draggable="false">
    </div>
    <div class="col text-center main-title" id="advantages" data-aos="flip-up">
      advantages
      <!-- Bg INDEX -->
      <div class="d-none d-lg-block">
        <img alt="#" class="bg-index-drop" src="../assets/home/bg-index.png" height="70" draggable="false">
      </div>
    </div>
  </div>

  <div class="row d-flex justify-content-center mt-5 mt-xl-0">
    <div class="col-11">

      <div class="row">
        <div class="col-12 col-md-6 col-xl-4" data-aos="flip-up" data-aos-delay="100">
          <div class="colored rounded-4 h-100 px-4 pt-4 pb-3">
            <h1>assortment</h1>
            <p>
              Over 400 dishes in the assortment,
              including healthy, vegan food and organic dishes.
            </p>
          </div>
        </div>

        <div class="col-12 col-md-6 col-xl-4 mt-4 mt-md-0" data-aos="flip-up" data-aos-delay="150">
          <div class="light rounded-4 px-4 pt-4 pb-3">
            <h1>service</h1>
            <p>Online monitoring of technical errors and 24/7 service support.</p>
          </div>
        </div>

        <div class="col-12 col-md-6 col-xl-4 mt-4 mt-xl-0" data-aos="flip-up" data-aos-delay="200">
          <div class="rounded-4 colored px-4 pt-4 pb-3">
            <h1>convenient payment methods</h1>
            <p>Contactless payment by bank cards, Apple Pay, Samsung Pay.</p>
          </div>
        </div>

        <div class="col-12 col-md-6 col-xl-4 mt-4" data-aos="flip-up" data-aos-delay="250">
          <div class="rounded-4 light px-4 pt-4 pb-3">
            <h1>free</h1>
            <p class="my-width">Free installation, there is a trial period.</p>
          </div>
        </div>

        <div class="col-12 col-md-6 col-xl-4 mt-4" data-aos="flip-up" data-aos-delay="300">
          <div class="rounded-4 colored px-4 pt-4 pb-3">
            <h1>area</h1>
            <p class="my-width"> Maximum opportunities on a minimum area.</p>
          </div>
        </div>

        <div class="col-12 col-md-6 col-xl-4 my-4" data-aos="flip-up" data-aos-delay="350">
          <div class="rounded-4 light px-4 pt-4 pb-3">
            <h1>design</h1>
            <p>We can make an individual design according to your identity.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
}

p {
  font-size: 18px;
  font-weight: 400;
  line-height: 29px;
}

.my-width {
  max-width: 244px;
}

.bg-index {
  width: 330px;
  position: relative;
  top: -30%;
  left: 0;
}

.bg-index-drop {
  position: relative;
  top: 50%;
  left: 90px;
  z-index: -1;
  margin-top: -70px;
}

.main-title {
  margin-top: 96px;
  z-index: 1;
  font-size: 32px;
  font-weight: 800;
}

.light {
  background-color: white;
  color: black;
}

.colored {
  background-color: #6357AD;
  color: white;
}

.rounded-4 {
  height: 185px !important;
}

@media only screen and (min-width: 992px) {
  .main-title {
    margin-top: -80px;
  }

  .my-width {
    max-width: 100%;
  }

}
</style>
