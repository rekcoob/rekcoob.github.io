<script setup>
import closeIcon from '@/assets/img/close.png'

import ReactIcon from '@/assets/icons/react.svg'
import VueIcon from '@/assets/icons/vue.svg'
import NodeJSIcon from '@/assets/icons/node.svg'
import TypeScriptIcon from '@/assets/icons/typescript.svg'
import ReduxIcon from '@/assets/icons/redux.svg'
import MongoIcon from '@/assets/icons/mongo.svg'

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

const techIcons = {
  React: ReactIcon,
  Vue: VueIcon,
  NodeJS: NodeJSIcon,
  TypeScript: TypeScriptIcon,
  Redux: ReduxIcon,
  MongoDB: MongoIcon
}
</script>

<template>
  <div v-if="isActive" id="lightbox" class="flex-col center" @click="closeLightbox">
    <div class="flex-col center">
      <img class="lightbox-image" :src="currentImageSrc" :alt="currentImageTitle" />
      <div class="details_container flex">
        <div class="">
          <p>{{ currentImageTitle }}</p>
          <div class="flex">
            <!-- Project and GitHub Links -->
            <a :href="projectLink"> <i class="fas fa-link"></i> View Project </a>
            <a :href="githubLink"> <i class="fab fa-github"></i> View Code </a>

            <!-- Technologies Used -->
            <div class="technologies">
              <!-- <i v-for="tech in technologies" :key="tech" :class="techIcons[tech]"></i> -->

              <span v-for="tech in technologies" :key="tech" class="tech-icon">
                <img :src="techIcons[tech]" :alt="tech" />
              </span>
            </div>

            <!-- <div class="technologies flex center">
              <span v-for="tech in technologies" :key="tech" class="tech-icon">
                <i :class="techIcons[tech]" v-if="techIcons[tech]"></i> 
                <span v-else>{{ tech }}</span>
              </span>
            </div> -->
          </div>
        </div>

        <button @click="$emit('close')">
          <img class="close-btn" :src="closeIcon" alt="Close" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#lightbox {
  position: fixed;
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

.lightbox-image {
  border: 5px solid white;
}

.details_container {
  width: 100%;
  max-width: 870px;
  align-items: center;
  justify-content: space-between;
}

.details_container p {
  margin: 10px 0;
  text-align: left;
}

a {
  background-color: var(--primary-color);
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
}
a:hover {
  filter: brightness(0.85);
}

/* My Changes */
button {
  cursor: pointer;
  padding: 10px;
  background-color: transparent;
  border: none;
  opacity: 0.7;
}
button:hover {
  opacity: 1;
}
.close-btn {
  width: 40px;
}

.technologies {
  gap: 10px;
  margin: 0 auto;
}
.technologies i {
  font-size: 2rem;
  margin: 0 10px;
}

.tech-icon img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
</style>
