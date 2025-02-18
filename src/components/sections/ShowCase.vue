<script setup>
import { ref, provide, onMounted, watch } from 'vue'
import {
  HtmlIcon,
  CssIcon,
  JavascriptIcon,
  VueIcon,
  ReactIcon,
  TypescriptIcon,
  GitIcon,
  NodeIcon,
  // AngularIcon,
  // PythonIcon,
  // PhpIcon,
  DockerIcon,
} from '@/assets/icons'

import ToggleBtn from '../ui/ToggleBtn.vue'

const icons = ref([
  { src: HtmlIcon, alt: 'HTML logo' },
  { src: CssIcon, alt: 'CSS logo' },
  { src: JavascriptIcon, alt: 'JavaScript logo' },
  { src: VueIcon, alt: 'Vue logo' },
  { src: ReactIcon, alt: 'React logo', class: 'rotate' }, // Handles rotation via class
  // { src: AngularIcon, alt: 'Angular logo' },
  { src: GitIcon, alt: 'Git logo' },
  { src: TypescriptIcon, alt: 'TypeScript logo' },
  { src: NodeIcon, alt: 'Node.js logo' },
  // { src: PythonIcon, alt: 'Python logo' },
  // { src: PhpIcon, alt: 'Php logo' },
  { src: DockerIcon, alt: 'Docker logo' },
])

// Active index state
const activeIndex = ref(null)
const isLighted = ref(false)
provide('isLighted', isLighted)

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

// Set React icon active after 2 seconds if toggle is not pressed
const lightUpReactIcon = () => {
  setTimeout(() => {
    if (!isLighted.value) {
      activeIndex.value = 4
    }
  }, 1000)
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
              rotate: index === 4,
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
  grid-gap: 3rem;
  justify-content: center;
  align-items: center;
  text-align: center;
}

img {
  margin: 1rem 0;
  width: 6.5rem;
  filter: grayscale(100%) brightness(50%);
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

/* Responsive */
@media (max-width: 500px) {
  .experience {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  img {
    width: 3rem;
  }
}
@media (max-width: 768px) {
  .experience {
    grid-gap: 2rem;
  }
  img {
    width: 5rem;
  }
}
</style>
