<script setup>
import TypeWriter from '../ui/TypeWriter.vue'
</script>

<template>
  <section class="hero">
    <h2 class="primary fade-in">Ivanovic Marian</h2>
    <TypeWriter />
    <p class="fade-in">Full stack web developer</p>
    <a href="#work" class="btn-main fade-in">My Work</a>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
}
.hero h2 {
  margin-top: -5rem;
}
.hero p {
  font-size: 1.5rem;
  margin: 1rem 0 1.9rem;
}
</style>
