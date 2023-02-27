import axios from 'axios';
import router from '@/router';
import Swal from 'sweetalert2';
const classification = {
    state: {
        baseUrl: process.env.VUE_APP_MOREPLEX_API ? process.env.VUE_APP_MOREPLEX_API : "",
        token: JSON.parse(sessionStorage.getItem("token")),
        profile_code: JSON.parse(sessionStorage.getItem("profile_code")),
        orders: []

    },

    mutations: {
        ADD_NEW_CLASS(state, params) {
            axios
                .post(state.baseUrl + "/api/user_auth/orders_classification/store", params, {
                    headers: { Authorization: `Bearer ${state.token}` },
                }).then((res) => {
                    if (res.data.status == 'success') {
                        Swal.fire({
                            title: "Good job!",
                            text: res.data.message,
                            icon: "success",

                        });
                        location.reload();
                        //  this.$router.go('/channels')
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

        ALL_CLASS(state) {
            axios
                .get(state.baseUrl + "/api/user_auth/orders_classification", {
                    headers: { Authorization: `Bearer ${state.token}` },
                }).then((res) => {
                    state.orders = res.data.orders_classifications
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })

        },

        EDIT_CLASS(state, data) {
            let params = {
                classification_name: data.classification_name
            };
            axios
                .patch(state.baseUrl + "/api/user_auth/orders_classification/update/" + data.orders_id, params, {
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
        async add_new_class({ commit }, params) {
            await commit('ADD_NEW_CLASS', params)
        },

        async all_orders({ commit },) {
            await commit('ALL_CLASS')
        },

        async edit_class({ commit }, params) {
            await commit('EDIT_CLASS', params)
        },




    }
}

export default classification
