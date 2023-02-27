import axios from 'axios';
import router from '@/router';
import Swal from 'sweetalert2';
const physician = {
    state: {
        baseUrl: process.env.VUE_APP_MOREPLEX_API ? process.env.VUE_APP_MOREPLEX_API : "",
        token: JSON.parse(sessionStorage.getItem("token")),
        profile_code: JSON.parse(sessionStorage.getItem("profile_code")),
        all_nurses: [],
        nurse: ""

    },

    mutations: {
        ADD_NEW_NURSE(state, params) {
            axios
                .post(state.baseUrl + "/api/nurse_auth/register", params, {
                    headers: { Authorization: `Bearer ${state.token}` },
                }).then((res) => {
                    if (res.status == 'success') {
                     //   alert(res.data.message)
                        Swal.fire({
                              title: "Good job!",
                              text: res.data.message,
                              icon: "success",
  
                          }); 
                        //  location.reload();
                        //  this.$router.go('/channels')
                    } else {
                       // alert(res.data.message)
                        // location.reload()
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

        ALL_NURSES(state) {
            axios.get(state.baseUrl + "/api/nurse_auth/nurse", {
                headers: { Authorization: `Bearer ${state.token}` },
            }).then((res) => {
                state.all_nurses = res.data.all_nurse
                console.log(state.all_nurses)
            }).catch((err) => {
                console.log(err)
            })
        },

        EDIT_NURSE(state, data) {
            let params = {
                firstname: data.firstname,
                lastname: data.lastname,
                middlename: data.middlename,
                email: data.email,
                phone_no: data.phone_no,
                address: data.address
            };
            axios
                .patch(state.baseUrl + "/api/nurse_auth/nurse/update/" + data.nur_id, params, {
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
        NUR_DET(state) {
            const profile_code = JSON.parse(sessionStorage.getItem("profile_code"));
            axios.get(state.baseUrl + "/api/nurse_auth/nurse/show/" + profile_code, {
                headers: { Authorization: `Bearer ${state.token}` },
            }).then((res) => {
                state.nurse = res.data.patient_details;
               // console.log(res.data.patient_details)
            }).catch((err) => {
                console.log(err)
            })
        },


    },
    actions: {
        async add_new_nurse({ commit }, params) {
            await commit('ADD_NEW_NURSE', params)
        },
        async all_nurses({ commit }) {
            await commit('ALL_NURSES')
        },

        async edit_nurse({ commit }, params) {
            await commit('EDIT_NURSE', params)
        },
        async nur_det({ commit }, profile_code) {
            await commit('NUR_DET', profile_code)
        }





    }
}

export default physician
