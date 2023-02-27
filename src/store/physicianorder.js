import axios from 'axios';
import router from '@/router';
import Swal from 'sweetalert2';
const physicianorder = {
    state: {
        baseUrl: process.env.VUE_APP_MOREPLEX_API ? process.env.VUE_APP_MOREPLEX_API : "",
        token: JSON.parse(sessionStorage.getItem("token")),
        profile_code: JSON.parse(sessionStorage.getItem("profile_code")),
        phy_orders: [],
        classes: "",
      

    },

    mutations: {
        ADD_NEW_ORDER(state, params) {
            axios
                .post(state.baseUrl + "/api/user_auth/physician_order/store", params, {
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

        ALL_PHY_ORDER(state) {
            axios
                .get(state.baseUrl + "/api/user_auth/physician_order", {
                    headers: { Authorization: `Bearer ${state.token}` },
                }).then((res) => {
                    state.phy_orders = res.data.physician_order
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })

        },

        UPDATE_CLASS(state, data) {
            let params = {
                classification_id: data.classification_id,
                order_name: data.order_name,
                dose: data.dose,
                frequency: data.frequency,
                route: data.route
            };
            axios
                .patch(state.baseUrl + "/api/user_auth/physician_order/update/" + data.orders_id, params, {
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


        PHY_ORDER_BY_CLASSES(state, classification_id) {
            axios
                .get(state.baseUrl + "/api/user_auth/byclassess/" + classification_id, {
                    headers: { Authorization: `Bearer ${state.token}` },
                }).then((res) => {
                    state.classes = res.data.physician_order
                    console.log(state.classes)
                    
                }).catch((err) => {
                    console.log(err)
                })

        },


    },


    actions: {
        async add_new_order({ commit }, params) {
            await commit('ADD_NEW_ORDER', params)
        },

        async all_phy_orders({ commit },) {
            await commit('ALL_PHY_ORDER')
        },

        async edit_phy({ commit }, params) {
            await commit('UPDATE_CLASS', params)
        },

        async orders_classes({ commit }, classification_id) {
            await commit('PHY_ORDER_BY_CLASSES', classification_id)
        },



    }
}

export default physicianorder
