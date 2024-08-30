<script setup>
import { ref } from 'vue'
import Lightbox from '../ui/LightboxComponent.vue'
import movieApp from '@/assets/img/projects/movie-app.jpg'
import mernShop from '@/assets/img/projects/mern-shop.jpg'
import breakingBad from '@/assets/img/projects/breaking-bad.jpg'
import githubSearcher from '@/assets/img/projects/github-searcher.jpg'

const projects = ref([
  {
    img: breakingBad,
    title:
      'React app using breaking bad api to show and filter characters from the show. Built with React, Typescript & Sass',
    name: 'Breaking Bad Actors',
    projectLink: 'https://rekcoob-movies.netlify.app/',
    githubLink: 'https://github.com/rekcoob/breaking-bad',
    technologies: ['Vue', 'Node']
  },
  {
    img: movieApp,
    title:
      'Movie app built with React, Redux & TypeScript. With add to favorites and infinite scroll features',
    name: 'Movie App',
    projectLink: 'https://rekcoob-movies.netlify.app/',
    githubLink: 'https://github.com/rekcoob/movie-app',
    technologies: ['React', 'TypeScript', 'Redux']
  },
  {
    img: mernShop,
    title:
      'Full featured eCommerce with shopping cart, product ratings, PayPal integration, admin management and checkout process',
    name: 'MernShop',
    projectLink: 'https://mern-eshop-app.herokuapp.com/',
    githubLink: 'https://github.com/rekcoob/mern-shop',
    technologies: ['React', 'Typescript', 'node']
  },
  {
    img: githubSearcher,
    title:
      'App using github_api to search Github profiles. Using React, Typescript, Context Api & Hooks',
    name: 'Github Searcher',
    projectLink: 'https://rekcoob-github.netlify.app/',
    githubLink: 'https://github.com/rekcoob/github-searcher',
    technologies: ['React', 'Javascript']
  }
])

const isLightboxActive = ref(false)
const currentImageSrc = ref('')
const currentImageTitle = ref('')
const currentProject = ref({ projectLink: '', githubLink: '', technologies: [] })

const showLightbox = (project) => {
  currentImageSrc.value = project.img
  currentImageTitle.value = project.title
  currentProject.value = project // Update the current project data
  isLightboxActive.value = true
}
</script>

<template>
  <section id="work" class="my_work">
    <h1>
      My
      <span class="primary">Work</span>
    </h1>
    <h3>Check out some of my projects...</h3>

    <div class="grid">
      <div v-for="project in projects" :key="project.img">
        <a href="#" @click.prevent="showLightbox(project)">
          <img :src="project.img" :alt="project.title" />
        </a>
        <a :href="project.projectLink" class="btn-light">
          <i class="fas fa-at"></i> {{ project.name }} | Link
        </a>
        <a :href="project.githubLink" class="btn-dark"> <i class="fab fa-github"></i> View Code </a>
      </div>
    </div>
    <Lightbox
      :isActive="isLightboxActive"
      :currentImageSrc="currentImageSrc"
      :currentImageTitle="currentImageTitle"
      :projectLink="currentProject.projectLink"
      :githubLink="currentProject.githubLink"
      :technologies="currentProject.technologies"
      @close="isLightboxActive = false"
    />
  </section>
</template>

<style scoped>
.my_work {
  margin: 3rem 5rem 5rem;
}

h1 {
  font-size: 4rem;
  margin: 2rem 0 1rem;
}

h3 {
  margin-bottom: 3rem;
}

img {
  width: 100%;
  border: 2px solid #fff;
  transition:
    opacity 0.5s ease-out,
    border-color 0.5s ease-out;
}

img:hover {
  opacity: 0.5;
  border-color: var(--primary-color);
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

/* Responsive */
@media (max-width: 500px) {
  .my_work {
    margin: 3rem 2rem;
  }
  h1 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.3rem;
  }
  .grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 501px) and (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  .grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1200px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
