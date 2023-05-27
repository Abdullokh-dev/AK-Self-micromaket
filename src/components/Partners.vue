<script setup>

</script>
<template>
  <div class="row mt-5 main-row">
    <div class="col-12 text-center main-title">
      our partners
    </div>
    <!-- Bg INDEX -->
    <div>
      <img alt="#" class="bg-index-drop" src="../assets/bg-index.png" height="70">
    </div>
  </div>
  <div class="row">
    <div class="col d-flex position-relative">
      <div class="marquee">
        <span>
          <img src="../assets/clip/img.png" alt="#" height="100">
        </span>
      </div>
      <div class="marquee marquee2">
        <span>
          <img src="../assets/clip/img.png" alt="#" height="100">
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-row {
  background-color: white;
}

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

.marquee {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
}

.marquee span {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 15s linear infinite;
}

.marquee2 span {
  animation-delay: 7.5s;
}

@keyframes marquee {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>
