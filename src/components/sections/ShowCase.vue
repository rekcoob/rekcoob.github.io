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
import ToggleBtn from '../ui/ToggleBtn.vue'

// const icons = ref([
//   { src: html, alt: 'HTML logo' },
//   { src: css, alt: 'CSS logo' },
//   { src: javascript, alt: 'JavaScript logo' },
//   { src: vue, alt: 'Vue logo' },
//   { src: react, alt: 'React logo', class: 'rotate active ' },
//   { src: git, alt: 'Git logo' },
//   { src: typescript, alt: 'TypeScript logo' },
//   { src: node, alt: 'Node.js logo' },
//   { src: wordpress, alt: 'WordPress logo' }
// ])
const state = ref({
  active: true,
  rotate: true
})

const clicked = () => {
  // React Clicked ! or react Vue!!
  console.log('hello')
}

const color = inject('isLighted')
</script>

<template>
  <section id="skills">
    <div class="showcase">
      <ToggleBtn />
    </div>
    <div class="container">
      <div class="experience">
        <div>
          <img src="@/assets/icons/html.svg" alt="JavaScript logo" @click="clicked()" />
        </div>
        <div>
          <img src="@/assets/icons/css.svg" alt="JavaScript logo" @click="clicked()" />
        </div>
        <div>
          <img src="@/assets/icons/javascript.svg" alt="JavaScript logo" @click="clicked()" />
        </div>
        <div>
          <img src="@/assets/icons/vue.svg" alt="JavaScript logo" @click="clicked()" />
        </div>
        <div>
          <img
            src="@/assets/icons/react.svg"
            alt="JavaScript logo"
            @click="clicked()"
            class="active rotate"
          />
        </div>
        <div>
          <img src="@/assets/icons/javascript.svg" alt="JavaScript logo" @click="clicked()" />
        </div>
        <div>
          <img src="@/assets/icons/javascript.svg" alt="JavaScript logo" @click="clicked()" />
        </div>
        <div>
          <img src="@/assets/icons/javascript.svg" alt="JavaScript logo" @click="clicked()" />
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
  /* cursor: pointer; */
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
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.active {
  filter: grayscale(0%) brightness(100%);
  /* -webkit-box-reflect: below 1px linear-gradient(transparent, #0003); */
}
</style>
