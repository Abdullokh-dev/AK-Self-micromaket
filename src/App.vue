<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import MyButton from "./components/MyButton.vue";
import md5 from 'md5';
const obj = reactive({
  name: '',
  email: '',
  text: '',
  h: ''
})
const name = ref('hello');
const email = ref('');
const text = ref('');
import axios from "axios";
import {reactive, ref} from "vue";

const emailSend = () => {
  obj.h = md5(obj.name + obj.email + obj.text + 'self-micromarket.com')
  axios.post("https://self-micromarket.com/send.php", obj)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.warn(error);
    });
}
</script>

<template>
<div class="container-fluid main-container">
  <Header />
    <router-view />
  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-4">
        <div class="modal-header">
          <button type="button" class="btn-close pt-4 pe-4" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body pt-0">
          <form class="was-validated text-center" @submit.prevent="emailSend">
            <div class="modal-title">
              leave an application
            </div>
            <div class="px-4 mt-3">
              <input type="text" id="name" placeholder="Name" name="name" class="ps-3 form-control" required v-model="obj.name" />
            </div>

            <div class="px-4 mt-3">
              <input type="text" placeholder="Phone" class="ps-3 form-control" required v-model="phone"/>
            </div>

            <div class="px-4 mt-3">
              <input type="email" placeholder="Email" class="ps-3 form-control" name="email" required v-model="obj.email"/>
            </div>

            <div class="px-4 mt-3">
              <input type="text" placeholder="Comment" class="ps-3 form-control" name="comment" required v-model="obj.text" />
            </div>

            <div class="d-flex justify-content-start mt-3">
              <input class="form-check-input w-full ms-4" type="checkbox" value="" id="invalidCheck" required>
              <label class="form-check-label ms-2 info" for="invalidCheck">
                By clicking "Submit", you agree to the privacy policy
              </label>
            </div>

            <div class="mt-4">
              <MyButton text="Send" type="submit" class="my-3 px-4"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</div>
</template>

<style scoped>

.modal {
  z-index: 9999;
}

.modal-body {
  margin-top: -20px;
}

.modal-header {
  border: none;
}

.modal-content {
  box-shadow: 8px 7px 51px 0 #00000033;
  background-color: #BEE2E5;
}

.btn-close {
  background: transparent url(./assets/home/close-icon.png) center/22px auto no-repeat;
}

.modal-title {
  font-size: 20px;
  font-weight: 700;
}

.form-control {
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  height: 50px;
  border-radius: 10px;
  width: 100%;
  box-shadow: 8px 7px 51px 0 #00000033;
}

input::placeholder {
  color: #C0C0C0;
}

.info {
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  text-align: left;
  margin-top: 4px;
}
</style>
