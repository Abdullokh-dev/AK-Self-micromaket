<script setup>
import Flicking from "@egjs/vue3-flicking";
import '@egjs/vue3-flicking/dist/flicking.css';
import '@egjs/vue3-flicking/dist/flicking-inline.css'
</script>

<template>
  <div class="row">
    <div class="col-12 p-0">
      <Flicking :options="{ align: 'prev', circular: true }" @move-end="onMoveEnd">
        <div class="panel first-slide">

          <div class="row d-flex justify-content-center">
            <div class="col-12 col-xl-6">
              <img src="../assets/vector.png" width="186" alt="" class="vector">
              <img src="../assets/bottle.png" alt="#" draggable="false" class="bottle">
            </div>


            <div class="col-12 col-xl-6"></div>
          </div>
        </div>
        <div class="panel">2</div>
        <div class="panel">3</div>
      </Flicking>
    </div>
  </div>
</template>


<style scoped>
.first-slide {
  width: 100vw;
  height: 90vh;
  font-family: 'Montserrat', sans-serif;
  -webkit-background-size: cover ;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background: url(../assets/img.png) no-repeat bottom right fixed;
}

.bottle {
  position: absolute;
  margin-top: 140px;
  right: 0;
  width: 80vw;
  max-width: 546px;
}

.vector {

}

</style>
