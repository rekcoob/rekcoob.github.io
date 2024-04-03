<script setup>
import { ref, inject } from 'vue'

const icons = ref([
  { src: '/src/assets/icons/html.svg', alt: 'HTML logo' },
  { src: '/src/assets/icons/css.svg', alt: 'CSS logo' },
  { src: '/src/assets/icons/javascript.svg', alt: 'JavaScript logo' },
  { src: '/src/assets/icons/vue.svg', alt: 'Vue logo' },
  { src: '/src/assets/icons/react.svg', alt: 'React logo', class: 'rotate active' },
  { src: '/src/assets/icons/git.svg', alt: 'Git logo' },
  { src: '/src/assets/icons/typescript.svg', alt: 'TypeScript logo' },
  { src: '/src/assets/icons/node-js.svg', alt: 'Node.js logo' },
  { src: '/src/assets/icons/wordpress.svg', alt: 'WordPress logo' }
])

const clickedIndex = ref(4)

const clicked = (index) => {
  console.log(index)
  clickedIndex.value = index
}

const color = inject('isLighted')
</script>

<template>
  <section class="tab-content">
    <div class="container">
      <div id="tab-1-content" class="tab-content-item show">
        <div class="experience">
          <div v-for="(icon, index) in icons" :key="index">
            <!-- <img :src="icon.src" :alt="icon.alt" :class="icon.class" @click="clicked(index)" /> -->
            <img
              :src="icon.src"
              :alt="icon.alt"
              :class="{ active: color === true }"
              @click="clicked(index)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Grid Container */
.experience {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
}

img {
  width: 7rem;
  cursor: pointer;
  filter: grayscale(100%) brightness(50%);
}
img:hover {
  filter: grayscale(0%) brightness(100%);
  transform: scale(1.2);
  transition: 0.5s ease-out;
}
.rotate {
  animation: rotate 4s linear infinite;
}
.active {
  filter: grayscale(0%) brightness(100%);
}

.shadow {
  text-shadow: 0 0 50px #02968a;
}
</style>
