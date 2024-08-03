import { createRouter, createWebHashHistory } from 'vue-router'
import Principal from '../pages/PrincipalPage.vue'
import Guardar from '../pages/GuardarPage.vue'
import Consultar from '../pages/ConsultarPage.vue'

const routes = [
  {
    path: '/',
    name: 'principal',
    component: Principal
  },

  {
    path: '/guardar',
    name: 'guardar',
    component: Guardar
  },

  {
    path: '/consultar',
    name: 'consultar',
    component: Consultar
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
