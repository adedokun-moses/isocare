import axios from 'axios';
import router from '@/router';
import Swal from 'sweetalert2';
const signin = {
    state: {
        baseUrl: process.env.VUE_APP_MOREPLEX_API ? process.env.VUE_APP_MOREPLEX_API : "",
        token: JSON.parse(sessionStorage.getItem("token")),
        profile_code: JSON.parse(sessionStorage.getItem("profile_code")),
        email: "",
        password: ""
    },

    mutations: {
        LOG_IN(state, params) {
            axios
                .post(state.baseUrl + "/api/user_auth/login", params)
                .then((res) => {
                    let result = res.data;
                    if (result.status == "denied" || result.status == "failed") {
                        Swal.fire({
                            title: "OOPS!",
                            text: res.data.message,
                            icon: "error",

                        });
                    } else {
                        // alert("working")
                        //console(res.data)
                        sessionStorage.setItem("token", JSON.stringify(res.data.token));/* 
                        sessionStorage.setItem("user_id", JSON.stringify(res.data.user.id)); */
                        sessionStorage.setItem("profile_code", JSON.stringify(res.data.user.profile_code));
                        router.push("/");
                        Swal.fire({
                            title: "Good job!",
                            text: res.data.message,
                            icon: "success",

                        });
                        setTimeout(function () {
                            window.location.reload(true);
                        }, 1000);
                        //  window.location.reload()
                        console.log(res.data);
                        //  swal("Sign In Successful", "Welcome", "success");
                    }
                })
                .catch((error) => {
                    if (error.res) {
                        console.log(error.res.data);
                    }
                });
        },


        LOG_OUT(state) {
            Swal.fire({
                title: "Logged Out Successful!",
                //   text: res.data.message,
                icon: "success",
            });
            sessionStorage.clear();

        },

        FORGET_PASSWORD(state, params) {
            axios.post(state.baseUrl + "/api/user_auth/forgot_password", params).then((res) => {
                console.log(res)
                let result = res.data;

                if (result.status == "denied" || result.status == "failed") {
                    swal({
                        title: "OOPS!",
                        text: "Kindly Input Your Registered Email",
                        icon: "error",

                    });
                } else {
                    swal({
                        title: "Weldone!",
                        text: res.data.status,
                        icon: "success",
                    });
                   router.push("/")
                }

            }).catch((err) => {
                console.log(err)
            })
        },

        RESET_PASSWORD(state, params) {
            axios
                .post(state.baseUrl + "/api/user_auth/reset_password", params,{
                    headers: { Authorization: `Bearer ${state.token}` },
                }).then((res) => {
                    let result = res.data;
                    console.log(result)
                    /*                     
                                        if (result.status == "denied" || result.status == "failed") {
                                            swal({
                                                title: "OOPS!",
                                                text: res.data.message,
                                                icon: "error",
                    
                                            });
                                        } else {
                                            // alert("working")
                                            //console(res.data)
                                            sessionStorage.setItem("token", JSON.stringify(res.data.token));
                                            sessionStorage.setItem("user_id", JSON.stringify(res.data.user.id));
                                            sessionStorage.setItem("profile_code", JSON.stringify(res.data.user.profile_code));
                                            router.push("/");
                                            swal({
                                                title: "Good job!",
                                                text: res.data.message,
                                                icon: "success",
                    
                                            });
                                            setTimeout(function () {
                                                window.location.reload(true);
                                            }, 1000);
                                            //  window.location.reload()
                                            console.log(res.data);
                                            //  swal("Sign In Successful", "Welcome", "success");
                                        } */
                })
                .catch((error) => {
                    if (error.res) {
                        console.log(error.res.data);
                    }
                });
        },

        CHANGE_PASSWORD(state, params) {
            axios.put(state.baseUrl + "/api/user_auth/change_password", params).then((res) => {
                console.log(res)
                let result = res.data;

                if (result.status == "denied" || result.status == "failed") {
                    swal({
                        title: "OOPS!",
                        text: "Kindly Input Your Registered Email",
                        icon: "error",

                    });
                } else {
                    swal({
                        title: "Weldone!",
                        text: res.data.status,
                        icon: "success",
                    });
                   router.push("/")
                }

            }).catch((err) => {
                console.log(err)
            })
        },


        


    },
    actions: {
        async login({ commit }, payload) {
            await commit('LOG_IN', payload)
        },

        async logout({ commit }) {
            await commit('LOG_OUT')
        },

        async reset_password({ commit }, params) {
            await commit('FORGET_PASSWORD', params)
        },
        async reset_new_password({ commit }, params) {
            await commit('RESET_PASSWORD', params)
        },
        async change_password({ commit }, params) {
            await commit('CHANGE_PASSWORD', params)
        },


    }
}

export default signin
