<script setup>
import { ref, provide } from 'vue'
import NavMenu from './components/layout/NavMenu.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ShowCase from './components/sections/ShowCase.vue'
import ShowCase2 from './components/sections/ShowCase-og.vue'
import ToogleBtn from './components/ui/ToggleBtn.vue'
import MyWork from './components/sections/MyWork.vue'
import ContactForm from './components/sections/ContactForm.vue'
import SiteFooter from './components/layout/SiteFooter.vue'

const isLighted = ref(false)
// provide('isChecked', isChecked)
provide('isLighted', isLighted)
</script>

<template>
  <div>
    <main>
      <header>
        <NavMenu />
        <HeroSection />
      </header>

      <!-- <ShowCase /> -->
      <ShowCase2 />

      <MyWork />

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
}
/* Smooth Scroll */
html {
  scroll-behavior: smooth;
}
</style>
