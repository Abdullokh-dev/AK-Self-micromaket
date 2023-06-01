<script setup>
import YouTube from 'vue3-youtube'
import MyButton from "./MyButton.vue";
import axios from "axios";
import {saveAs} from 'file-saver';
const download = (url) => {
  axios.get(url, {responseType: 'blob'})
    .then(response => {
      saveAs(response.data, 'Presentation self');
    })
}
</script>

<template>
<div class="row d-flex justify-content-center">
  <div class="col-12 col-xl-10">
    <div class="row flex-row-reverse">
      <div class="col-12 text-center title">
        who are we?
        <!-- Bg INDEX -->
        <div class="d-none d-lg-block">
          <img alt="#" class="bg-index" src="../assets/home/bg-index.png" height="70" draggable="false">
        </div>
      </div>

      <div class="col-12 col-lg-6 d-flex justify-content-center">
        <YouTube
          id="videoCard"
          src="https://youtu.be/3GsKVNkwS1o"
          ref="youtube"
        />
      </div>

      <div class="col-12 col-lg-6 mt-2 mt-lg-0">
        <div class="d-flex justify-content-start">
          <span class="text-bolder ms-3 ms-md-5 ms-xl-0 text-start">
            micromarket with delicious and
            nutritious food according to your preferences
          </span>
        </div>
        <div class="d-flex justify-content-start mt-4">
          <span class="text-bottom ms-3 ms-md-5 ms-xl-0 text-start">
            Salads, first and hot dishes, rolls, desserts, fruits,
            snacks, coffee, soft drinks, ice cream, and much more
          </span>
        </div>

        <div class="d-flex justify-content-center justify-content-lg-start">
          <MyButton text="download the presentation" @click="download('presentation.pdf')" class="ms-0 ms-md-5 ms-xl-0 my-4 my-lg-0 mt-lg-5 px-4"/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.title {
  font-size: 32px;
  font-weight: 800;
  margin-top: 96px;
  z-index: 1;
}

.bg-index {
  position: relative;
  top: 50%;
  left: 90px;
  z-index: -1;
  margin-top: -85px;
}

.text-bolder {
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  max-width: 430px;
}

.text-bottom {
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  max-width: 430px;
}

.video-card {
  width: 100% !important; border-radius: 20px!important;
}

@media only screen and (max-width: 992px) {
  .text-bolder {
    max-width: 100%;
  }
  .text-bottom {
    max-width: 100%;
  }
  .video-card {
    width: 90% !important;
    border-radius: 20px!important;
  }
}
</style>
