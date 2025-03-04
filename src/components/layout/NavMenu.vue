<script setup></script>

<template>
  <nav id="navbar">
    <h1 class="logo">
      <a href="#home"><span>[</span> IM <span>]</span></a>
    </h1>
    <ul>
      <li><a href="#skills" class="nav-link">Skills</a></li>
      <li><a href="#work" class="nav-link">My Work</a></li>
      <li>
        <a
          href="https://github.com/rekcoob"
          class="nav-link"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub</a
        >
      </li>

      <li><a href="#contact" class="nav-link">Contact</a></li>
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

.logo {
  opacity: 0.7;
  font-weight: 400;
}

.logo span {
  color: var(--primary-color);
  opacity: 0;
}

.logo:hover {
  opacity: 1;
}

.logo:hover span {
  opacity: 1;
}

ul {
  display: flex;
}

.nav-link {
  padding: 0.625rem 1.25rem;
  margin: 0 0.3rem;
  opacity: 0.7;
}

.nav-link:hover {
  border-bottom: var(--primary-color) 2px solid;
  opacity: 1;
}
/* Responsiveness */
@media (min-width: 501px) and (max-width: 768px) {
  nav {
    flex-direction: column;
  }
  nav ul {
    margin-top: 1rem;
  }
}

@media (max-width: 500px) {
  nav {
    flex-direction: column;
  }
  nav ul {
    text-align: center;
    flex-direction: column;
  }
  nav ul li {
    margin: 0.5rem 0;
  }
}
</style>
