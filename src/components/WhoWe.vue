<script setup>
import {onMounted, ref} from "vue";
import MyButton from "./MyButton.vue";
import axios from "axios";
import {saveAs} from 'file-saver';
const result = ref()
const youtubeURL = ref('https://youtu.be/3GsKVNkwS1o')
const download = (url) => {
  axios.get(url, {responseType: 'blob'})
    .then(response => {
      saveAs(response.data, 'Presentation self');
    })
}

const loadURL = () => {
  const youtubeEmbedTemplate = "https://www.youtube.com/embed/";
  const url = youtubeURL.value.split(
    /(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/
  );
  console.log("url", url);
  const YId =
    undefined !== url[2] ? url[2].split(/[^0-9a-z_/\\-]/i)[0] : url[0];
  console.log("YId", YId);
  if (YId === url[0]) {
    console.log("not a youtube link");
  } else {
    console.log("it's  a youtube video");
  }
  const topOfQueue = youtubeEmbedTemplate.concat(YId);
  console.log("topOfQueue", topOfQueue);
  result.value = topOfQueue;
  youtubeURL.value = "";
}

onMounted(() =>{
  loadURL()
})
</script>

<template>
<div class="row d-flex justify-content-center">
  <div class="col-12 col-xl-10">
    <div class="row flex-row-reverse">
      <div class="col-12 text-center title">
        Who are we?
      </div>
      <!-- Bg INDEX -->
      <div>
        <img alt="#" class="bg-index" src="../assets/home/bg-index.png" height="70" draggable="false">
      </div>

      <div class="col-12 col-lg-6 d-flex justify-content-center">
        <iframe width="560" height="315" :src="result" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
          <MyButton text="Download the presentation" @click="download('presentation.pdf')" class="ms-0 ms-md-5 ms-xl-0 my-4 my-lg-0 mt-lg-5 px-4"/>
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
  left: 56%;
  transform: translate(-50%, -50%);
  z-index: 0;
  margin-top: -40px;
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
