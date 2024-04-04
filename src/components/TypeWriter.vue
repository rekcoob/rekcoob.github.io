<script setup>
import { ref, onMounted } from 'vue'

const words = ['I Bring Your Projects To Life']
const wait = 3000
const txt = ref('')
const wordIndex = ref(0)
const isDeleting = ref(false)

const type = () => {
  // Current index of word
  const current = wordIndex.value % words.length
  // Get full text of current word
  const fullTxt = words[current]

  // Check if deleting
  if (isDeleting.value) {
    // Remove char
    txt.value = fullTxt.substring(0, txt.value.length - 1)
  } else {
    // Add char
    txt.value = fullTxt.substring(0, txt.value.length + 1)
  }

  // Initial Type Speed
  let typeSpeed = 100

  if (isDeleting.value) {
    typeSpeed /= 2
  }

  // If word is complete
  if (!isDeleting.value && txt.value === fullTxt) {
    // Make pause at end
    typeSpeed = wait
    // Set delete to true
    isDeleting.value = true
  } else if (isDeleting.value && txt.value === '') {
    isDeleting.value = false
    // Move to next word
    wordIndex.value++
    // Pause before starting typing
    typeSpeed = 500
  }

  setTimeout(() => type(), typeSpeed)
}

onMounted(() => {
  type()
})
</script>

<template>
  <h1>
    <span class="txt-type" :data-words="words" data-wait="3000">
      <span class="txt">{{ txt }}</span>
    </span>
  </h1>
</template>

<style scoped>
/* Add your CSS styling here */
</style>
