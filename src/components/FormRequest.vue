<script setup>
import MyButton from "./MyButton.vue";
import md5 from 'md5';
const obj = reactive({
  name: '',
  email: '',
  text: '',
  h: ''
})
import axios from "axios";
import {reactive, ref} from "vue";

const emailSend = () => {
  obj.h = md5(obj.name + obj.email + obj.text + 'self-micromarket.com')
  axios.post("https://self-micromarket.com/send.php", obj,{
    headers: {
      'content-type': 'multipart/form-data'
    }
  })
    .then(function (response) {
      console.log(response);
      obj.name = '';
      obj.email = '';
      obj.text = '';
    })
    .catch(function (error) {
      console.warn(error);
    });
}
</script>

<template>
  <div class="row d-flex justify-content-center main-row" style="position: relative">
    <div class="col-11 col-xl-10">
      <div class="row text-light">

        <div class="col-12 col-md-6">
          <div class="bolder-text">
            want a micromarket in your office, but none of your colleagues want to do it?
          </div>
          <div class="info-text my-4">
            share your contacts, and we'll handle everything ourselves.
          </div>
        </div>

        <div class="col-12 col-md-6 ps-lg-5 mt-2 mt-md-5 pt-md-4">
          <form @submit.prevent="emailSend">
            <div class="mb-3">
              <input type="text" class="form-control ps-4" placeholder="name" v-model="obj.name" required>
            </div>
            <div class="mb-3">
              <input type="email" class="form-control ps-4" placeholder="email" v-model="obj.email" required>
            </div>
            <div class="mb-3">
              <input type="text" class="form-control ps-4" placeholder="text" v-model="obj.text" required>
            </div>
            <div class="text-center">
              <MyButton type="submit" text="request a call back" class="my-3 mb-5 px-4 w-full"/>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Juice  -->
    <div class="d-none d-xl-block">
      <img alt="#" class="bg-index juice" src="../assets/home/juice.png" height="238" draggable="false">
    </div>
    <!-- Pizza -->
    <div class="d-none d-xl-block">
      <img alt="#" class="bg-index pizza" src="../assets/home/pizza.png" height="205" draggable="false">
    </div>
  </div>
</template>

<style scoped>
.main-row {
  background-color: #6357AD;
  margin-top: 64px;
}

.bolder-text {
  margin-top: 64px;
  font-size: 24px;
  line-height: 34px;
  text-align: left;
}

.info-text {
  font-size: 18px;
  text-align: left;
  font-weight: 400;
  line-height: 25px;
}

input {
  outline: none;
  border: none;
  height: 60px;
  width: 100%;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 400;
  line-height: 29px;
}

input::placeholder {
  color: #C0C0C0;
}

@media only screen and (min-width: 992px) {
  .bolder-text {
    font-size: 32px;
    line-height: 45px;
  }
}

@media only screen and (min-width: 1200px) {
  .bg-index {
    position: absolute;
    z-index: 0;
  }

  .juice {
    bottom: -30px;
    left: 0;
  }

  .pizza {
    bottom: 0;
    right: 0;
  }
}
</style>
