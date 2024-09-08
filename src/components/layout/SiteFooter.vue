<template>
  <footer>
    <!-- <div class="social">
      <a href="#"><i class="fab fa-linkedin fa-3x"></i></a>
      <a href="https://github.com/rekcoob"><i class="fab fa-github fa-3x"></i></a>
      <a href="mailto:marian.ivanovic@hotmail.com"><i class="fas fa-envelope fa-3x"></i></a>
    </div> -->
    <div class="social">
      <!-- <a class="link" href="https://github.com/rekcoob"><i class="fab fa-github fa-3x"></i></a> -->
      <a href="https://github.com/rekcoob">
        <svg class="icon" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <title>linkedin</title>
          <path
            d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"
          ></path>
        </svg>
      </a>

      <a href="https://github.com/rekcoob">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.599.111.793-.261.793-.58 0-.287-.011-1.045-.017-2.052-3.338.725-4.042-1.612-4.042-1.612-.545-1.383-1.332-1.75-1.332-1.75-1.09-.744.083-.729.083-.729 1.203.085 1.835 1.235 1.835 1.235 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.666-.303-5.466-1.334-5.466-5.934 0-1.311.469-2.382 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.305 1.23a11.513 11.513 0 013.01-.404c1.02.004 2.045.138 3.009.404 2.297-1.553 3.303-1.23 3.303-1.23.653 1.653.243 2.873.119 3.176.77.839 1.234 1.911 1.234 3.221 0 4.61-2.803 5.628-5.476 5.924.43.372.815 1.103.815 2.222 0 1.604-.014 2.896-.014 3.289 0 .32.191.695.799.578C20.566 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z"
          />
        </svg>
      </a>
      <a href="mailto:marian.ivanovic@hotmail.com">
        <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path
            d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </a>
    </div>
    <p>Copyright &copy; 2024 by b0ock3R</p>
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

/** Icons */

link {
  margin: 0 1rem;
  width: 3rem;
  height: 3rem;
}

link :hover {
  color: var(--primary-color);
  transform: scale(1.2);
  transition: 0.5s ease-out;
}
/* footer a {
  margin: 0 1rem;
  width: 3rem;
  height: 3rem;
}

footer a :hover {
  color: var(--primary-color);
  transform: scale(1.2);
  transition: 0.5s ease-out;
} */

.icon {
  margin: 0 1rem;
  width: 3rem;
  height: 3rem;
  fill: white; /* Initial color white */
  transition:
    transform 0.5s ease-out,
    fill 0.5s ease-out;
}

footer a:hover .icon {
  fill: var(--primary-color); /* Change color to green on hover */
  transform: scale(1.2);
  transition: 0.5s ease-out;
}
</style>
