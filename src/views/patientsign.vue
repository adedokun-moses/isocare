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
          <div class="col-sm-12 top_nav_">
            <div class="intro">
              <!--   <h5>Isocare Medical Extenders</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae dolores exercitationem necessitatibus
            </p> -->
              <router-link to="/patientrec">
                <i class="fa fa-arrow-left fa-1x"></i
              ></router-link>

              <h5>
                Add New Patient <br />
                <span style="font-size: 15px; text-align: center"
                  >Ensure All details are filled correctly</span
                >
              </h5>
            </div>
          </div>
          <div class="col-sm-8 mx-auto mt-3">
            <form>
              <div class="formgroup">
                <div class="row">
                  <div class="col-4">
                    <label>First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                      v-model="firstname"
                    />
                  </div>
                  <div class="col-4">
                    <label>Middle Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Middle Name"
                      v-model="middlename"
                    />
                  </div>
                  <div class="col-4">
                    <label>Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                      v-model="lastname"
                    />
                  </div>
                </div>
              </div>
              <div class="formgroup mt-3">
                <div class="row">
                  <div class="col-6">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      v-model="phone_no"
                      class="form-control"
                    />
                  </div>

                  <div class="col-6">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      v-model="email"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>

              <div class="formgroup mt-3">
                <label>Address</label>
                <textarea
                  type="text"
                  placeholder="Address"
                  class="form-control"
                  v-model="address"
                >
                </textarea>
              </div>

              <div class="formgroup mt-3">
                <label>Allergies</label>
                <input
                  type="text"
                  placeholder="Allegries"
                  class="form-control"
                  v-model="allergies"
                />
              </div>

              <div class="fomrgroup mt-1">
                <div class="row">
                  <div class="col-8 mx-auto p-5">
                    <button
                      class="btn btn-success form-control"
                      @click.prevent="addPatient()"
                    >
                      Add Patient
                    </button>
                  </div>
                </div>
              </div>
            </form>
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
      formphy: false,
      meddet: false,
      firstname: "",
      middlename: "",
      lastname: "",
      allergies: "",
      email: "",
      address: "",
      phone_no: "",
      address: "",
    };
  },
  methods: {
    addPatient() {
         
      if (this.firstname == "" && this.lastname == "") {
        alert("all field must be filled");
        return false;
      } else {
      let params = new FormData();
      params.append("firstname", this.firstname);
      params.append("lastname", this.lastname);
      params.append("middlename", this.middlename);
      params.append("allergies", this.allergies);
      params.append("email", this.email);
      params.append("address", this.address);
      params.append("phone_no", this.phone_no);
      //    params.append("token", token);
      this.$store.dispatch("add_new_patient", params);
      }
      // let token = JSON.parse(sessionStorage.getItem("token"));
     
    
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
  width: 80%;
  margin: 10px auto;
}
.top_nav_ {
  margin-top: 4rem;
}
.intro h5 {
  text-align: center;
  font-size: 35px;
  font-weight: bold;
}
.intro p {
  text-align: center;
}

.form_hide {
  background: grey;
}
.top_nav_bar {
  background: whitesmoke;
  height: auto;
}
input:focus,
textarea:focus {
  box-shadow: none;
}
input, textarea{
  border: none;
}
</style>