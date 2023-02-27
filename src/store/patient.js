import axios from 'axios';
import router from "@/router";
import Swal from 'sweetalert2';

const patient = {
    state: {
        baseUrl: process.env.VUE_APP_MOREPLEX_API ? process.env.VUE_APP_MOREPLEX_API : "",
        token: JSON.parse(sessionStorage.getItem("token")),
        // profile_code: JSON.parse(sessionStorage.getItem("profile_code")),
        all_patients: [],
        single_user: "",
        med_prof: "",
        week_treatment: "",
        pat_mar: ""


    },

    mutations: {
        ADD_NEW_PATIENT(state, params) {

            axios
                .post(state.baseUrl + "/api/nurse_auth/order/register_new_patient", params, {
                    headers: { Authorization: `Bearer ${state.token}` },
                }).then((res) => {
                    if (res.data.status == 'success') {
                        alert(res.data.message)
                        Swal.fire({
                            title: res.data.message,
                            text: "Do You Want To Add Patient Order",
                            icon: 'success',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes!!!!'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire(
                                    'Success!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                                router.push('/phyorder/' + res.data.user.profile_code)
                            } else {
                                Swal.fire(
                                    'Error!',
                                    'Your file has been deleted.',
                                    'error'
                                )
                                router.push('/')
                            }
                        })
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

        ALL_PATIENTS(state) {
            axios.get(state.baseUrl + "/api/patient_auth/patients", {
                headers: { Authorization: `Bearer ${state.token}` },
            }).then((res) => {
                state.all_patients = res.data.all_patients
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
        },

        ADD_PAT_ORDER(state, params) {
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

        /*   UPD_PAT_ORDER(state, params) {
              axios
                  .post(state.baseUrl + "/api/nurse_auth/order/update_order_rec", params, {
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
  
          }, */

        UPDATE_PAT_ORDER(state, data) {
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

        SINGLE_USER(state, profile_code) {
            axios.get(state.baseUrl + "/api/patient_auth/patients/show/" + profile_code, {
                headers: { Authorization: `Bearer ${state.token}` },
            }).then((res) => {
                state.single_user = res.data.patient_details
                console.log(state.single_user)
            }).catch((err) => {
                console.log(err)
            })
        },


        PAT_MED_PROF(state, profile_code) {
            axios.get(state.baseUrl + "/api/nurse_auth/order/medpro_order_rec_patient/" + profile_code, {
                headers: { Authorization: `Bearer ${state.token}` },
            }).then((res) => {
                state.med_prof = res.data.medication_profile_order
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
        },

        PAT_WEEK_ORDER(state, profile_code) {
            axios.get(state.baseUrl + "/api/nurse_auth/order/treatment_order_rec_patient/" + profile_code, {
                headers: { Authorization: `Bearer ${state.token}` },
            }).then((res) => {
                state.week_treatment = res.data.treatment_order
                console.log(state.week_treatment)
            }).catch((err) => {
                console.log(err)
            })
        },


        PAT_MAR(state, profile_code) {
            axios.get(state.baseUrl + "/api/nurse_auth/order/mar_patient/" + profile_code, {
                headers: { Authorization: `Bearer ${state.token}` },
            }).then((res) => {
                state.pat_mar = res.data.medication_order;
                console.log(res.data.medication_order)
            }).catch((err) => {
                console.log(err)
            })
        },


    },
    actions: {
        async add_new_patient({ commit }, params) {
            await commit('ADD_NEW_PATIENT', params)
        },
        async all_patient({ commit }) {
            await commit('ALL_PATIENTS')
        },

        async add_pat_order({ commit }, params) {
            await commit('ADD_PAT_ORDER', params)
        },
        async single_user({ commit }, profile_code) {
            await commit('SINGLE_USER', profile_code)
        },
        async med_prof({ commit }, profile_code) {
            await commit('PAT_MED_PROF', profile_code)
        },
        async week_treatment({ commit }, profile_code) {
            await commit('PAT_WEEK_ORDER', profile_code)
        },

        async patient_mar({ commit }, profile_code) {
            await commit('PAT_MAR', profile_code)
        },
        async update_order({ commit }, params) {
            await commit('UPDATE_PAT_ORDER', params)
        },






    }
}

export default patient
