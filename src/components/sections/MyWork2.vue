<template>
  <section id="work" class="my_work">
    <h1>
      My
      <span class="primary">Work</span>
    </h1>
    <h3>Check out some of my projects...</h3>
    <div class="grid">
      <div>
        <a
          href="../../assets/img/projects/movie-app.jpg"
          data-lightbox="cases"
          data-title="Movie app built with React, Redux & TypeScript.
              With add to favorites and infinite scroll features"
        >
          <img src="../../assets/img/projects/movie-app.jpg" alt="" />
        </a>
        <a href="https://rekcoob-movies.netlify.app/" class="btn-light">
          <i class="fas fa-at"></i> Movie App | Netlify Link
        </a>
        <a href="https://github.com/rekcoob/movie-app" class="btn-dark">
          <i class="fab fa-github"></i> View Code
        </a>
      </div>
      <div>
        <a
          href="../../assets/img/projects/mern-shop.jpg"
          data-lightbox="cases"
          data-title="Full featured eCommerce with shopping cart, product ratings, , PayPal integration, admin management and checkout process"
        >
          <img src="../../assets/img/projects/mern-shop.jpg" alt="" />
        </a>
        <a href="https://mern-eshop-app.herokuapp.com/" class="btn-light">
          <i class="fas fa-at"></i> MernShop | Heroku Link
        </a>
        <a href="https://github.com/rekcoob/mern-shop" class="btn-dark">
          <i class="fab fa-github"></i> View Code
        </a>
      </div>
      <div>
        <a
          href="../../assets/img/projects/breaking-bad.jpg"
          data-lightbox="cases"
          data-title="React app using breaking bad api to show and filter characters from the show. Built with React, Typescript & Sass"
        >
          <img src="../../assets/img/projects/breaking-bad.jpg" alt="" />
        </a>
        <a href="https://bb-cast.netlify.app/" class="btn-light">
          <i class="fas fa-at"></i> Breaking Bad Actors | Netlify Link
        </a>
        <a href="https://github.com/rekcoob/breaking-bad" class="btn-dark">
          <i class="fab fa-github"></i> View Code
        </a>
      </div>
      <div>
        <a
          href="../../assets/img/projects/github-searcher.jpg"
          data-lightbox="cases"
          data-title="App using github_api to search Github profiles. Using React, Typescript, Context Api & Hooks"
        >
          <img src="../../assets/img/projects/github-searcher.jpg" alt="" />
        </a>
        <a href="https://rekcoob-github.netlify.app/" class="btn-light">
          <i class="fas fa-at"></i> Github Searcher | Netlify Link
        </a>
        <a href="https://github.com/rekcoob/github-searcher" class="btn-dark">
          <i class="fab fa-github"></i> View Code
        </a>
      </div>
      <div>
        <a
          href="../../assets/img/projects/payment-tracker.jpg"
          data-lightbox="cases"
          data-title="Full stack app to track payments and expenses. Using React, TypeScript, Node, Express & MongoDB"
        >
          <img src="../../assets/img/projects/payment-tracker.jpg" alt="" />
        </a>
        <a href="https://payment-tracker.herokuapp.com/" class="btn-light">
          <i class="fas fa-at"></i> Payment Tracker | Heroku Link
        </a>
        <a href="https://github.com/rekcoob/payment-tracker" class="btn-dark">
          <i class="fab fa-github"></i> View Code
        </a>
      </div>
      <div>
        <a
          href="../../assets/img/projects/contact-book.jpg"
          data-lightbox="cases"
          data-title="Full stack app to store private Contacts. Using React, Typescript, Node, Express, MongoDB & JWT authentication"
        >
          <img src="../../assets/img/projects/contact-book.jpg" alt="" />
        </a>
        <a href="https://contact-diary.herokuapp.com/" class="btn-light">
          <i class="fas fa-at"></i> Contact Book | Heroku Link
        </a>
        <a href="https://github.com/rekcoob/contact-book" class="btn-dark">
          <i class="fab fa-github"></i> View Code
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.my_work {
  margin: 3rem 5rem;
  margin-bottom: 5rem;
}

h1 {
  font-size: 4rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

h3 {
  margin-bottom: 3rem;
}

/* .grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
} */

img {
  width: 100%;
  border: 2px #fff solid;
}

img:hover {
  opacity: 0.5;
  border-color: var(--primary-color);
  -webkit-transition: ease-out 0.5s;
  transition: ease-out 0.5s;
}

.btn-dark,
.btn-light {
  display: block;
  padding: 0.5rem 1rem;
  margin-bottom: 0.3rem;
}

.btn-dark:hover,
.btn-light:hover {
  background: var(--primary-color);
}

.btn-dark {
  background: black;
}

.btn-light {
  background: #c4c4c4;
  color: #333;
}

.btn-light:hover {
  color: #fff;
}

@media (min-width: 769px) and (max-width: 1199px) {
  .my_work {
    margin: 3rem 4rem;
  }
  .my_work .projects {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1200px) {
  .my_work .projects {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
