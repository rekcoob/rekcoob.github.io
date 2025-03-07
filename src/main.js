import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
// import VueGtag from 'vue-gtag'
import VueGtag from 'vue-gtag-next'

createApp(App)
  .use(VueGtag, {
    property: { id: import.meta.env.VITE_GOOGLE_ANALYTICS_ID },
  })
  .mount('#app')

// createApp(App).mount('#app')
