<script setup>
import NavMenu from './components/layout/NavMenu.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ShowCase from './components/sections/ShowCase.vue'
import MyWork from './components/sections/MyWork.vue'
import ContactForm from './components/sections/ContactForm.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
</script>

<template>
  <div>
    <main>
      <header>
        <NavMenu />
        <HeroSection />
      </header>
      <div class="container">
        <ShowCase />
        <MyWork />
      </div>
      <ContactForm />
    </main>
    <SiteFooter />
  </div>
</template>

<style>
/* Background Image */
header {
  background: url('@/assets/img/hero.jpg') no-repeat center center/cover;
  height: 100vh;
  width: 100%;
}
/* Smooth Scroll */
html {
  scroll-behavior: smooth;
}
.container {
  max-width: 1440px; /* Maximum width of the container */
  margin: 0 auto;
}
</style>
