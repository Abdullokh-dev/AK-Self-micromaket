<script setup>

</script>

<template>
  <div class="row main-row">
    <div class="col">
      <div class="row">
        <div class="col-12 text-center main-title">
          Convenience of modular systems
        </div>
        <!-- Bg INDEX -->
        <div>
          <img alt="#" class="bg-index" src="../assets/bg-index.png" height="70">
        </div>
        <div class="col-12 d-flex justify-content-center text-center">
          <div class="main-description mt-4">
            The modular system allows you to create a micromarket even in the smallest space, which will harmoniously fit into any interior.
          </div>
        </div>
      </div>

      <div class="row d-flex justify-content-center">
        <div class="col-12">
          <div class="row d-flex justify-content-center">

            <div class="col-12 col-md-6 col-lg-4 col-xxl-3 text-center">
              <div class="title my-5">light snacks</div>
              <div class="system-img checked-img">
                <img src="../assets/system-1.png" alt="">
              </div>
              <div class="description my-5"> from 8,6 sq.feet </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4 col-xxl-3 text-center">
              <div class="title my-5">coffee break</div>
              <div class="system-img">
                <img src="../assets/system-2.png" alt="">
              </div>
              <div class="description my-5">from 12,9 sq.feet</div>
            </div>

            <div class="col-12 col-md-6 col-lg-4 col-xxl-3 text-center">
              <div class="title my-5">business lunch</div>
              <div class="system-img">
                <img src="../assets/system-3.png" alt="">
              </div>
              <div class="description my-5">from 18,2 sq.feet</div>
            </div>

            <div class="col-12 col-md-6 col-lg-4 col-xxl-3 text-center">
              <div class="title my-5">all inclusive</div>
              <div class="system-img">
                <img src="../assets/system-4.png" alt="">
              </div>
              <div class="description my-5">from 21,5 sq.feet</div>
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
  margin-top: 96px;
  z-index: 1;
}

.main-row {
  background-color: white;
}

.bg-index {
  position: relative;
  top: 50%;
  left: 66%;
  z-index: 0;
  margin-top: -60px;
}

.main-description {
  max-width: 762px;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
}

.title {
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
}

.description {
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
}

.system-img > img{
  max-height: 50vw !important;
}

@media only screen and (min-width: 768px) {
  .system-img > img{
    max-height: 25vw !important;
  }
}

@media only screen and (min-width: 992px) {
  .system-img > img{
    max-height: 12vw !important;
  }
}

</style>
