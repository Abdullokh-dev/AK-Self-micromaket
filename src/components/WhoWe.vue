<script setup>
// toDo
import { defineComponent } from 'vue'
import YouTube from 'vue3-youtube'
</script>

<template>
<div class="row d-flex justify-content-center">
  <div class="col-10">
    <div class="row">
      <div class="col-12 text-center">
        Who are we?
      </div>

      <div class="col-6">
        <p>
          micromarket with delicious and
          nutritious food according to your preferences
        </p>
        <p>
          Salads, first and hot dishes, rolls, desserts, fruits,
          snacks, coffee, soft drinks, ice cream, and much more
        </p>

        <button type="button" class="btn btn-dark rounded-pill ms-2">
          Download the presentation
        </button>
      </div>
      <div class="col">
        <YouTube
          style="width: 300px !important;border-radius: 20px!important;"
          id="videoCard"
          src="https://youtu.be/3GsKVNkwS1o"
          @ready="onReady"
          ref="youtube" />
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
