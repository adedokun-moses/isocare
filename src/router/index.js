import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dash',
    name: 'dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/dashboard.vue')
  },

  {
    path: '/addpatient',
    name: 'addpatient',
    component: () => import(/* webpackChunkName: "addpatient" */ '../views/addpatient.vue')
  },
  {
    path: '/medprofile',
    name: 'medprofile',

    component: () => import(/* webpackChunkName: "medicalprofile" */ '../views/medicalprofile.vue')
  },
  {
    path: '/patientrec',
    name: 'patientrec',
    component: () => import(/* webpackChunkName: "patientrec" */ '../views/patientrec.vue')
  },
  {
    path: '/weekvent',
    name: 'weekvent',
    component: () => import(/* weekvent: "weekvent" */ '../views/ventilatorflow.vue')
  },
  {
    path: '/weeklyflow',
    name: 'weeklyflow',
    component: () => import(/* weekvent: "weeklyflow" */ '../views/weeklyflowchart.vue')
  },
  {
    path: '/physiciansign',
    name: 'physiciansign',
    component: () => import(/* weekvent: "physiciansign" */ '../views/physiciansignup.vue')
  },
  {
    path: '/patientsign',
    name: 'patientsign',
    component: () => import(/* weekvent: "patientsign" */ '../views/patientsign.vue')
  },
  {
    path: '/record:id',
    name: 'record',
    component: () => import(/* weekvent: "record" */ '../views/record.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
