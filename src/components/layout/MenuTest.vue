<script setup></script>

<template>
  <nav id="navbar">
    <h1 class="logo">
      <!-- <a href="#home"> [IM] </a> -->
      <a href="#home"><span>[</span>IM<span>]</span></a>
    </h1>
    <ul>
      <li><a href="#home">GitHub</a></li>
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
  margin: 0 auto;
  max-width: 1440px;
}

nav h1 {
  opacity: 0.7;
  font-weight: 400;
}

nav h1 span {
  color: white;
}

/* When hovering over the entire h1, change the opacity and color */
nav h1:hover {
  opacity: 1;
}

nav h1:hover span {
  color: var(--primary-color);
}
</style>
