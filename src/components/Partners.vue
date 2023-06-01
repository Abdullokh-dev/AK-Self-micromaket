<script setup>
</script>
<template>
  <div class="row mt-5 main-row">
    <div class="col-12 text-center main-title">
      our partners
      <!-- Bg INDEX -->
      <div class="d-none d-lg-block">
        <img alt="#" class="bg-index-drop" src="../assets/home/bg-index.png" height="70" draggable="false">
      </div>
    </div>
  </div>
  <div class="row d-flex justify-content-center main-row">
    <div class="col p-0 d-flex justify-content-center">
      <!-- First Belt -->
      <div class="brand-wheel">
        <div class="brand-slide">
          <div class="logo-div">
            <img alt="#" src="../assets/clip/img.png" height="50" draggable="false" width="1500">
          </div>
        </div>
        <div class="brand-slide delay">
          <div class="logo-div">
            <img alt="#" src="../assets/clip/img.png" height="50" draggable="false" width="1500">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row d-flex justify-content-center main-row pb-5">
    <div class="col p-0 d-flex justify-content-center">
      <!-- First Belt -->
      <div class="brand-wheel">
        <div class="brand-slide">
          <div class="logo-div">
            <img alt="#" src="../assets/clip/img_1.png" height="50" draggable="false" width="1500">
          </div>
        </div>
        <div class="brand-slide delay">
          <div class="logo-div">
            <img alt="#" src="../assets/clip/img_1.png" height="50" draggable="false" width="1500">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-row {
  background-color: white;
}

.main-title {
  margin: 96px 0 20px 0;
  font-size: 32px;
  font-weight: 800;
  line-height: 32px;
  z-index: 1;
}

.bg-index-drop {
  position: relative;
  left: 90px;
  z-index: -1;
  margin-top: -60px;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.brand-wheel {
  flex-direction: row;
  align-items: center;
  display: flex;
  width: 100%;
  max-width: 1600px;
  overflow: hidden;
  position: relative;
  height: 100px;
  background-color: white;
  --animationspeed: 45s;
  --animationdelay: calc(var(--animationspeed) / 2);
}

.brand-wheel::before {
  position: absolute;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100%;
  width: 5%;
  z-index: 2;
  pointer-events: none;
}

.brand-wheel::after {
  position: absolute;
  background-image: linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100%;
  width: 5%;
  z-index: 2;
  pointer-events: none;
  right: 0;
}

.brand-slide {
  flex-shrink: 0;
  position: absolute;
  animation-name: slidelogo;
  animation-duration: var(--animationspeed);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  min-width: 100%;
  display: flex;
  justify-content: space-around;
}

.brand-slide.delay {
  transform: translateX(100%);
  animation-name: slidelogo2;
}

.logo-div {
  display: inline-flex;
  align-self: center;
  animation: fade-in 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
  padding: 0 20px 0 20px;
}

@keyframes slidelogo {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes slidelogo2 {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>
