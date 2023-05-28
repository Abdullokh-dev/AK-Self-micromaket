<script setup>
const props = defineProps({
  height: {
    type: String,
    default: "64"
  },
  background: {
    type: String,
    default: "black"
  },
  color: {
    type: String,
    default: "white"
  },
  type: {
    type: String,
    default: "button",
  },
  text: {
    type: String,
    default: null
  },
  maxWidth: {
    type: String
  },
  onClick: {
    type: Function
  }
})
</script>
<template>
  <button class="button rounded-pill"
          :type="type"
          @click="onClick"
          :style="{height: height + 'px', backgroundColor: background, color: color, maxWidth: maxWidth + 'px'}"
  >
    {{ text }}
  </button>
</template>

<style scoped>
.button {
  border: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
}
</style>
