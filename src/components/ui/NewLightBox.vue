// LightBox.vue
<template>
  <div class="lightbox-container">
    <!-- Thumbnail Grid -->
    <div class="thumbnail-grid">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.thumbnail"
        :alt="image.alt"
        @click="openLightbox(index)"
        class="thumbnail"
      />
    </div>

    <!-- Lightbox Modal -->
    <div v-if="isOpen" class="lightbox-modal">
      <div class="lightbox-content">
        <button class="close-btn" @click="closeLightbox">&times;</button>
        <button class="nav-btn prev" @click="prevImage" v-if="currentIndex > 0">&#8249;</button>
        <button class="nav-btn next" @click="nextImage" v-if="currentIndex < images.length - 1">
          &#8250;
        </button>
        <img :src="currentImage.full" :alt="currentImage.alt" class="lightbox-image" />
        <div class="image-caption" v-if="currentImage.caption">
          {{ currentImage.caption }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewLightBox',
  props: {
    images: {
      type: Array,
      required: true,
      // Each image object should have: { thumbnail, full, alt, caption }
    },
  },
  data() {
    return {
      isOpen: false,
      currentIndex: 0,
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex]
    },
  },
  methods: {
    openLightbox(index) {
      this.currentIndex = index
      this.isOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.isOpen = false
      document.body.style.overflow = 'auto'
    },
    prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },
    nextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++
      }
    },
    handleKeydown(e) {
      if (!this.isOpen) return

      switch (e.key) {
        case 'Escape':
          this.closeLightbox()
          break
        case 'ArrowLeft':
          this.prevImage()
          break
        case 'ArrowRight':
          this.nextImage()
          break
      }
    },
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
  },
}
</script>

<style scoped>
.lightbox-container {
  width: 100%;
}

.thumbnail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.thumbnail {
  width: 100%;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.2s;
}

.thumbnail:hover {
  transform: scale(1.05);
}

.lightbox-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90vh;
}

.lightbox-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}

.close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 1rem 0.5rem;
  cursor: pointer;
  transition: background 0.3s;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.prev {
  left: -60px;
}

.next {
  right: -60px;
}

.image-caption {
  color: white;
  text-align: center;
  padding: 1rem 0;
}
</style>
