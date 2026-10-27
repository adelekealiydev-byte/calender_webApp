import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

import './style.css'

import App from './App.vue'
import router from './router'

// Vuetify
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// Components
// import App from './App.vue'

// const vuetify = createVuetify({
//   components,
//   directives,
// })


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// createApp(App).use(vuetify).mount('#app')
