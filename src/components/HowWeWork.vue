<script setup>

</script>
<template>
  <div class="row mt-5">
    <div class="col-12 text-center main-title">
      how we work?
    </div>
    <!-- Bg INDEX -->
    <div>
      <img alt="#" class="bg-index-drop" src="../assets/home/bg-index.png" height="70">
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div class="col-11">
      <div class="row">

        <div class="col-12 col-md-6 col-xl-3 mt-3">
          <div class="my-card">
            <div class="order-num">1</div>
            <div class="my-card-info">
              We coordinate the equipment and design
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3 mt-3">
          <div class="my-card">
            <div class="order-num">2</div>
            <div class="my-card-info">
              We conduct tastings and form the assortment
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3 mt-3">
          <div class="my-card">
            <div class="order-num">3</div>
            <div class="my-card-info">
              We assemble and configure the micromarket in an hour
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3 mt-3">
          <div class="my-card">
            <div class="order-num">4</div>
            <div class="my-card-info">
              Load up with products
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-3 mt-3">
          <div class="my-card">
            <div class="order-num">5</div>
            <div class="my-card-info">
              conduct promotions and actions
            </div>
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

.my-card {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 30px 0 #0000001A;
  height: 120px;
}

.order-num {
  font-size: 32px;
  font-weight: 800;
  line-height: 32px;
  color: #BEE2E5;
  padding: 9px 0 0 16px;

}

.my-card-info {
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
  padding: 6px 0 0 16px;
}

@media only screen and (min-width: 768px) {
  .my-card {
    height: 288px;
  }

  .order-num {
    padding: 33px 0 0 27px;
  }

  .my-card-info {
    font-size: 24px;
    line-height: 34px;
    padding: 24px 22px 0 27px;
  }
}
</style>
