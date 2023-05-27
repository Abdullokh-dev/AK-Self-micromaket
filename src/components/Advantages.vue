<script setup>

</script>

<template>
  <div class="row">
    <!-- Bg INDEX -->
    <div class="p-0">
      <img alt="#" class="bg-index" src="../assets/cake.png">
    </div>
    <div class="col text-center main-title">
      Advantages
    </div>
    <!-- Bg INDEX -->
    <div>
      <img alt="#" class="bg-index-drop" src="../assets/bg-index.png" height="70">
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div class="col-11">

      <div class="row">
        <div class="col-12 col-md-6 col-xl-4">
          <div class="colored rounded-4 h-100 px-4 pt-4 pb-3">
            <h1>Assortment</h1>
            <p>
              over 400 dishes in the assortment,
              including healthy, vegan food and organic dishes.
            </p>
          </div>
        </div>

        <div class="col-12 col-md-6 col-xl-4 mt-4 mt-md-0">
          <div class="light rounded-4 px-4 pt-4 pb-3">
            <h1>Service</h1>
            <p>online monitoring of technical errors and 24/7 service support.</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 mt-4 mt-xl-0">
          <div class="rounded-4 colored px-4 pt-4 pb-3">
            <h1>Convenient payment methods</h1>
            <p>contactless payment by bank cards, Apple Pay, Samsung Pay.</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 mt-4">
          <div class="rounded-4 light px-4 pt-4 pb-3">
            <h1>Free</h1>
            <p>free installation, there is a trial period.</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 mt-4">
          <div class="rounded-4 colored px-4 pt-4 pb-3">
            <h1>Area</h1>
            <p>maximum opportunities on a minimum area.</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 my-4">
          <div class="rounded-4 light px-4 pt-4 pb-3">
            <h1>Design</h1>
            <p>we can make an individual design according to your identity.</p>
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
