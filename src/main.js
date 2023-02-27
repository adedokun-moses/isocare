import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import printJS from 'print-js'
import 'bootstrap/dist/css/bootstrap.css'
import setAuthHeader from './store/setAuthHeader'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';





if (sessionStorage.getItem("token") & sessionStorage.getItem("token") != "" & sessionStorage.getItem("token") != "undefine") {
    let token = sessionStorage.getItem("token")
    setAuthHeader(token)
}


createApp(App).use(store).use(router).use(VueSweetalert2).mount('#app')
