<script setup>

</script>

<template>
  <div class="row">
    <!-- Bg INDEX -->
    <div class="p-0">
      <img alt="#" class="bg-index" src="../assets/home/cake.png" draggable="false">
    </div>
    <div class="col text-center main-title" id="advantages">
      advantages
    </div>
    <!-- Bg INDEX -->
    <div>
      <img alt="#" class="bg-index-drop" src="../assets/home/bg-index.png" height="70" draggable="false">
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div class="col-11">

      <div class="row">
        <div class="col-12 col-md-6 col-xl-4">
          <div class="colored rounded-4 h-100 px-4 pt-4 pb-3">
            <h1>assortment</h1>
            <p>
              Over 400 dishes in the assortment,
              including healthy, vegan food and organic dishes.
            </p>
          </div>
        </div>

        <div class="col-12 col-md-6 col-xl-4 mt-4 mt-md-0">
          <div class="light rounded-4 px-4 pt-4 pb-3">
            <h1>service</h1>
            <p>Online monitoring of technical errors and 24/7 service support.</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 mt-4 mt-xl-0">
          <div class="rounded-4 colored px-4 pt-4 pb-3">
            <h1>convenient payment methods</h1>
            <p>Contactless payment by bank cards, Apple Pay, Samsung Pay.</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 mt-4">
          <div class="rounded-4 light px-4 pt-4 pb-3">
            <h1>free</h1>
            <p>Free installation, there is a trial period.</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 mt-4">
          <div class="rounded-4 colored px-4 pt-4 pb-3">
            <h1>area</h1>
            <p>Maximum opportunities on a minimum area.</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 my-4">
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

.bg-index {
  width: 330px;
  position: relative;
  top: -30%;
  left: 0;
}

.bg-index-drop {
  position: relative;
  left: 53%;
  z-index: 0;
  margin-top: -150px;
}

.main-title {
  margin-top: -80px;
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
</style>
