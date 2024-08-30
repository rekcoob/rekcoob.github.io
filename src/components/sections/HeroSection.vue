<script setup>
import TypeWriter from '../ui/TypeWriter.vue'
import githubSVG from '@/assets/icons/github.svg'
import githubSVG1 from '@/assets/icons/new/github-icon-1.svg'
import SvgIcon from '../ui/SvgIcon.vue'
</script>

<template>
  <section class="hero_section">
    <h2 class="primary fade-in">Ivanovic Marian</h2>
    <TypeWriter />
    <p class="fade-in">JavaScript developer</p>
    <a href="#work" class="btn-main fade-in">My Work</a>

    <!-- <a href="https://github.com/rekcoob">
      <img src="@/assets/icons/github.svg" alt="GitHub logo" class="github-icon" />
    </a> -->
    <!-- 
    <a href="https://github.com/rekcoob" class="github-icon">
      <SvgIcon :src="githubSVG1" size="24px" color="red" />
    </a> -->
  </section>
</template>

<style scoped>
.hero_section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
}
h2 {
  margin-top: -5rem;
}
p {
  font-size: 1.5rem;
  margin: 1rem 0 1.9rem;
}

img {
  width: 54px; /* Adjust the size of the icon */
  height: 54px; /* Adjust the size of the icon */
}

img:hover {
  background-color: var(--primary-color);
  transform: scale(1.2);
  transition: 0.5s ease-out;
}

/* Responsive */
@media (max-width: 768px) {
  h2 {
    margin-top: -3rem;
    font-size: 1.8rem;
  }
  p {
    font-size: 1.3rem;
  }
}

@media (max-width: 500px) {
  h2 {
    font-size: 1.4rem;
  }
}
</style>
