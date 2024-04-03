<script setup>
import { ref, inject } from 'vue'
import html from '@/assets/icons/html.svg'
import css from '@/assets/icons/css.svg'
import javascript from '@/assets/icons/javascript.svg'
import vue from '@/assets/icons/vue.svg'
import react from '@/assets/icons/react.svg'
import typescript from '@/assets/icons/typescript.svg'
import git from '@/assets/icons/git.svg'
import node from '@/assets/icons/node.svg'
import wordpress from '@/assets/icons/wordpress.svg'

const icons = ref([
  { src: html, alt: 'HTML logo' },
  { src: css, alt: 'CSS logo' },
  { src: javascript, alt: 'JavaScript logo' },
  { src: vue, alt: 'Vue logo' },
  { src: react, alt: 'React logo', class: 'rotate active' },
  { src: git, alt: 'Git logo' },
  { src: typescript, alt: 'TypeScript logo' },
  { src: node, alt: 'Node.js logo' },
  { src: wordpress, alt: 'WordPress logo' }
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
