<template>
 
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 m-0 p-0">
        <top class="main_top"/>
      </div>
      <div class="col-sm-2">
        <side class="side"/>
      </div>
      <div class="col-sm-10 top_nav_bar  ">
        <div class="row">
          <div class="col-sm-12 mx-auto" id="formdet">
            <div class="intro">
              <h5>Isocare Medical Extenders</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, <br />
                adipisicing elit. Recusandae dolores exercitationem
                necessitatibus
              </p>
              <h5><router-link to="/patientrec">
                    <i class="fa fa-arrow-left fa-1x float-left"></i></router-link>Medication Administration Record  <span
                style="float: right; font-size: 17px"
                class="add_div"
                @click="addPhyOrder()"
                >Add New</span
              ></h5>
            </div>
            <div class="top_col">
              <div class="tab_pat">
                <h4>
                  Patient Name:
                  <!--  <b>
                    {{ patients_mar[0].patient_details.firstname }}
                    {{ patients_mar[0].patient_details.lastname }}</b
                  > -->
                </h4>
                <h4 style="margin-left: 6rem">MR:</h4>
                <h4 style="margin-left: 10rem">Allegries</h4>
              </div>
            </div>

            <div class="content">
              <table
                class="table table-bordered"
                v-for="pat_det in patients_mar"
                :key="pat_det.id"
              >
                <thead>
                  <tr>
                    <th>Start Date</th>
                    <th>Medication Dose</th>
                    <th>Time</th>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thur</th>
                    <th>Fri</th>
                    <th>Sat</th>
                  </tr>
                  <tr>
                    <th>Start Date</th>
                    <th>Medication Dose</th>
                    <th style="visibility: none">Time</th>
                    <td
                      v-for="week_details in pat_det.treatment_record
                        .date_of_medication_record"
                      :key="week_details"
                    >
                      {{ week_details.mar_day_one_date.date }}
                    </td>
                    <td
                      v-for="week_details in pat_det.treatment_record
                        .date_of_medication_record"
                      :key="week_details"
                    >
                      {{ week_details.mar_day_two_date.date }}
                    </td>
                    <td
                      v-for="week_details in pat_det.treatment_record
                        .date_of_medication_record"
                      :key="week_details"
                    >
                      {{ week_details.mar_day_three_date.date }}
                    </td>
                    <td
                      v-for="week_details in pat_det.treatment_record
                        .date_of_medication_record"
                      :key="week_details"
                    >
                      {{ week_details.mar_day_four_date.date }}
                    </td>
                    <td
                      v-for="week_details in pat_det.treatment_record
                        .date_of_medication_record"
                      :key="week_details"
                    >
                      {{ week_details.mar_day_five_date.date }}
                    </td>
                    <td
                      v-for="week_details in pat_det.treatment_record
                        .date_of_medication_record"
                      :key="week_details"
                    >
                      {{ week_details.mar_day_six_date.date }}
                    </td>
                    <td
                      v-for="week_details in pat_det.treatment_record
                        .date_of_medication_record"
                      :key="week_details"
                    >
                      {{ week_details.mar_day_seven_date.date }}
                    </td>
                    
                    <!--     <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thur</th>
                    <th>Fri</th>
                    <th>Sat</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowspan="2"></td>
                    <td rowspan="2">
                      {{ pat_det.treatment_record.order_name }},
                      {{ pat_det.treatment_record.dose }},
                      {{ pat_det.treatment_record.frequency }},
                      {{ pat_det.treatment_record.route }}
                    </td>
                    <td>AM</td>
                    <td></td>

                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>PM</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="signature_col mt-5">
              <div class="row">
                <div class="col-sm-12">
                  <div class="row">
                    <div class="col-sm-4">
                      <p>Nurse Init: ________ Sign: X_________________</p>
                      <p>Nurse Init: ________ Sign: X_________________</p>
                    </div>
                    <div class="col-sm-4">
                      <p>Nurse Init: ________ Sign: X_________________</p>
                      <p>Nurse Init: ________ Sign: X_________________</p>
                    </div>
                    <div class="col-sm-4">
                      <p>Nurse Init: ________ Sign: X_________________</p>
                      <p>Nurse Init: ________ Sign: X_________________</p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-12 print">
                  <button @click="print()">Print</button>
                  <!--   <h4>Print</h4> -->
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
      profile_code: this.$route.params.profile_code,
    };
  },

  methods: {
    
    addPhyOrder() {
      this.$router.push("/marorder/" + this.profile_code);
    },
    print() {
      window.print();
      // alert("home")
    },
  },

  mounted() {
    this.$store.dispatch("patient_mar", this.profile_code);
  },

  computed: {
    patients_mar() {
      return this.$store.state.patientModule.pat_mar;
    },
  },
};
</script>

<style scoped>
.intro {
  width: 80%;
  margin: 20px auto;
}
.intro h5 {
  text-align: center;
  font-size: 35px;
}
.top_nav_bar{
  background: whitesmoke;
}
.intro p {
  text-align: center;
}
.table_head th {
  text-align: center;
}

.main_display {
  border-right: 2px solid black;
  height: 200px;
  overflow: hidden;
}

.display {
  /*   border-bottom: 1px solid black; */
  height: 70px;
}
.tab_pat h4 {
  display: inline-block;
  font-size: 15px;
}

button {
  background: red;
  padding: 10px;
  text-align: center;
  border: none;
  float: right;
  width: 15%;
  font-weight: bold;
  margin: 20px 0px;
  border-radius: 20px;
  cursor: pointer;
}
.add_div{
  background: #032d7c;
  padding: 10px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
}

@media print {
  body,
  .old,
  .main_top,
  .side,
  .print {
    display: none;
  
  }

  .intro {
    width: 50%;
    margin: 0px auto;
    margin-top: 6rem;
  }
  #formdet {
    width: 100%;
    display: inline;
    margin: auto;
  
  }
}
</style>