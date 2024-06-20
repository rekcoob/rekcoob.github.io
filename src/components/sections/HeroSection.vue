<script setup>
import TypeWriter from '../ui/TypeWriter.vue'
import githubSVG from '@/assets/icons/github.svg'
</script>

<template>
  <section class="hero_section">
    <h2 class="primary fade-in">Ivanovic Marian</h2>
    <TypeWriter />
    <p class="fade-in">Full stack web developer</p>
    <a href="#work" class="btn-main fade-in">My Work</a>
    <a href="https://github.com/rekcoob" class="github-icon fade-in">
      <!-- <img src="@/assets/icons/github.svg" alt="GitHub" />
      <img src="@/assets/icons/javascript.svg" alt="JavaScript logo" /> -->
      <!-- <svg v-html="githubSVG"></svg> -->
    </a>
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
</style>
