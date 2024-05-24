
import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AbautView from '../views/AbautView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AbautView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;