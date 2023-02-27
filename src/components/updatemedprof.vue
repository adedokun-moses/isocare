<template>
  <button @click="openModal()" class="button">Update</button>
  <!-- The Modal -->
  <div class="modal" id="myModal" v-if="modal == true">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="closeModal()"> &times;</span>

      <div class="table_container">
        <div class="formgroup mt-3">
          <div class="expanded_tab">
            <div class="formgroup mt-3">
              <label>Patient Name</label>
              <h4>
                 {{ single.firstname }}
                {{ single.lastname }} 
              </h4>
            </div>

            <div class="formgroup mt-3">
              <div class="row">
                <div class="col-6">
                  <label>Physician Name {{ det_id }}</label>
                  <select class="form-control" v-model="physician_id">
                    <option
                   
                      v-for="phy_name in all_physician.filter((res) => res.id == det_id)"
                      :key="phy_name.id"
                      :value="phy_name.id"
                      :selected="selected"
                    >
                  
                     {{ phy_name.firstname }} {{ phy_name.lastname }}
                    </option>

                    <option
                      v-for="phy_name in all_physician.filter((res) => res.id != det_id)"
                      :key="phy_name.id"
                      :value="phy_name.id"
                    >
                  
                     {{ phy_name.firstname }} {{ phy_name.lastname }}
                    </option> 
                  </select>
                </div>

                <div class="col-6">
                  <label>Nurse Name {{ nur_id }}</label>
                  <select class="form-control" v-model="nurse_id">
                    <option
                      v-for="nur_name in all_nurses.filter(
                        (res) => res.id == nur_id
                      )"
                      :key="nur_name"
                      :value="nur_name.id"
                      selected
                    >
                      {{ nur_name.firstname }} {{ nur_name.lastname }}
                    </option>
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
                  <label> Med/Trm</label>
                  <select class="form-control" v-model="order_type">
                    <option value="Medication">Medication</option>
                    <option value="Treatment">Treatment</option>
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
                <div class="col-4">
                  <label>Status:(NCU)</label>
                  <select class="form-control" v-model="status_ncu">
                    <option value="N">N</option>
                    <option value="C">C</option>
                    <option value="U">U</option>
                  </select>
                </div>
                <div class="col-4">
                  <label>Date Ordered</label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="date_ordered"
                  />
                </div>
                <div class="col-4">
                  <label>Date Discontinue</label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="date_discontinue"
                  />
                </div>
              </div>
       
            </div>

            <div class="formgroup mt-4 pb-3">
              <div class="row">
                <div class="col-6 mx-auto add_pat">
                  <button
                    class="btn btn-success p-2 "
                    @click.prevent="updateOrder()"
                  >
                    <i :class="loader" style="margin-right: 20px"></i>
                     {{ message }}
                  </button>
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
export default {
  props: ["prof"],
  data() {
    return {
      message: "Update Patient Order",
      modal: false,
      profile_code: this.$route.params.profile_code,
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
     // patient_id:"",
     // date_discontinue: "Nil",
      pharmacy_name: "",
      date_discontinue: "",
      det_id : "",
      loader: "",
      nur_id: "",
      id: this.prof.id
    };
  },

  methods: {
    closeModal() {
      // Get the modal
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    },
    openModal() {
      if (this.modal == "") {
        return (this.modal = true);
      }
      return (this.modal = "");
    },
    getClassificaionDrug(id) {
      this.$store.dispatch("orders_classes", id);
    },


    fetchdetails() {
      this.order_type = this.prof.order_type;
      this.nurse_id = this.prof.nurse_id;
      this.physician_id = this.prof.physician_id;
      this.det_id = this.prof.physician_details.id;
      this.nur_id = this.prof.nurse_details.id;
      this.visitation_date = this.prof.visitation_date;
      this.visitation_time = this.prof.visitation_time;
      this.reported_time = this.prof.reported_time;
      this.reported_date = this.prof.reported_date;
      this.status_ncu = this.prof.status_ncu;
      this.date_ordered = this.prof.date_ordered;
      this.pharmacy_name = this.prof.pharmacy_name;
      this.medical_record_no = this.prof.medical_record_no;
      this.physician_order_id= this.prof.physician_order_id;
      this.classification_id = this.prof.classification_id;
       this.date_discontinue = this.prof.date_discontinue;

    },

    updateOrder() {
      this.message = "Updating...";
      this.loader = "fa fa-spinner fa-spin";
      let params = {
        order_type: this.order_type,
        nurse_id: this.nurse_id,
        physician_id: this.physician_id,
        det_id: this.det_id,
        visitation_date: this.visitation_date,
        visitation_time: this.visitation_time,
        reported_time: this.reported_time,
        reported_date: this.reported_date,
        status_ncu: this.status_ncu,
        date_ordered: this.date_ordered,
        physician_order_id: this.physician_order_id,
        classification_id: this.classification_id,
        pharmacy_name: this.pharmacy_name,
        medical_record_no: this.medical_record_no,
        date_discontinue: this.date_discontinue,
        patient_id: this.single.id,
        order_id: this.prof.id
      };
     this.$store.dispatch("update_order", params);
    },
  },

  mounted() {

    this.fetchdetails();
    this.$store.dispatch("all_physician");
    this.$store.dispatch("all_nurses");
    this.$store.dispatch("all_phy_orders");
    this.$store.dispatch("all_orders");
    this.$store.dispatch("single_user", this.profile_code);
  },

  computed: {
    allorders() {
      return this.$store.state.classificationModule.orders;
    },
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
/* Button   */
.button {
  border: none;
  width: 100%;
  padding: 10px 20px;
  border-radius: 5px;
  background: blueviolet;
  font-weight: bold;
}
.button:hover{
  background: #fefefe;
}
/* The Modal (background) */
.modal {
  display: block;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(176, 34, 34); /* Fallback color */
  background-color: rgba(1, 1, 1, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  border-radius: 8px;
  height: auto;
}
.modal-content h5 {
  text-align: center;
  color: black;
  font-family: sans-serif;
  font-weight: bold;
}
/* The Close Button */
.close {
  color: red;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.file-upload-wrapper {
  width: 50%;
  margin: auto;
}

.schedule {
  display: block;
  width: 40%;
  margin: auto;
  background: green;
  padding: 10px;
  border: none;
  border-radius: 10px;
}
.formgroup {
  margin: 20px;
}
.formgroup label {
  color: black;
}

.formgroup textarea {
  resize: none;
}
.formgroup input,
.formgroup select {
  box-shadow: none;
  outline: none;
}
.add_pat button{
  border: none;
  width: 100%;
}
</style>



