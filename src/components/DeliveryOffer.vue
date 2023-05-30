<script setup>

</script>

<template>
  <div class="row mt-5">
    <div class="col-12 text-center main-title">
      we offer
    </div>
    <!-- Bg INDEX -->
    <div>
      <img alt="#" class="bg-index-drop" src="../assets/home/bg-index.png" height="70" draggable="false">
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div class="col-11 col-md-10">

      <div class="row">
        <div class="col-12 col-lg-6 d-flex justify-content-center">
          <div class="list-text mt-4">
            <div class="info mt-lg-5">
              various collaboration opportunities aimedat increasing brand loyalty and recognition:
            </div>
            <ul class="mt-2">
              <li class="mt-4">
                placement of your product on the shelves of the micro market
              </li>
              <li class="mt-4">
                participation in the loyalty program
              </li>
              <li class="mt-4">
                placement of video ads about the product on the POS terminal
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-lg-6 text-center">
          <div class="image mt-lg-4 pt-lg-3 mt-xl-0">
            <img src="../assets/delivery/img_1.png" alt="subsidy" class="ms-0 ms-lg-5" draggable="false">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.main-title {
  font-size: 32px;
  font-weight: 800;
  line-height: 32px;
  z-index: 1;
}

.bg-index-drop {
  position: relative;
  left: 53%;
  z-index: 0;
  margin-top: -50px;
}

* {
  color: black;
}

.title > span {
  border-bottom: 6px solid black;
}

li {
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  padding-left: 20px;
}

li:before {
  content: " ";
  border: 7px solid #00C3B2;
  border-radius: 99rem;
  height: 0;
  width: 0;
  margin-top: 8px;
  margin-left:  -20px;
  position: absolute;
}

ul {
  list-style-type: none;
  padding: 0;
}

.info {
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
}

.image > img{
  margin-top: 33px;
  width: 100%;
  max-width: 540px;
}

@media only screen and (min-width: 992px) {
  .info {
    font-size: 20px;
    line-height: 32px;
  }
}
</style>
