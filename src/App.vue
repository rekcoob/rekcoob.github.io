<script setup>
import { ref, provide } from 'vue'
import Navbar from './components/Navbar.vue'
import ShowCase from './components/ShowCase.vue'
import ToggleBtn from './components/ToggleBtn.vue'
import ToggleBtq from './components/ToggleBtq.vue'
import MyWork from './components/MyWork.vue'
import ContactForm from './components/ContactForm.vue'
import SiteFooter from './components/SiteFooter.vue'

const isLighted = ref(false)
// provide('isChecked', isChecked)
provide('isLighted', isLighted)
</script>

<template>
  <div>
    <main>
      <Navbar />
      <!-- <Hero /> -->

      <ToggleBtq />
      <!-- <ToggleBtn /> -->
      <ShowCase />
      <MyWork />
      <ContactForm />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped></style>
