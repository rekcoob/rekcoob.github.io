<template>
  <section id="work" class="my_work">
    <h1>
      My
      <span class="primary">Work</span>
    </h1>
    <h3>Check out some of my projects...</h3>

    <div class="grid">
      <div v-for="project in projects" :key="project.img">
        <a href="#" @click.prevent="showLightbox(project.img, project.title)">
          <img :src="project.img" :alt="project.title" />
        </a>
        <a :href="project.liveLink" class="btn-light">
          <i class="fas fa-at"></i> {{ project.name }} | Link
        </a>
        <a :href="project.codeLink" class="btn-dark"> <i class="fab fa-github"></i> View Code </a>
      </div>
    </div>
    <Lightbox
      :isActive="isLightboxActive"
      :currentImageSrc="currentImageSrc"
      :currentImageTitle="currentImageTitle"
      @close="isLightboxActive = false"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Lightbox from '../ui/LightboxComponent.vue'
import movieApp from '@/assets/img/projects/movie-app.jpg'
import mernShop from '@/assets/img/projects/mern-shop.jpg'
import breakingBad from '@/assets/img/projects/breaking-bad.jpg'
import githubSearcher from '@/assets/img/projects/github-searcher.jpg'
import paymentTracker from '@/assets/img/projects/payment-tracker.jpg'
import contactBook from '@/assets/img/projects/contact-book.jpg'

const projects = ref([
  {
    img: breakingBad,
    title:
      'React app using breaking bad api to show and filter characters from the show. Built with React, Typescript & Sass',
    name: 'Breaking Bad Actors',
    liveLink: 'https://bb-cast.netlify.app/',
    codeLink: 'https://github.com/rekcoob/breaking-bad'
  },
  {
    img: movieApp,
    title:
      'Movie app built with React, Redux & TypeScript. With add to favorites and infinite scroll features',
    name: 'Movie App',
    liveLink: 'https://rekcoob-movies.netlify.app/',
    codeLink: 'https://github.com/rekcoob/movie-app'
  },
  {
    img: mernShop,
    title:
      'Full featured eCommerce with shopping cart, product ratings, PayPal integration, admin management and checkout process',
    name: 'MernShop',
    liveLink: 'https://mern-eshop-app.herokuapp.com/',
    codeLink: 'https://github.com/rekcoob/mern-shop'
  },

  {
    img: githubSearcher,
    title:
      'App using github_api to search Github profiles. Using React, Typescript, Context Api & Hooks',
    name: 'Github Searcher',
    liveLink: 'https://rekcoob-github.netlify.app/',
    codeLink: 'https://github.com/rekcoob/github-searcher'
  }
])

const isLightboxActive = ref(false)
const currentImageSrc = ref('')
const currentImageTitle = ref('')

const showLightbox = (src, title) => {
  currentImageSrc.value = src
  currentImageTitle.value = title
  isLightboxActive.value = true
}
</script>

<style scoped>
.my_work {
  margin: 3rem 5rem;
  margin-bottom: 5rem;
}

h1 {
  font-size: 4rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

h3 {
  margin-bottom: 3rem;
}

img {
  width: 100%;
  border: 2px #fff solid;
}

img:hover {
  opacity: 0.5;
  border-color: var(--primary-color);
  -webkit-transition: ease-out 0.5s;
  transition: ease-out 0.5s;
}

.btn-dark,
.btn-light {
  display: block;
  padding: 0.5rem 1rem;
  margin-bottom: 0.3rem;
}

.btn-dark:hover,
.btn-light:hover {
  background: var(--primary-color);
}

.btn-dark {
  background: black;
}

.btn-light {
  background: #c4c4c4;
  color: #333;
}

.btn-light:hover {
  color: #fff;
}

.grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
}

/*** Responsive ***/
/* Small screens (small tablets and below) */
@media (max-width: 768px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr;
  }
}

/* Medium screens (medium tablets) */
@media (min-width: 769px) and (max-width: 1199px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Large screens (desktops and larger tablets) */
@media (min-width: 1200px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
