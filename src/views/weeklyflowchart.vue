<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 m-0 p-0">
        <top class="main_top" />
      </div>
      <div class="col-sm-2">
        <side class="side" />
      </div>
      <div class="col-sm-10 top_nav_bar " id="formdet">
        <div class="row">
          <div class="col-12">
            <div class="
                  intro ">
              <h5 class="mt-5" style="font-size: 15px;">Isocare Medical Extenders <br> <span>Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. <br> Corrupti quae facilis a illo consectetur libero nemo porro voluptates
                  nobis et,<br> perferendis dolore necessitatibus suscipit omnis architecto totam exercitationem beatae
                  sequi.</span></h5>

              <div class="details_main d-flex">
                <div><router-link to="/patientrec">
                    <i class="fa fa-arrow-left fa-1x float-left" style=" font-size: 17px"></i></router-link></div>
                <div>
                  <h5> Weekly Treatment Flowchart</h5>
                </div>
                <div><span style=" font-size: 17px" class="add_div " @click="addPhyOrder()">Add
                    New</span></div>
              </div>


              <!--   <h5>     Weekly Treatment Flowchart <span style=" font-size: 17px" class="add_div" @click="addPhyOrder()">Add
                  New</span> </h5> -->
            </div>
          </div>
        </div>
        <div class="main_cover col-12  mx-auto">
          <div class="top_col">
            <div class="row">
              <div class="col-12 description_page">
                <div class="row">
                  <div class="col-6 main_display">
                    <img src="../assets/image_set.jpg" alt="" class="w-100" />
                  </div>
                  <div class="col-6">
                    <div class="row">
                      <div class="col-12 display">
                        <!--    <h4>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Laboriosam nam atque amet voluptas non magni
                      
                      </h4> -->
                      </div>
                      <div class="col-12 display">
                        <!--  <h4>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ullam modi sequi esse illo 
                      </h4> -->
                      </div>
                      <div class="col-12">
                        <h4>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Odio assumenda null
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <table class="table table-bordered">
                  <thead>
                    <th>Site</th>
                    <th>Size/Depth</th>
                    <th>Under-Mining</th>
                    <th>Drainage <br /></th>
                    <th>Stage Of Decubitis Ulser</th>
                    <th>Elscar</th>
                    <th>Slough</th>
                    <th>Inflam</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                      <td>7</td>
                      <td>8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="col-3 tab_pat">
                    <h4>Patient Name:</h4>
                    <h4 style="margin-left: 2rem">MR:</h4>
                    <h4>Allegries</h4>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="des_tab d-flex">
              <div><i class="fa fa-bell"></i></div>
              <div>2</div>
          </div> -->
          </div>

          <div class="content bg-danger" v-for="week_det in weeklly_treat" :key="week_det.id">
            <table class="table table-striped mt-4 table-bordered">
              <tbody>
                <tr>
                  <td colspan="1">Treatement</td>
                  <!--    <td>INI</td> -->
                  <td>Time</td>
                  <td v-for="week_details in week_det.treatment_record
                    .date_of_treatment_record" :key="week_details">
                    {{ week_details.trs_day_one_date.date }}
                  </td>
                  <td v-for="week_details in week_det.treatment_record
                    .date_of_treatment_record" :key="week_details">
                    {{ week_details.trs_day_two_date.date }}
                  </td>
                  <td v-for="week_details in week_det.treatment_record
                    .date_of_treatment_record" :key="week_details">
                    {{ week_details.trs_day_three_date.date }}
                  </td>
                  <td v-for="week_details in week_det.treatment_record
                    .date_of_treatment_record" :key="week_details">
                    {{ week_details.trs_day_four_date.date }}
                  </td>
                  <td v-for="week_details in week_det.treatment_record
                    .date_of_treatment_record" :key="week_details">
                    {{ week_details.trs_day_five_date.date }}
                  </td>
                  <td v-for="week_details in week_det.treatment_record
                    .date_of_treatment_record" :key="week_details">
                    {{ week_details.trs_day_six_date.date }}
                  </td>
                  <td v-for="week_details in week_det.treatment_record
                    .date_of_treatment_record" :key="week_details">
                    {{ week_details.trs_day_seven_date.date }}
                  </td>
                </tr>

                <tr>
                  <td rowspan="2">
                    <!--    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                  blanditiis! Asperiores unde quia ad odit neque voluptatum
                  ipsum eaque molestiae. -->
                    {{ week_det.treatment_record.order_name }},
                    {{ week_det.treatment_record.dose }},
                    {{ week_det.treatment_record.frequency }},
                    {{ week_det.treatment_record.route }}
                    <!--  {{ week_det }} -->
                  </td>
                  <!--   <td></td> -->
                  <td>AM</td>
                  <td></td>
                  <!--    <td></td>
                <td>{{ week_det.date_of_treatment_record }}</td>
                <td>{{week_det.treatment_record.date_of_treatment_record.trs_day_one_date.date}}</td> -->
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
            </div>
          </div>
          <div class=" print">
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
export default {
  components: { top, side },
  data() {
    return {
      profile_code: this.$route.params.profile_code,
    };
  },

  methods: {

    addPhyOrder() {
      this.$router.push("/treatorder/" + this.profile_code);
    },
    print() {
      window.print();
      // alert("home")
    },
  },

  mounted() {
    this.$store.dispatch("week_treatment", this.profile_code);
  },

  computed: {
    weeklly_treat() {
      return this.$store.state.patientModule.week_treatment;
    },
  },
};
</script>

<style scoped>
.intro {
  width: 90%;
  padding: 30px 0px 0px 0px;
  position: fixed;
  background: whitesmoke !important;
  box-shadow: 0 0 10px rgb(236, 234, 234);
  z-index: 2;
}

#formdet{
  background: whitesmoke;
}
.top_nav_bar{
  background: whitesmoke;
}

.intro h5 {
  text-align: center;
  font-size: 30px;
  color: red;
}

.intro p {
  text-align: center;
}

.table_head th {
  text-align: center;
}

.top_col {
  height: 350px;
  border: 3px solid black;
}

.description_page {
  height: 200px;
}

.main_display {
  border-right: 2px solid black;
  height: 200px;
  overflow: hidden;
}

.main_cover {
  margin: 0px;
  padding: 0px;
  margin-top: 13rem;
}

.display {
  /*   border-bottom: 1px solid black; */
  height: 70px;
}

.tab_pat h4 {
  display: inline-block;
  font-size: 15px;
}

.add_div {
  background: #032d7c;
  padding: 10px;
  border-radius: 10px;
  color: white;

  cursor: pointer;
}

.details_main {
  align-items: center;
}

.details_main>div {
  width: 100%;
}

/* .display h4{
   border-bottom: 2px solid black;
   font-size: 15px;
   margin: 0px;
} */

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