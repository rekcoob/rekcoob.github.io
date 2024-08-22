<script setup>
import { ref, provide, onMounted, watch } from 'vue'
import html from '@/assets/icons/html.svg'
import css from '@/assets/icons/css.svg'
import javascript from '@/assets/icons/javascript.svg'
import vue from '@/assets/icons/vue.svg'
import react from '@/assets/icons/react.svg'
import typescript from '@/assets/icons/typescript.svg'
import git from '@/assets/icons/git.svg'
import node from '@/assets/icons/node.svg'
import php from '@/assets/icons/php.svg'
import ToggleBtn from '../ui/ToggleBtn.vue'

const icons = ref([
  { src: html, alt: 'HTML logo' },
  { src: css, alt: 'CSS logo' },
  { src: javascript, alt: 'JavaScript logo' },
  { src: vue, alt: 'Vue logo' },
  { src: react, alt: 'React logo', class: 'rotate' },
  { src: git, alt: 'Git logo' },
  { src: typescript, alt: 'TypeScript logo' },
  { src: node, alt: 'Node.js logo' },
  { src: php, alt: 'php logo' }
])

// Active index state
const activeIndex = ref(null)
const isLighted = ref(false)
provide('isLighted', isLighted)

provide

// Method to set the active icon
const setActiveIndex = (index) => {
  if (!isLighted.value) {
    activeIndex.value = index
  }
}

// Method to reset the active icon when mouse leaves
const resetStateOriginal = () => {
  if (!isLighted.value) {
    activeIndex.value = null
  }
}

// Method for handling icon clicks
const clicked = (index) => {
  if (!isLighted.value) {
    activeIndex.value = index
  }
}

// Set React icon active after 2 seconds if toggle is not pressed
const lightUpReactIcon = () => {
  setTimeout(() => {
    if (!isLighted.value) {
      activeIndex.value = 4
    }
  }, 2000)
}

// Watch for changes in the `isLighted` state
watch(isLighted, (newValue) => {
  if (newValue) {
    activeIndex.value = -1 // Use -1 to indicate all icons should be active
  } else {
    activeIndex.value = null // Reset to no active icon when isLighted is false
    lightUpReactIcon() // Light up the React icon after 2 seconds
  }
})

onMounted(() => {
  lightUpReactIcon() // Set the React icon active after 2 seconds on mount
})
</script>

<template>
  <section id="skills">
    <div class="showcase">
      <ToggleBtn />
    </div>
    <div class="container">
      <div class="experience">
        <div v-for="(icon, index) in icons" :key="index">
          <img
            :src="icon.src"
            :alt="icon.alt"
            :class="{
              active: isLighted === true || activeIndex === index,
              rotate: index === 4
            }"
            @mouseenter="setActiveIndex(index)"
            @mouseleave="resetStateOriginal"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.showcase {
  padding-bottom: 1rem;
  border-bottom: 3px solid #3d3d3d;
  color: #999;
}

.container {
  max-width: 70%;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
}

.experience {
  margin: 5rem 0 10rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
}

img {
  width: 7rem;
  filter: grayscale(100%) brightness(50%);
  /* cursor: pointer; */
}
img:hover {
  filter: grayscale(0%) brightness(100%);
  transform: scale(1.2);
  transition: 0.5s ease-out;
}
.active {
  filter: grayscale(0%) brightness(100%);
}
.rotate {
  animation: rotate 4s linear infinite;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.shadow {
  text-shadow: 0 0 50px #02968a;
}
</style>
