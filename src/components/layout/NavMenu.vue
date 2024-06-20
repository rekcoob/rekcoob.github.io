<script setup></script>

<template>
  <nav id="navbar">
    <h1 class="logo">
      <a href="#home" class="hover-effect"> IM </a>
    </h1>
    <ul>
      <!-- z homu na home je na picu ui -->
      <li><a href="#home">Home</a></li>
      <!-- <li><a href="#home">GitHub</a></li> -->
      <li><a href="#skills">Skills</a></li>
      <li><a href="#work">My Work</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.4rem;
  margin: 0 1.9rem;
}

nav h1 {
  opacity: 0.7;
  font-weight: 400;
}

nav h1:hover {
  opacity: 1;
}

nav ul {
  display: flex;
}

nav ul li a {
  padding: 0.625rem 1.25rem;
  margin: 0 0.3rem;
  opacity: 0.7;
}

nav ul li a:hover {
  border-bottom: var(--primary-color) 2px solid;
  opacity: 1;
}

.hover-effect:hover::before {
  content: '[';
}

.hover-effect:hover::after {
  content: ']';
}
</style>
