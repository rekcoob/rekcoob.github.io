<script setup>
import {
  ReactIcon,
  VueIcon,
  NodeIcon,
  TypescriptIcon,
  ReduxIcon,
  MongoIcon,
  closeIcon,
} from '@/assets/icons'

defineProps({
  isActive: Boolean,
  currentImageSrc: String,
  currentImageTitle: String,
  projectLink: String,
  githubLink: String,
  previewImage: String,
  technologies: Array,
})

const emit = defineEmits(['close'])

const closeLightbox = (e) => {
  if (e.target === e.currentTarget) {
    emit('close')
  }
}

const techIcons = {
  React: ReactIcon,
  Vue: VueIcon,
  Node: NodeIcon,
  Typescript: TypescriptIcon,
  Redux: ReduxIcon,
  MongoDB: MongoIcon,
}
</script>

<template>
  <div v-if="isActive" class="lightbox flex-col center" @click="closeLightbox">
    <img class="lightbox-image" :src="currentImageSrc" :alt="currentImageTitle" />

    <div class="details_container">
      <div class="title">
        <p>{{ currentImageTitle }}</p>
      </div>

      <div class="links">
        <a :href="projectLink"> <i class="fas fa-link"></i> View Project </a>
        <a :href="githubLink"> <i class="fab fa-github"></i> View Code </a>
      </div>

      <div class="techs">
        <span v-for="tech in technologies" :key="tech">
          <!-- <img :src="techIcons[tech]" :alt="tech" class="tech-icon" /> -->
          <img v-if="techIcons[tech]" :src="techIcons[tech]" :alt="tech" class="tech-icon" />
        </span>
      </div>

      <div class="close-btn" @click="$emit('close')">
        <img :src="closeIcon" alt="Close Button" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  animation: fadeIn 0.7s;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-image {
  border: 3px solid white;
  max-width: 870px;
  max-height: 80vh;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}

.details_container {
  width: 100%;
  max-width: 870px;
  display: grid;
  grid-template-columns: auto 1fr 40px;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
}

.title {
  grid-column: 1 / 3;
  text-align: left;
}
.title p {
  margin: 5px 0;
  /* Hide Text Overflow */
  /* white-space: nowrap; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
}

.links a {
  background-color: var(--primary-color);
  padding: 8px 16px;
  margin-right: 8px;
  border-radius: 5px;
  /* filter: brightness(0.85); */
  filter: opacity(0.85);
}
.links a:hover {
  filter: opacity(1);
}

.techs {
  margin-left: 10px;
  justify-self: start;
  align-self: center;
}
.tech-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.close-btn {
  grid-column: 3;
  grid-row: 1 / 3;
  cursor: pointer;
  opacity: 0.7;
}

.close-btn:hover {
  opacity: 1;
}

@media (max-width: 678px) {
  .links a {
    padding: 5px 10px;
    font-size: 0.85rem;
  }
  .close-btn {
    width: 30px;
    height: 30px;
  }
  .tech-icon {
    width: 24px;
    height: 24px;
  }
}
</style>
