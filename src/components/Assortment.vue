<template>
  <div class="row mt-5">
    <div class="col-12 text-center main-title">
      assortment
    </div>
    <!-- Bg INDEX -->
    <div>
      <img alt="#" class="bg-index-drop" src="../assets/bg-index.png" height="70">
    </div>
    <div class="col-12 d-flex justify-content-center text-center mt-4">
      <div class="main-description">
        We carefully monitor the quality of our products and regularly update the micro-market assortment, selecting the
        best dishes that will suit you.
      </div>
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div class="col-11">
      <div class="row">

        <div class="col-12 col-md-6 col-lg-4 col-xl-3 p-3 mt-4">
          <div class="card">
            <img src="../assets/card-coffee.png" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="card-title">grain coffee</div>
              <div class="card-description">Now you can buy alertness! 20 types of drinks, alternative milk options </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 p-3 mt-4">
          <div class="card">
            <img src="../assets/card-coffee.png" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="card-title">breakfasts</div>
              <div class="card-description">With self. early mornings at work won't be so heavy </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 p-3 mt-4 mt-md-2 mt-lg-4">
          <div class="card">
            <img src="../assets/card-coffee.png" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="card-title">main courses</div>
              <div class="card-description">Ready-made dishes from the best suppliers</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 p-3 mt-4 mt-md-2 mt-xl-4">
          <div class="card">
            <img src="../assets/card-coffee.png" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="card-title">filling snacks</div>
              <div class="card-description">Fresh sandwiches, shawarma and other snacks - we will not leave you hungry</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 p-3 mt-4 mt-md-2">
          <div class="card">
            <img src="../assets/card-coffee.png" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="card-title">organic and healthy</div>
              <div class="card-description">Protein bars and other healthy food without leaving the office.</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 p-3 mt-4 mt-md-2">
          <div class="card">
            <img src="../assets/card-coffee.png" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="card-title">snacks and bars</div>
              <div class="card-description">Favorite chocolates, snacks, nuts, and other quick snacks</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 p-3 mt-4 mt-md-2">
          <div class="card">
            <img src="../assets/card-coffee.png" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="card-title">refreshing drinks</div>
              <div class="card-description">No need to leave the office to buy a cold Pepsi or energy drink anymore</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 p-3 mt-4 mt-md-2">
          <div class="card">
            <img src="../assets/card-coffee.png" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="card-title">ice cream</div>
              <div class="card-description">Cool down even on the hottest day with delicious ice cream</div>
            </div>
          </div>
        </div>

        <div class="col-12 my-4">
          <div class="row">
            <div class="col-12 col-md-6 text-center text-md-end">
              <MyButton text="I want a free tasting" background="#6357AD" class="me-1 w-100" max-width="396" />
            </div>
            <div class="col-12 col-md-6 text-center text-md-start mt-4 mb-4 mt-md-0">
              <MyButton text="download the presentation" class="w-100 ms-1" max-width="396" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import MyButton from "./MyButton.vue";
export default {
  name: "Assortment",
  components: {MyButton}
}
</script>

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

.main-description {
  max-width: 762px;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  text-align: center;
}

.card {
  border: none;
  border-radius: 20px;
  --bs-card-inner-border-radius: 20px;
}

.card-body {
  height: 137px;
}

.card > img {
  padding: 22px;
  background-color: #FFC54A;
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
}

.card-description {
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
}
</style>
