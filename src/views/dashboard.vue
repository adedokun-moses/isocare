<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 text-white">
        <top />
      </div>

      <div class="col-sm-12 mt-5" >
        <div id="accordion">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button
                  class="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Admin Panel
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div class="card-body">
                <div class="col-sm-12 mt-5" adminnav="false">
                  <div class="main text-white tab">
                     <router-link to="/patientsign">
                      <div>
                        <h5>
                          <i class="fa fa-file fa-2x"></i><br />Add New Patient
                        </h5>
                      </div>
                    </router-link>
                    <router-link to="/physiciansign">
                      <div>
                        <h5>
                          <i class="fa fa-file fa-2x"></i><br />Add New Physician
                        </h5>
                      </div>
                    </router-link>
                    <router-link to="/patientrec">
                      <div>
                        <h5>
                          <i class="fa fa-file fa-2x"></i><br />All Patient
                          Record
                        </h5>
                      </div>
                    </router-link>

                    <router-link to="/medprofile">
                      <div>
                        <h5>
                          <i class="fa fa-file fa-2x"></i><br />Medical Profile
                        </h5>
                      </div>
                    </router-link>

                    <router-link to="/weeklyflow">
                      <div>
                        <h5>
                          <i class="fa fa-file fa-2x"></i><br />Weekly Treatment
                          Flowchart
                        </h5>
                      </div>
                    </router-link>
                    <router-link to="/weekvent">
                      <div>
                        <h5>
                          <i class="fa fa-file fa-2x"></i><br />Weekly
                          Ventilator Flowchart
                        </h5>
                      </div>
                    </router-link>
                    <router-link to="#">
                      <div>
                        <h5>
                          <i class="fa fa-file fa-2x"></i><br />Medication Admin
                          Record
                        </h5>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                 Physician Panel
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div class="card-body">
                <div class="col-sm-12 mt-5">
                  <div class="main text-white tab">
                    <router-link to="/patientsign">
                      <div>
                        <h5>
                          <i class="fa fa-file fa-2x"></i><br />Add New Patient
                        </h5>
                      </div>
                    </router-link>
                    <router-link to="/patientrec">
                      <div>
                        <h5>
                          <i class="fa fa-file fa-2x"></i><br />All Patient
                          Record
                        </h5>
                      </div>
                    </router-link>

                    <router-link to="/medprofile">
                      <div>
                        <h5>
                          <i class="fa fa-file fa-2x"></i><br />Medical Profile
                        </h5>
                      </div>
                    </router-link>

                    <router-link to="/weeklyflow">
                      <div>
                        <h5>
                          <i class="fa fa-file fa-2x"></i><br />Weekly Treatment
                          Flowchart
                        </h5>
                      </div>
                    </router-link>
                    <router-link to="/weekvent">
                      <div>
                        <h5>
                          <i class="fa fa-file fa-2x"></i><br />Weekly
                          Ventilator Flowchart
                        </h5>
                      </div>
                    </router-link>
                    <router-link to="#">
                      <div>
                        <h5>
                          <i class="fa fa-file fa-2x"></i><br />Medication Admin
                          Record
                        </h5>
                      </div>
                    </router-link>
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
export default {
  components: { top },
  data() {
    return {
      adminnav: false,
    };
  },
  setup() {},
};
</script>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
}
.main > a {
  width: 30%;
  height: 200px;
  margin: 10px 20px;
  text-decoration: none;
  box-shadow: 5px 1px #888888;
  border-radius: 10px;
  background: orange;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
}
.main > a:hover {
  box-shadow: 5px 1px #c26666;
  transform: scale(1.1); /* Equal to scaleX(0.7) scaleY(0.7) */
}
.main h5 {
  text-align: center;
  margin-top: 50px;
  font-size: 25px;
}

.card-header button{
  box-shadow: none;
}
.card-header button a{
  text-decoration: none;
}
</style>
