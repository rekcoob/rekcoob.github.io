<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: '24px'
  },
  color: {
    type: String,
    default: 'currentColor'
  }
})
</script>

<template>
  <svg :style="{ width: size, height: size, fill: color }" v-html="src"></svg>
</template>

<style scoped>
svg {
  display: inline-block;
  vertical-align: middle;
}
</style>
