<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 m-0 p-0">
        <top />
      </div>
      <div class="col-sm-2">
        <side />
      </div>
      <div class="col-sm-10 top_nav_bar">
        <div class="row">
          <div class="col-sm-9 main_dash">
            <h5>
              Dashboard
              <span style="font-size: 13px; margin-left: 30rem">
                <span class="mr-1">Home /</span
                ><span class="ml-1">Dashboard /</span> General</span
              >
            </h5>
            <h4><i class="fa-solid fa-user ml-3 fa-2x"></i> General Profile</h4>
            <div class="main">
              <div class="info">
                <div class="new__det">
                  <div>
                    <h2>
                      Patient on <br />
                      Board
                    </h2>
                  </div>
                  <div >
                    <img src="../assets/new.png" alt="" />
                  </div>
                </div>
                <div class="user_det">
                  <h2>{{all_pat.length}}</h2>
                </div>
              </div>

              <div class="info" @click="add()">
                <div class="new__det">
                  <div>
                    <h2>Add New Physician</h2>
                  </div>
                  <div>
                    <img src="../assets/doctor.png" alt="" />
                  </div>
                </div>
                <div class="user_det">
                  <h2>Add</h2>
                </div>
              </div>

              <div class="info">
                <div class="new__det">
                  <div>
                    <h2>Add New Patient</h2>
                  </div>
                  <div>
                    <img src="../assets/patient.png" alt="" />
                  </div>
                </div>
                <div class="user_det">
                  <h2>Add</h2>
                </div>
              </div>

              <div class="info">
                <div class="new__det">
                  <div>
                    <h2>Add New Nurse</h2>
                  </div>
                  <div>
                    <img src="../assets/nurse.png" alt="" />
                  </div>
                </div>
                <div class="user_det">
                  <h2>Add</h2>
                </div>
              </div>

              <div class="info">
                <div class="new__det">
                  <div>
                    <h2>Add New Drug</h2>
                  </div>
                  <div>
                    <img src="../assets/drug.png" alt="" />
                  </div>
                </div>
                <div class="user_det">
                  <h2>Add</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3 hospitalprof">
            <div class="row">
              <div class="col-sm-10 mx-auto hospital_prof">
                <h4>
                  Hospital Profile
                  <span style="font-size: 10px"
                    ><br />All hospital doc here</span
                  >
                </h4>

                <div class="row">
                  <div class="col-sm-12 mt-3 main_profile_det d-flex">
                    <div style="flex-grow: 7" class="patient_des d-flex">
                      <div><i class="fa fa-book fa-2x"></i></div>
                      <div class="ml-2">
                        <h4>Patient List</h4>
                        <p style="font-size: 10px">Contains Patient Docs....</p>
                      </div>
                    </div>
                    <div style="flex-grow: 3" class="profile_Rec">
                     <h3>{{all_pat.length}}</h3>
                    </div>
                  </div>

                  <div class="col-sm-12 mt-2 main_profile_det d-flex">
                    <div style="flex-grow: 7" class="patient_des d-flex">
                      <div><i class="fas fa-user-doctor fa-2x"></i></div>
                      <div class="ml-2">
                        <h4>Doctors List</h4>
                        <p style="font-size: 10px">Contains Doctors Docs....</p>
                      </div>
                    </div>
                    <div style="flex-grow: 3" class="profile_Rec">
                 <h3>{{ all_doctors.length }}</h3> 
                    </div>
                  </div>

                  <div class="col-sm-12 mt-2 main_profile_det d-flex">
                    <div style="flex-grow: 7" class="patient_des d-flex">
                      <div><i class="fas fa-user-nurse fa-2x"></i></div>
                      <div class="ml-2">
                        <h4>Nurses List</h4>
                        <p style="font-size: 10px">Contains Nurses Docs....</p>
                      </div>
                    </div>
                    <div style="flex-grow: 3" class="profile_Rec">
                   <h3>{{ all_nurses.length }}</h3> 
                    </div>
                  </div>

                  <div class="col-sm-12 mt-2 main_profile_det d-flex">
                    <div style="flex-grow: 7" class="patient_des d-flex">
                      <div><i class="fa fa-pills fa-2x"></i></div>
                      <div class="ml-2">
                        <h4>Drug List</h4>
                        <p style="font-size: 10px">Contains Drugs Docs....</p>
                      </div>
                    </div>
                    <div style="flex-grow: 3" class="profile_Rec">
                       <h3>{{drugs.length}}</h3>
                    </div>
                  </div>

                  <h4>
                    Patient Medical/ Treatment
                    <span style="font-size: 10px"
                      ><br />All hospital treatment here</span
                    >
                  </h4>

                  <div class="col-sm-12 mt-4 main_profile_det d-flex">
                    <div style="flex-grow: 7" class="patient_des d-flex">
                      <div><i class="fa fa-book fa-2x"></i></div>
                      <div class="ml-2">
                        <h4>Patient List</h4>
                        <p style="font-size: 10px">Contains Patient Docs....</p>
                      </div>
                    </div>
                    <div style="flex-grow: 3" class="profile_Rec">
                   <!--    <h3>{{ all_patient.length }}</h3> -->
                    </div>
                  </div>

                  <div class="col-sm-12 mt-2 main_profile_det d-flex">
                    <div style="flex-grow: 7" class="patient_des d-flex">
                      <div><i class="fa fa-book fa-2x"></i></div>
                      <div class="ml-2">
                        <h4>Doctors List</h4>
                        <p style="font-size: 10px">Contains Patient Docs....</p>
                      </div>
                    </div>
                    <div style="flex-grow: 3" class="profile_Rec">
                      <h3>{{drugs.length}}</h3>
                    </div>
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
export default {
  components: { top, side },
  data() {
    return {
      adminnav: false,
      total: "",
    };
  },
  methods: {
    add() {
      this.$router.push("/patientsign");
    },
  },

  mounted() {
    this.$store.dispatch("all_nurses");
  },
  computed: {
    all_nurses() {
      return this.$store.state.nurseModule.all_nurses;
    },
    all_doctors() {
      return this.$store.state.physicianModule.all_physician;
    },
    all_pat() {
      return this.$store.state.patientModule.all_patients;
    },

    drugs(){
      return this.$store.state.physicianorderModule.phy_orders
    }
  },
};
</script>

<style scoped>
.new {
  padding: 0px;
  margin: 0px;
}
.home_cont {
  margin: 0px !important;
  padding: 0px !important;
}
.main_dash {
  background: rgba(255, 255, 255, 0.94);
}
.main_dash h4 {
  font-weight: bold;
  margin: 15px 0px;
  font-size: 15px;
}
.top_nav_bar {
  margin-top: 4rem;
  height: 590px;
  background: white;
}
.top_nav_bar h5 {
  font-size: 30px;
  font-weight: bolder;
  margin: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000000;
}
.main {
  display: flex;
  flex-wrap: wrap;
}
.main > div {
  width: 28%;
  height: 150px;
  margin: 10px 20px;
  cursor: pointer;
  background: red;
}
.new__det {
  display: flex;
}
.new__det > div {
  overflow: auto;
  width: 100%;
  margin: 5px;
  align-content: center;
}
.new__det h2 {
  display: inline-block;
  margin: 15px 5px;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
}
.new__det img {
  width: 50%;
  margin: 10px;
}
.info {
  display: flex;
  flex-direction: column;
}
.info > div {
  width: 100%;
  background: #ffffff;
  height: inherit;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}
.user_det h2 {
  border: 2px solid black;
  width: 50%;
  text-align: center;
  border-radius: 7px;
  margin: auto;
  padding: 5px 0px;
  font-weight: bold;
}

img {
  width: 100%;
}
.hospital_prof h4 {
  font-size: 16px;
  font-weight: bold;
  margin: 0px;
  padding: 0px;
  margin-top: 10px;
}
.hospitalprof {
  background: #fffeff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
}
.main_profile_det {
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  height: 60px;
}
.patient_des {
  align-items: center;
}

.patient_des h4 {
  font-size: 14px;
}
.profile_Rec h3 {
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
  padding: 10px;
  font-size: 13px;
}
</style>
