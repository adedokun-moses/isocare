<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 m-0 p-0">
        <top class="main_top" />
      </div>
      <div class="col-sm-2">
        <side />
      </div>
      <div class="col-sm-10 top_nav_bar">
        <div class="intro">
          <!--      <div class="image_tab">
            <img src="../assets/icare.png" alt=""> 
          </div> -->
          <div class="attendee_det" id="formdet">
            <h4> <span><router-link to="/patientrec">
                  <i class="fa fa-arrow-left fa-1x" style="float: left"></i></router-link></span>
              Medication Profile
              <span style="float: right; font-size: 17px" class="add_div" @click="addPhyOrder()">Add New</span>
            </h4>
            <div class="patient_det">
              <!-- {{ profiles[0] }} -->
              <div>
                <h3>
                  Patient Name: <!-- {{ fullname }} -->
                  <!--  {{ profiles[0].patient_details.lastname }} -->
                </h3>
                <h3>MR: <!-- {{ profiles[0].medical_record_no }} --></h3>
                <h3>Allegries: <!-- {{ profiles[0].patient_details.allergies }} --></h3>
              </div>
              <div>
                <h3>
                  Physician Name: <!-- {{ profiles[0].physician_details.firstname }} -->
                  <br />
                  Pharmacy:<!--  {{ profiles[0].pharmacy_name }} -->
                </h3>
              </div>
            </div>
            <div class="sort">
              <label for="">From</label>
              <input type="date" v-model="startDate">
              <label for="">To</label>
              <input type="date" v-model="endDate">
              <div class="filter_tab mt-2">
                <button>Reset</button>
                <button @click="filteredItems()">Filter</button>

              </div>
            </div>
            <table class="table table-striped mt-4 table-bordered">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>NCU</th>
                  <th>Name, Dose, Frequency, Route</th>
                  <th>Classification</th>
                  <th>Order Type</th>
                  <th>Date DC</th>
                </tr>
              </thead>
              <tbody v-for="prof in filteredItems()" :key="prof.id">
                <tr>
                  <td>{{ prof.visitation_date }}</td>
                  <td>{{ prof.status_ncu }}</td>

                  <td>
                    {{ prof.physician_order_details.order_name }},
                    {{ prof.physician_order_details.frequency }},
                    {{ prof.physician_order_details.route }},
                    {{ prof.physician_order_details.dose }}
                  </td>
                  <td>{{ prof.physician_order_classification }}</td>
                  <td>{{ prof.order_type }}</td>
                  <td>{{ prof.date_discontinue }}</td>
                  <td>
                    <updatephy :prof="prof" />
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="description mt-5">
              <h5>N: New (Within 30 Days)</h5>
              <h5>C: Changed (Within 30 Days)</h5>
              <h5>U: Unchanged</h5>
            </div>

            <div class="sign text-center mt-5">
              <h6>Professional Signature</h6>
              <h6>Date</h6>
            </div>

            <!--    <div  class="signature text-center">
              <h5>Print</h5>
            </div> -->
          </div>
          <div class="print">
            <button @click="print()">Print</button>
            <!--   <h4>Print</h4> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import top from "@/components/topnav.vue";
import side from "@/components/side.vue";
import updatephy from "@/components/updatemedprof.vue";
import axios from "axios";
export default {
  components: { top, side, updatephy },
  data() {
    return {
      profile_code: this.$route.params.profile_code,
      user_name: "",
      fullname: "",
      allergies: "",
      pharmacy_name: "",
      physician_name: "",
      startDate: "",
      endDate: "",
      currentDate: "",
      profiles: [],
      baseUrl: process.env.VUE_APP_MOREPLEX_API ? process.env.VUE_APP_MOREPLEX_API : "",
      token: JSON.parse(sessionStorage.getItem("token")),
    };
  },

  methods: {
    /*   username(){
    return this.$store.state.patientModule.med_prof
  } */
    med_profiles() {
      //return this.$store.state.patientModule.med_prof
      axios.get(this.baseUrl + "/api/nurse_auth/order/medpro_order_rec_patient/" + this.profile_code, {
        headers: { Authorization: `Bearer ${this.token}` },
      }).then((res) => {
        this.profiles = res.data.medication_profile_order
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
    },

    filteredItems() {
      //let profiles = this.$store.state.patientModule.med_prof
     /*  console.log(this.startDate)
      console.log(this.endDate) */
      /* if (!this.startDate && !this.endDate) {
        return this.profiles;
      } */
     return this.profiles.filter((item) => {
        if (item.reported_date >= this.startDate && item.reported_date <= this.endDate) {
         // console.log(item)
          return item
        } else if (item.reported_date >= this.startDate) {
          return item
        }
        else if (item.reported_date <= this.endDate) {
          return item
        } else {
          return item
        }
      });
    },

    addPhyOrder() {
      this.$router.push("/phyorder/" + this.profile_code);
    },

    print() {
      window.print();
      // alert("home")
    }
  },

  /* computed: {
    profiles() {
      return this.$store.state.patientModule.med_prof
    },
  }, */


  mounted() {
    this.med_profiles()
   // this.filteredItems();
    //this.fullname = this.profiles()
    /* this.profiles.forEach(element => {
      if(element.length==1){
        this.fullname = element
      }
    }); */

    //  this.username()
  },
  /*   created() {
      this.fullname = this.profiles
    } */
};
</script>

<style scoped>
body::-webkit-scrollbar {
  display: none;


}

.sort{
  width: 50%;
}

.sort input {
  border: none;
  margin: 0px 10px 10px;
  padding: 10px;
}

.filter_tab button {
  background: none;
  width: 50%;
}

.top_nav_bar {
  background: whitesmoke;
}

main {
  padding: 0px;
  margin: 0px;
  background: red;
}

.intro {
  width: 80%;
  margin: 30px auto;
  margin-top: 6rem;
}

.intro h5 {
  text-align: center;
  font-size: 35px;
}

.attendee_det h4 {
  padding: 4px 0px;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
}

.number {
  padding: 0px 30px;
  border-bottom: 2px dotted red;
}

.address {
  padding: 0px 30px;
  border-bottom: 2px dotted red;
  font-size: 15px;
}

.patient_det {
  display: flex;
  justify-content: space-between;
}

.patient_det h3 {
  font-size: 15px;
}

.add_div {
  background: #032d7c;
  padding: 10px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
}

.description h5 {
  text-align: left;
  font-size: 15px;
}

.signature {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 50px;
}

/* .signature >  div{
  width: 50%;
} */
.sign h6 {
  display: inline-block;
  border-top: 2px dotted grey;
  padding: 10px 0px;
  margin: 0px 10px;
}

button {
  background: red;
  padding: 10px;
  text-align: center;
  border: none;
  float: right;
  width: 15%;
  border-radius: 20px;
  cursor: pointer;
}

.update_btn {
  background: #032d7c;
  color: white;
  text-align: center;
  border: none;
  width: 100%;
  border-radius: 20px;
  cursor: pointer;
}

.image_tab {
  height: 500px;
  overflow: hidden;
}

.image_tab img {
  width: 100%;
}

@media print {

  body,
  .old,
  .main_top,
  .add_div,
  .print {
    display: none;
  }

  .intro {
    width: 90%;
    margin: 0px auto;
    margin-top: 6rem;
  }

  #formdet {
    width: 100%;
    display: inline;
    margin: auto;
    /* visibility: visible;
    position: absolute;
    top: 0;
    left: 0; */
  }
}
</style>