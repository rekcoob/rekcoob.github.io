<script setup>
import TypeWriter from '../ui/TypeWriter.vue'
</script>

<template>
  <section class="hero_section">
    <h2 class="primary fade-in">Ivanovic Marian</h2>
    <TypeWriter />
    <p class="fade-in">Full Stack Web Developer</p>
    <a href="#work" class="btn-main fade-in">My Work</a>
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
.btn-main {
  display: inline-block;
  border: 1px solid;
  padding: 10px 30px;
  letter-spacing: 2px;
  font-size: 1.25rem;
  transition: 0.5s;
}
.btn-main:hover {
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
  box-shadow: 0 0 50px var(--primary-color);
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0003);
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
  .btn-main {
    padding: 8px 25px;
    font-size: 1.1rem;
  }
}

@media (max-width: 500px) {
  h2 {
    font-size: 1.4rem;
  }
  .btn-main {
    padding: 7px 20px;
    font-size: 1rem;
  }
}
</style>
