<template>
  <div v-if="isActive" id="lightbox" @click="closeLightbox">
    <div class="lightbox-content">
      <img :src="currentImageSrc" :alt="currentImageTitle" />
      <p>{{ currentImageTitle }}</p>

      <a href="gitbhub/com"><i class="fas fa-at"></i> Link</a>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, onMounted } from 'vue'

const props = defineProps({
  isActive: Boolean,
  currentImageSrc: String,
  currentImageTitle: String
})

const emit = defineEmits(['close'])

// const closeLightbox = (e) => {
//   if (e.target !== e.currentTarget) return
//   emit('close')
// }
const closeLightbox = (e) => {
  if (e.target === e.currentTarget) {
    emit('close')
  }
}

onMounted(() => {
  // Ensure the lightbox fades in when it becomes active
  const lightbox = document.querySelector('.lightbox')
  if (lightbox) {
    lightbox.classList.add('fade-in')
  }
})
</script>

<style scoped>
#lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.7s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.lightbox-content {
  text-align: center;
}
img {
  max-width: 90%;
  max-height: 80%;
  border: 5px solid white;
}
p {
  color: white;
  margin-top: 1rem;
}
</style>
