<script setup>
import MyButton from "./MyButton.vue";
import axios from "axios";
import {saveAs} from 'file-saver';
const download = (url) => {
  axios.get(url, {responseType: 'blob'})
    .then(response => {
      saveAs(response.data, 'Product range');
    })
}
</script>

<template>
  <div class="row mt-5">
    <div class="col-12 text-center main-title">
      assortment
      <!-- Bg INDEX -->
      <div class="d-none d-lg-block">
        <img alt="#" class="bg-index-drop" src="../assets/home/bg-index.png" height="70">
      </div>
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
      <div class="row mt-4">

        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-md-4 p-3">
          <div class="card">
            <div class="row">
              <div class="col-6 col-md-12">
                <div class="card-image">
                  <img src="../assets/home/card/img.png" class="card-img-top" alt="..." draggable="false">
                </div>
              </div>
              <div class="col-6 col-md-12 ps-0 px-md-4 pt-2">
                <div class="card-body">
                  <div class="card-title mt-2 mt-md-0">grain coffee</div>
                  <div class="card-description">Now you can buy alertness! 20 types of drinks, alternative milk options </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 mt-md-4 p-md-3">
          <div class="card">
            <div class="row">
              <div class="col-6 col-md-12">
                <div class="card-image">
                  <img src="../assets/home/card/img_1.png" class="card-img-top" alt="..." draggable="false">
                </div>
              </div>
              <div class="col-6 col-md-12 ps-0 px-md-4 pt-2">
                <div class="card-body">
                  <div class="card-title mt-2 mt-md-0">breakfasts</div>
                  <div class="card-description">With self. early mornings at work won't be so heavy </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 mt-md-4 p-md-3">
          <div class="card">
            <div class="row">
              <div class="col-6 col-md-12">
                <div class="card-image">
                  <img src="../assets/home/card/img_2.png" class="card-img-top" alt="#" draggable="false">
                </div>
              </div>
              <div class="col-6 col-md-12 ps-0 px-md-4 pt-2">
                <div class="card-body">
                  <div class="card-title mt-2 mt-md-0">main courses</div>
                  <div class="card-description">Ready-made dishes from the best suppliers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 mt-md-4 p-md-3">
          <div class="card">
            <div class="row">
              <div class="col-6 col-md-12">
                <div class="card-image">
                  <img src="../assets/home/card/img_3.png" class="card-img-top" alt="#" draggable="false">
                </div>
              </div>
              <div class="col-6 col-md-12 ps-0 px-md-4 pt-2">
                <div class="card-body">
                  <div class="card-title mt-2 mt-md-0">filling snacks</div>
                  <div class="card-description">Fresh sandwiches, shawarma and other snacks - we will not leave you hungry</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 mt-md-4 p-md-3">
          <div class="card">
            <div class="row">
              <div class="col-6 col-md-12">
                <div class="card-image">
                  <img src="../assets/home/card/img_7.png" class="card-img-top" alt="#" draggable="false">
                </div>
              </div>
              <div class="col-6 col-md-12 ps-0 px-md-4 pt-2">
                <div class="card-body">
                  <div class="card-title mt-2 mt-md-0">organic and healthy</div>
                  <div class="card-description">Protein bars and other healthy food without leaving the office.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 mt-md-4 p-md-3">
          <div class="card">
            <div class="row">
              <div class="col-6 col-md-12">
                <div class="card-image">
                  <img src="../assets/home/card/img_4.png" class="card-img-top" alt="#" draggable="false">
                </div>
              </div>
              <div class="col-6 col-md-12 ps-0 px-md-4 pt-2">
                <div class="card-body">
                  <div class="card-title mt-2 mt-md-0">snacks and bars</div>
                  <div class="card-description">Favorite chocolates, snacks, nuts, and other quick snacks</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 mt-md-4 p-md-3">
          <div class="card">
            <div class="row">
              <div class="col-6 col-md-12">
                <div class="card-image">
                  <img src="../assets/home/card/img_5.png" class="card-img-top" alt="..." draggable="false">
                </div>
              </div>
              <div class="col-6 col-md-12 ps-0 px-md-4 pt-2">
                <div class="card-body">
                  <div class="card-title mt-2 mt-md-0">refreshing drinks</div>
                  <div class="card-description">No need to leave the office to buy a cold Pepsi or energy drink anymore</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 mt-md-4 p-md-3">
          <div class="card">
            <div class="row">
              <div class="col-6 col-md-12">
                <div class="card-image">
                  <img src="../assets/home/card/img_6.png" class="card-img-top" alt="..." draggable="false">
                </div>
              </div>
              <div class="col-6 col-md-12 ps-0 px-md-4 pt-2">
                <div class="card-body">
                  <div class="card-title mt-2 mt-md-0">ice cream</div>
                  <div class="card-description">Cool down even on the hottest day with delicious ice cream</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 my-4 mt-5">
          <div class="row">
            <div class="col-12 col-md-6 text-center text-md-end">
              <MyButton text="I want a free tasting" background="#6357AD" class="me-1 w-100" max-width="396" data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
            </div>
            <div class="col-12 col-md-6 text-center text-md-start mt-4 mb-4 mt-md-0">
              <MyButton text="download the assortment" @click="download('assortment.pdf')" class="w-100 ms-1" max-width="396" />
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
  top: 52%;
  left: 70px;
  z-index: -1;
  margin-top: -45px;
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
  border-radius: 10px;
  box-shadow: 0 4px 29px 0 #0000001A;
}

.card-body {
  min-height: 137px;
}

.card-image > img {
  padding: 22px;
  background-color: #FFC54A;
  border-radius: 10px 0 0 10px;
  width: 100%;
}

.card-title {
  font-size: 12px;
  line-height: 15px;
  font-weight: 700;
}

.card-description {
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  text-align: left;
}

@media only screen and (min-width: 576px) {
  .card {
    border-radius: 20px;
    --bs-card-inner-border-radius: 20px;
  }
  .card-image > img {
    border-radius: 20px 0 0 20px;
  }

  .card-title {
    font-size: 18px;
    line-height: 23px;
  }

  .card-description {
    line-height: 19px;
    font-size: 15px;
  }
}

@media only screen and (min-width: 768px) {
  .card {
    border-radius: 20px;
    --bs-card-inner-border-radius: 20px;
  }

  .card-body {
    height: 137px;
  }

  .card-image > img {
    border-radius: 20px 20px 0 0;
  }
}
</style>
