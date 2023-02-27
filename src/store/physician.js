import axios from 'axios';
import router from '@/router';
import Swal from 'sweetalert2'
const physician = {
    state: {
        baseUrl: process.env.VUE_APP_MOREPLEX_API ? process.env.VUE_APP_MOREPLEX_API : "",
        token: JSON.parse(sessionStorage.getItem("token")),
        profile_code: JSON.parse(sessionStorage.getItem("profile_code")),
        all_physician: []

    },

    mutations: {
        ADD_NEW_PHYSICIAN(state, params) {
            axios
                .post(state.baseUrl + "/api/physician_auth/register", params, {
                    headers: { Authorization: `Bearer ${state.token}` },
                }).then((res) => {
                     if (res.status == 'success') {
                      //  alert("success"+res.data.message)
                       Swal.fire({
                            title: "Good job!",
                            text: res.data.message,
                            icon: "success",

                        }); 
                      //  location.reload();
                        //  this.$router.go('/channels')
                    } else {
                        alert("error"+res.data.message)
                      //  location.reload()
                       Swal.fire({
                            title: "Good job!",
                            text: res.data.message,
                            icon: "error",
                        })
                    }  
                   // console.log(res.data)
                }).catch((err) => {
                    console.log(err)
                })

        },

        ALL_PHYSICIAN(state){
            axios.get(state.baseUrl + "/api/physician_auth/physician", {
            headers: { Authorization: `Bearer ${state.token}` },
            }).then((res) =>{
                    state.all_physician = res.data.all_physician
                console.log( state.all_physician)
            }).catch((err) => {
                console.log(err)
            })
        },

        EDIT_PHY(state, data) {
            let params = {
                firstname: data.firstname,
                lastname: data.lastname,
                middlename: data.middlename,
                email: data.email,
                phone_no: data.phone_no,
                address: data.address
            };
            axios
                .patch(state.baseUrl + "/api/physician_auth/physician/update/" + data.phy_id, params, {
                    headers: { Authorization: `Bearer ${state.token}` },
                }).then((res) => {
                    if (res.data.status == 'success') {
                        Swal.fire({
                            title: "Good job!",
                            text: res.data.message,
                            icon: "success",

                        });
                        window.location.reload();
                        // this.$router.go('/')
                    } else {
                        Swal.fire({
                            title: "Good job!",
                            text: res.data.message,
                            icon: "error",
                        });
                    }
                    console.log(res.data)
                }).catch((err) => {
                    console.log(err)
                })

        },




        

    },
    actions: {
        async add_new_physician({ commit }, params) {
            await commit('ADD_NEW_PHYSICIAN', params)
        },
        async all_physician({ commit }) {
            await commit('ALL_PHYSICIAN')
        },

        async edit_physician({ commit }, params) {
            await commit('EDIT_PHY', params)
        },

      


    }
}

export default physician
