import { createRouter, createWebHistory } from 'vue-router'
import GirisSayfasi from '../views/GirisSayfasi.vue'
import KullaniciBilgileri from '../views/KullaniciBilgileri.vue'
import ToDoList from '../views/ToDoList.vue'
import kayit from '../views/Kayit.vue'

const routes = [
  {
    path: '/',
    name: 'Giris',
    component: GirisSayfasi
  },
  
  {
    path: '/bilgiler',
    name: 'KullaniciBilgileri',
    component: KullaniciBilgileri
  },
  {
    path:'/todo',
    name:'ToDoList',
    component: ToDoList
  },
  {
    path:'/kayit',
    name: 'Kayit',
    component: kayit
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
