<script setup>
import 'youtube-video-element';
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
      <div class="col-6">
        <youtube-video controls src="https://www.youtube.com/watch?v=rubNgGj3pYo"></youtube-video>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
