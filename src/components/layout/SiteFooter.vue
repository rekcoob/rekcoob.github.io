<template>
  <footer id="footer">
    <div class="social">
      <a href="https://github.com/rekcoob"><i class="fab fa-github fa-3x"></i></a>
      <!-- <a href="#"><i class="fab fa-linkedin fa-3x"></i></a> -->
      <a href="mailto:marian.ivanovic@hotmail.com"><i class="fas fa-envelope fa-3x"></i></a>
    </div>
    <p>Copyright &copy; 2025 by b0ock3R</p>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 12.5rem;
  background: #000;
}

footer p {
  margin-top: 2rem;
}

footer a {
  margin: 0 1rem;
  width: 3rem;
  height: 3rem;
}

footer a :hover {
  color: var(--primary-color);
  transform: scale(1.2);
  transition: 0.5s ease-out;
}
</style>
