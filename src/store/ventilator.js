import axios from 'axios';
import router from "@/router";
import Swal from 'sweetalert2';

const ventilator = {
    state: {
        baseUrl: process.env.VUE_APP_MOREPLEX_API ? process.env.VUE_APP_MOREPLEX_API : "",
        token: JSON.parse(sessionStorage.getItem("token")),
        // profile_code: JSON.parse(sessionStorage.getItem("profile_code")),
         all_vent: [],
        single_vent: "",
        /*   med_prof: "",
          week_treatment: "",
          pat_mar: "" */


    },

    mutations: {
        ADD_VENT(state, params) {
            axios
                .post(state.baseUrl + "/api/user_auth/ventilator/store", params, {
                    headers: { Authorization: `Bearer ${state.token}` },
                }).then((res) => {
                    if (res.data.status == 'success') {
                        Swal.fire({
                            title: "Success!",
                            text: res.data.message,
                            icon: "succcess",
                        });
                        console.log(res.data)
                        router.push('/vent')
                    } else {
                        //alert(res.data.message)
                        Swal.fire({
                            title: "Error!",
                            text: res.data.message,
                            icon: "error",
                        });
                    }
                    console.log(res.data)
                }).catch((err) => {
                    console.log(err)
                })

        },

             ALL_VENT(state) {
                  axios.get(state.baseUrl + "/api/user_auth/ventilators", {
                      headers: { Authorization: `Bearer ${state.token}` },
                  }).then((res) => {
                      state.all_vent = res.data.ventilatorsheet
                      console.log(res.data)
                  }).catch((err) => {
                      console.log(err)
                  })
              },
    
        /*    ADD_PAT_ORDER(state, params) {
               axios
                   .post(state.baseUrl + "/api/nurse_auth/order/add_order_rec", params, {
                       headers: { Authorization: `Bearer ${state.token}` },
                   }).then((res) => {
                       if (res.data.status == 'success') {
                           Swal.fire({
                               title: "Success!",
                               text: res.data.message,
                               icon: "succcess",
                           });
                           console.log(res.data)
                           router.push('/patientrec')
                       } else {
                           //alert(res.data.message)
                           Swal.fire({
                               title: "Error!",
                               text: res.data.message,
                               icon: "error",
                           });
                           //  router.push('/patientrec')
                       }
                       console.log(res.data)
                   }).catch((err) => {
                       console.log(err)
                   })
   
           },
    */

        /*       UPDATE_PAT_ORDER(state, data) {
                  let params = {
                      order_type: data.order_type,
                      nurse_id: data.nurse_id,
                      physician_id: data.physician_id,
                      visitation_date: data.visitation_date,
                      visitation_time: data.visitation_time,
                      reported_time: data.reported_time,
                      reported_date: data.reported_date,
                      status_ncu: data.status_ncu,
                      date_ordered: data.date_ordered,
                      pharmacy_name: data.pharmacy_name,
                      medical_record_no: data.medical_record_no,
                      physician_order_id: data.physician_order_id,
                      classification_id: data.classification_id,
                      date_discontinue: data.date_discontinue,
                      patient_id: data.patient_id,
                  };
                  axios
                      .patch(state.baseUrl + "/api/nurse_auth/order/update_order_rec/" + data.order_id, params, {
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
       */


        SINGLE_USER(state, id) {
            axios.get(state.baseUrl + "/api/user_auth/ventilator/show/" + id, {
                headers: { Authorization: `Bearer ${state.token}` },
            }).then((res) => {
                state.single_vent = res.data
                console.log(state.single_vent)
            }).catch((err) => {
                console.log(err)
            })
        },

        EDIT_VENT(state, data) {
            let params = {
                ventilator_name: data.ventilator_name
            };
            axios
                .patch(state.baseUrl + "/api/user_auth/ventilator/update/" + data.orders_id, params, {
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

        async add_vent({ commit }, params) {
            await commit('ADD_VENT', params)
        },

        
        async all_vent({ commit }, ) {
            await commit('ALL_VENT',)
        },

        async single_ventilator({ commit }, id) {
            await commit('SINGLE_USER', id)
        },
        async edit_vent({ commit }, params) {
            await commit('EDIT_VENT', params)
        },






    }
}

export default ventilator
