<script setup>
// import { defineProps, defineEmits } from 'vue'

defineProps({
  isActive: Boolean,
  currentImageSrc: String,
  currentImageTitle: String,
  projectLink: String,
  githubLink: String,
  previewImage: String,
  technologies: Array
})

const emit = defineEmits(['close'])

const closeLightbox = (e) => {
  if (e.target === e.currentTarget) {
    emit('close')
  }
}
</script>

<template>
  <div v-if="isActive" id="lightbox" @click="closeLightbox">
    <div class="lightbox_content flex-col center">
      <img :src="currentImageSrc" :alt="currentImageTitle" />
      <div class="details_container flex">
        <div class="">
          <p>{{ currentImageTitle }}</p>
          <div class="flex">
            <!-- Project and GitHub Links -->
            <a :href="projectLink"> <i class="fas fa-link"></i> View Project </a>
            <a :href="githubLink"> <i class="fab fa-github"></i> View Code </a>
          </div>

          <!-- Technologies Used -->
          <div class="technologies">
            <span v-for="tech in technologies" :key="tech" class="tech-icon">
              <!-- <i :class="techIcons[tech]"></i> -->
            </span>
          </div>
        </div>

        <button class="close-btn" @click="$emit('close')">X</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#lightbox {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.7s;
  z-index: 1000;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* sem bol problem  bud cenenter*/
.lightbox_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* max-width: 90%; */
}

img {
  border: 5px solid white;
}

.details_container {
  width: 100%;
  max-width: 870px;
  align-items: center;
  justify-content: space-between;
}

p {
  text-align: left;
}

a {
  background-color: var(--primary-color);
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
}

/* My Changes */
button {
  width: 50px;
  height: 50px;
  cursor: pointer;
}
</style>
