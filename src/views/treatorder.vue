<template>
    <top />
    <div class="container-fluid new">
      <div class="row">
        <div class="col-sm-2">
          <side />
        </div>
        <div class="col-sm-10 top_nav_bar">
          <div class="intro">
            <h4>Physician Treatment Order</h4>
          </div>
  
          <div class="table_container">
            <div class="formgroup mt-3">
              <div class="expanded_tab">
                <div class="formgroup mt-3">
                  <label>Patient Name</label>
                  <h4>
                    {{ single.firstname }}
                    {{ single.lastname }}
                  </h4>
                  <!--     <input type="text" v-model="patient"> -->
                </div>
  
                <div class="formgroup mt-3">
                  <div class="row">
                    <div class="col-6">
                      <label>Physician Name</label>
                      <select class="form-control" v-model="physician_id">
                        <option
                          v-for="phy_name in all_physician"
                          :key="phy_name.id"
                          :value="phy_name.id"
                        >
                          {{ phy_name.firstname }} {{ phy_name.lastname }}
                        </option>
                      </select>
                    </div>
  
                    <div class="col-6">
                      <label>Nurse Name</label>
                      <select class="form-control" v-model="nurse_id">
                        <option
                          v-for="nur_name in all_nurses"
                          :key="nur_name.id"
                          :value="nur_name.id"
                        >
                          {{ nur_name.firstname }} {{ nur_name.lastname }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
  
                <div class="formgroup mt-3">
                  <div class="row">
                    <div class="col-6">
                      <label>Visitation Date</label>
                      <input
                        type="date"
                        placeholder="Physician Name"
                        class="form-control"
                        v-model="visitation_date"
                      />
                    </div>
  
                    <div class="col-6">
                      <label>Visitation time</label>
                      <input
                        type="time"
                        placeholder="Phone Number"
                        class="form-control"
                        v-model="visitation_time"
                      />
                    </div>
                  </div>
                </div>
  
                <div class="formgroup mt-3">
                  <div class="row">
                    <div class="col-6">
                      <label>Reported Date</label>
                      <input
                        type="date"
                        placeholder="Physician Name"
                        class="form-control"
                        v-model="reported_date"
                      />
                    </div>
  
                    <div class="col-6">
                      <label>Reported time</label>
                      <input
                        type="time"
                        placeholder="Phone Number"
                        class="form-control"
                        v-model="reported_time"
                      />
                    </div>
                  </div>
                </div>
  
                <div class="formgroup mt-3">
                  <div class="row">
                    <div class="col-4">
                      <label>Classification</label>
                      <select
                        class="form-control"
                        v-model="classification_id"
                        @change="getClassificaionDrug(classification_id)"
                      >
                        <option
                          v-for="class_order in classification_order"
                          :key="class_order.id"
                          :value="class_order.id"
                        >
                          {{ class_order.classification_name }}
                        </option>
                      </select>
                    </div>
                    <div class="col-4">
                      <label> Physician Order</label>
                      <select class="form-control" v-model="physician_order_id">
                        <option
                          v-for="all_phy in physician_order"
                          :key="all_phy.id"
                          :value="all_phy.id"
                        >
                          {{
                            all_phy.order_name ? all_phy.order_name : "No Record"
                          }}
                        </option>
                      </select>
                    </div>
  
                    <div class="col-4">
                      <label>Treatment</label>
                      <select class="form-control" v-model="order_type">
                        <option value="Medication">Treatment</option>
                      </select>
                    </div>
                  </div>
                </div>
  
                <div class="formgroup mt-3">
                  <div class="row">
                    <div class="col-6">
                      <label>Medical Record No</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="medical_record_no"
                      />
                    </div>
  
                    <div class="col-6">
                      <label>Pharmacy Name</label>
                      <input
                        type="dare"
                        class="form-control"
                        v-model="pharmacy_name"
                      />
                    </div>
                  </div>
                </div>
  
                <div class="formgroup mt-3">
                  <div class="row">
                    <div class="col-6">
                      <label>Status:(NCU)</label>
                      <select class="form-control" v-model="status_ncu">
                        <option value="N">N</option>
                        <option value="C">C</option>
                        <option value="U">U</option>
                      </select>
                    </div>
                    <div class="col-6">
                      <label>Date Ordered</label>
                      <input
                        type="date"
                        class="form-control"
                        v-model="date_ordered"
                      />
                    </div>
                    <!--    <div class="col-6">
                      <label>Date Discontinue</label>
                      <input
                        type="date"
                        class="form-control"
                        v-model="date_discontinue"
                      />
                    </div> -->
                  </div>
                </div>
        <!--         <div class="formgroup mt-3">
                  <div class="row">
                    <div class="col-6">
                      <label>Date Ordered</label>
                      <input
                        type="date"
                        class="form-control"
                        v-model="date_ordered"
                      />
                    </div>
                  </div>
                </div> -->
  
                <div class="formgroup mt-4 pb-3">
                  <div class="row">
                    <div class="col-6 mx-auto add_pat">
                      <button
                        class="btn btn-success"
                        @click.prevent="add_phy_order()"
                      >
                        <i :class="loader" style="margin-right: 20px"></i>
                        Add Patient Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import top from "@/components/topnav.vue";
  import side from "@/components/side.vue";
  import edit from "@/components/editphy.vue";
  export default {
    components: { top, side, edit },
    data() {
      return {
        search: "",
        meddet: false,
        profile_code: this.$route.params.profile_code,
        patient_id: "",
        nurse_id: "",
        physician_id: "",
        visitation_date: "",
        visitation_time: "",
        reported_date: "",
        reported_time: "",
        order_type: "",
        date_ordered: "",
        classification_id: "",
        physician_order_id: "",
        medical_record_no: "",
        status_ncu: "",
        date_discontinue: "Nil",
        pharmacy_name: "",
        date_ordered: "",
        loader: "",
      };
    },
  
    methods: {
      openmed() {
        if (this.meddet == true) {
          return (this.meddet = false);
        }
        return (this.meddet = true);
      },
  
      getClassificaionDrug(id) {
        this.$store.dispatch("orders_classes", id);
      },
  
      add_phy_order() {
        this.loader = "fa fa-spinner fa-spin";
        let params = new FormData();
        params.append("patient_id", this.single.id);
        params.append("nurse_id", this.nurse_id);
        params.append("physician_id", this.physician_id);
        params.append("visitation_date", this.visitation_date);
        params.append("visitation_time", this.visitation_time);
        params.append("reported_date", this.reported_date);
        params.append("reported_time", this.reported_time);
        params.append("order_type", this.order_type);
        params.append("date_ordered", this.date_ordered);
        params.append("classification_id", this.classification_id);
        params.append("physician_order_id", this.physician_order_id);
        params.append("medical_record_no", this.medical_record_no);
        params.append("status_ncu", this.status_ncu);
        params.append("date_ordered", this.date_ordered);
        params.append("date_discontinue", this.date_discontinue);
        params.append("pharmacy_name", this.pharmacy_name);
        this.$store.dispatch("add_pat_order", params);
      },
    },
    mounted() {
      this.$store.dispatch("all_physician");
      this.$store.dispatch("all_nurses");
      this.$store.dispatch("all_phy_orders");
      this.$store.dispatch("all_orders");
      this.$store.dispatch("single_user", this.profile_code);
  
      //  this.$store.dispatch("orders_classes", classification_id);
    },
    computed: {
      all_physician() {
        return this.$store.state.physicianModule.all_physician;
      },
      all_nurses() {
        return this.$store.state.nurseModule.all_nurses;
      },
      physician_order() {
        return this.$store.state.physicianorderModule.classes;
      },
  
      classification_order() {
        return this.$store.state.classificationModule.orders;
      },
      single() {
        return this.$store.state.patientModule.single_user;
      },
    },
  };
  </script>
  
  
  
  <style scoped>
  .new {
    padding: 0px;
    margin: 0px;
  }
  .intro {
    width: 100%;
    margin: 20px auto;
    margin-top: 7rem;
  }
  
  .intro h5,
  .intro h4 {
    text-align: center;
    font-size: 35px;
    font-weight: bolder;
  }
  .intro button {
    font-size: 20px !important;
    background: black;
    color: white;
    outline: none;
  }
  
  .intro p {
    text-align: center;
  }
  
  .searchbutton {
    width: 93%;
    outline: none;
    border-radius: 10px;
    padding: 10px;
    border: 2px solid black;
  }
  .managebtn {
    width: 50%;
    outline: none;
    border-radius: 10px;
    padding: 10px;
    border: none;
  }
  .top_nav_bar {
    background: whitesmoke;
  }
  .table_container {
    width: 80%;
    margin: auto;
  }
  
  input,
  select {
    border: none;
  }
  input:focus,
  select:focus {
    box-shadow: none;
  }
  .add_pat button {
    border: none;
    width: 100%;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
  }
  .add_pat button:focus {
    border: none;
    box-shadow: none;
  }
  
  /* .table button {
    border: none;box
    padding: 10px;
    border-radius: 5px;
  }
   */
  </style>