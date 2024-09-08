<script setup>
// import { defineProps, defineEmits } from 'vue'

defineProps({
  isActive: Boolean,
  currentImageSrc: String,
  currentImageTitle: String,
  projectLink: String,
  githubLink: String,
  previewImage: String,
  technologies: Array
})

const emit = defineEmits(['close'])

const closeLightbox = (e) => {
  if (e.target === e.currentTarget) {
    emit('close')
  }
}
</script>

<template>
  <div v-if="isActive" id="lightbox" @click="closeLightbox">
    <div class="lightbox_content flex-col center">
      <img :src="currentImageSrc" :alt="currentImageTitle" />
      <div class="details_container flex">
        <div class="">
          <p>{{ currentImageTitle }}</p>
          <div class="flex">
            <!-- Project and GitHub Links -->
            <a :href="projectLink"> <i class="fas fa-link"></i> View Project </a>
            <a :href="githubLink"> <i class="fab fa-github"></i> View Code </a>
          </div>

          <!-- Technologies Used -->
          <div class="technologies">
            <span v-for="tech in technologies" :key="tech" class="tech-icon">
              <!-- <i :class="techIcons[tech]"></i> -->
            </span>
          </div>
        </div>

        <!-- <button class="close-btn" @click="$emit('close')">X</button> -->

        <button @click="$emit('close')">
          <svg
            width="30px"
            height="30px"
            viewBox="0 -0.5 21 21"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

            <g id="SVGRepo_iconCarrier">
              <title>close [#1511]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-419.000000, -240.000000)"
                  fill="#ffffff"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <polygon
                      id="close-[#1511]"
                      points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"
                    ></polygon>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#lightbox {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.7s;
  z-index: 1000;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* sem bol problem  bud cenenter*/
.lightbox_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* max-width: 90%; */
}

img {
  border: 5px solid white;
}

.details_container {
  width: 100%;
  max-width: 870px;
  align-items: center;
  justify-content: space-between;
}

p {
  margin: 10px 0;
  text-align: left;
}

a {
  background-color: var(--primary-color);
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
}

/* My Changes */
button {
  cursor: pointer;
  padding: 10px;
  background-color: transparent; /* No background color */
  border: none; /* Remove border */
  opacity: 0.7; /* Adjust the transparency level */
}

button:hover {
  opacity: 1; /* Fully opaque when hovered */
}
</style>
