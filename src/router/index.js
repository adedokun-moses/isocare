import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: HomeView
  },
  {
    path: '/',
    name: 'dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/dashboard.vue'),
    meta:{requiresAuth:true}
  },

  {
    path: '/addpatient',
    name: 'addpatient',
    component: () => import(/* webpackChunkName: "addpatient" */ '../views/addpatient.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/medprofile/:profile_code',
    name: 'medprofile',

    component: () => import(/* webpackChunkName: "medicalprofile" */ '../views/medicalprofile.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/patientrec',
    name: 'patientrec',
    component: () => import(/* webpackChunkName: "patientrec" */ '../views/patientrec.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/weekvent/:id',
    name: 'weekvent',
    component: () => import(/* weekvent: "weekvent" */ '../views/ventilatorflow.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/weeklyflow/:profile_code',
    name: 'weeklyflow',
    component: () => import(/* weekvent: "weeklyflow" */ '../views/weeklyflowchart.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/physiciansign',
    name: 'physiciansign',
    component: () => import(/* weekvent: "physiciansign" */ '../views/physiciansignup.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/patientsign',
    name: 'patientsign',
    component: () => import(/* weekvent: "patientsign" */ '../views/patientsign.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/physician',
    name: 'physician',
    component: () => import(/* weekvent: "patientsign" */ '../views/physician.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/record:id',
    name: 'record',
    component: () => import(/* weekvent: "record" */ '../views/record.vue'),
    meta:{requiresAuth:true}
  },

  {
    path: '/classification',
    name: 'classification',
    component: () => import(/* weekvent: "patientsign" */ '../views/classification.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/physicianorder',
    name: 'physicianorder',
    component: () => import(/* weekvent: "patientsign" */ '../views/physicianorder.vue'),
    meta:{requiresAuth:true}
  },

  {
    path: '/addphy',
    name: 'addphy',
    component: () => import(/* weekvent: "patientsign" */ '../views/addphy.vue'),
    meta:{requiresAuth:true}
  },

  {
    path: '/nurse',
    name: 'nurse',
    component: () => import(/* weekvent: "patientsign" */ '../views/nurse.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/addnurse',
    name: 'addnurse',
    component: () => import(/* weekvent: "patientsign" */ '../views/addnurse.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/phyorder/:profile_code',
    name: 'phyorder',
    component: () => import(/* weekvent: "patientsign" */ '../views/phyorder.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/mar/:profile_code',
    name: 'mar',
    component: () => import(/* weekvent: "patientsign" */ '../views/mar.vue'),
    meta:{requiresAuth:true}
  },

  {
    path: '/marorder/:profile_code',
    name: 'marorder',
    component: () => import(/* weekvent: "patientsign" */ '../views/marorder.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/treatorder/:profile_code',
    name: 'treatorder',
    component: () => import(/* weekvent: "patientsign" */ '../views/treatorder.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/vent',
    name: 'vent',
    component: () => import(/* weekvent: "physiciansign" */ '../views/vent.vue'),
    meta:{requiresAuth:true}
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to)=>{
  if(to.meta.requiresAuth && !sessionStorage.getItem("token")){
      sessionStorage.clear()
      return{
          name:"login",
          query:{redirect:to.fullPath},
      }
  }
})

export default router
