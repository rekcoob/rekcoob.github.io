<script setup>
import { ref, onMounted } from 'vue'

const words = ['I Bring Your Projects To Life']
const wait = 3000
const state = ref({
  txt: '',
  wordIndex: 0,
  isDeleting: false
})

// Function to delay execution
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const type = async () => {
  // Current index of word
  const current = state.value.wordIndex % words.length
  // Get full text of current word
  const fullTxt = words[current]

  // Check if deleting
  if (state.value.isDeleting) {
    // Remove char
    state.value.txt = fullTxt.substring(0, state.value.txt.length - 1)
  } else {
    // Add char
    state.value.txt = fullTxt.substring(0, state.value.txt.length + 1)
  }

  // Initial Type Speed
  let typeSpeed = 100
  if (state.value.isDeleting) typeSpeed /= 2

  // If word is complete
  if (!state.value.isDeleting && state.value.txt === fullTxt) {
    typeSpeed = wait // Pause at the end
    typeSpeed = wait
    // Set delete to true
    state.value.isDeleting = true
  } else if (state.value.isDeleting && state.value.txt === '') {
    state.value.isDeleting = false
    // Move to next word
    state.value.wordIndex++
    // Pause before starting typing
    typeSpeed = 500 // Pause before start typing
  }
  await sleep(typeSpeed)
  type()
}
onMounted(type)
</script>

<template>
  <h1>{{ state.txt }}</h1>
  <!-- <h1>
    <span class="txt">{{ state.txt }}</span>
  </h1> -->
</template>

<style scoped>
h1 {
  font-size: 3.4rem;
  border-right: 0.2rem solid #777;
}

/* Responsive */
@media (max-width: 768px) {
  h1 {
    font-size: 2.8rem;
  }
}
@media (max-width: 500px) {
  h1 {
    font-size: 2.4rem;
  }
}
</style>
