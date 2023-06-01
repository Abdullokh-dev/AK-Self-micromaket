<script setup>
</script>

<template>
  <div class="row">
    <div class="col-12 text-center main-title">
      how do subsidies work?
      <!-- Bg INDEX -->
      <div class="d-none d-lg-block">
        <img alt="#" class="bg-index-drop" src="../assets/subsidy/bg-drop.png" height="71" draggable="false">
      </div>
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div class="col-11">
      <div class="row">

        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 p-4">
          <div class="my-card row">
            <div class="order-num col-12">1</div>
            <div class="my-card-info col-12">
              the ordering company determines the size of the subsidy.
            </div>
            <div class="col-12 d-flex align-items-end justify-content-center mb-4">
              <img src="../assets/subsidy/money.png" alt="#" width="80" draggable="false">
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 p-4">
          <div class="my-card row">
            <div class="order-num col-12">2</div>
            <div class="my-card-info col-12">
              employees make purchases in the micromarket in a free mode, using electronic cards.
            </div>
            <div class="col-12 d-flex align-items-end justify-content-center mb-4">
              <img src="../assets/subsidy/btn.png" alt="#" width="80" draggable="false">
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 p-4">
          <div class="my-card row">
            <div class="order-num col-12">3</div>
            <div class="my-card-info col-12">
              the system takes into account the amount of purchased products and drinks for each employee.
            </div>
            <div class="col-12 d-flex align-items-end justify-content-center mb-4">
              <img src="../assets/subsidy/apelsin.png" alt="#" width="80" draggable="false">
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 p-4">
          <div class="my-card row">
            <div class="order-num col-12">4</div>
            <div class="my-card-info col-12">
              the company or employees compensate for expenses according to a report with details on each product and drink.
            </div>
            <div class="col-12 d-flex align-items-end justify-content-center mb-4">
              <img src="../assets/subsidy/money-2.png" alt="#" width="80" draggable="false">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.main-title {
  margin-top: 96px;
  font-size: 32px;
  font-weight: 800;
  line-height: 32px;
  z-index: 1;
}

.bg-index-drop {
  position: relative;
  left: 190px;
  z-index: -1;
  margin-top: -60px;
}

.my-card {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 3px 0 #0000001A;
}

.order-num {
  font-size: 32px;
  font-weight: 800;
  line-height: 32px;
  color: #BEE2E5;
  padding: 16px 0 0 22px;
}

.my-card-info {
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
  padding: 2px 22px 30px 21px;
}

@media only screen and (min-width: 768px) {
  .my-card {
    height: 100%;
  }

  .order-num {
    padding: 23px 0 0 33px;
  }

  .my-card-info {
    font-size: 20px;
    line-height: 32px;
    padding: 20px 22px 0 27px;
  }
}

@media only screen and (min-width: 991px) {
  .my-card-info {
    height: 246px;
  }
}
</style>
