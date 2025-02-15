import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from 'vue-gtag'

// createApp(App).mount('#app')

createApp(App)
  .use(VueGtag, {
    config: { id: import.meta.env.VITE_GOOGLE_ANALYTICS_ID },
  })
  .mount('#app')
