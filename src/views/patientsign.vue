<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <top />
      </div>
      <div class="col-sm-12">
        <div class="intro">
          <h5>Isocare Medical Extenders</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            dolores exercitationem necessitatibus
          </p>
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
                />
              </div>
              <div class="col-4">
                <label>Middle Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                />
              </div>
              <div class="col-4">
                <label>Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
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
                  class="form-control"
                />
              </div>

              <div class="col-6">
                <label>Email</label>
                <input type="email" placeholder="Email" class="form-control" />
              </div>
            </div>
          </div>

          <div class="formgroup mt-3">
            <label>Address</label>
            <textarea type="text" placeholder="Allegry" class="form-control">
            </textarea>
          </div>

          <div class="formgroup mt-3">
            <label>Allegry</label>
            <input type="text" placeholder="Address" class="form-control" />
          </div>

          <div class="formgroup mt-3">
            <label>
              <input type="checkbox" @change="opentab" /> Add Order</label
            >
          </div>
          <div class="expanded_tab" v-if="formphy == true">
            <div class="formgroup mt-3">
              <div class="row">
                <div class="col-6">
                  <label>Attending Physician Name</label>
                  <input
                    type="text"
                    placeholder="Physician Name"
                    class="form-control"
                  />
                </div>

                <div class="col-6">
                  <label>Attending Physician Phone Number</label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    class="form-control"
                  />
                </div>
              </div>
            </div>

            <div class="formgroup mt-3">
              <div class="row">
                <div class="col-6">
                  <label>Attending Physician Name</label>
                  <input
                    type="text"
                    placeholder="Physician Name"
                    class="form-control"
                  />
                </div>

                <div class="col-6">
                  <label>Attending Physician Phone Number</label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    class="form-control"
                  />
                </div>
              </div>
            </div>

            <div class="formgroup mt-3">
              <div class="row">
                <div class="col-4">
                  <label> Physician Order</label>
                  <select class="form-control">
                     <option>----Ibufin---</option>
                    <option>Ibufin</option>
                    <option>Ibufin</option>
                    <option>Ibufin</option>
                    <option>Ibufin</option>
                  </select>
                </div>
                <div class="col-4">
                  <label>Classification</label>
                 <select class="form-control">
                     <option>----Ibufin---</option>
                    <option>Ibufin</option>
                    <option>Ibufin</option>
                    <option>Ibufin</option>
                    <option>Ibufin</option>
                  </select>
                </div>

                <div class="col-4">
                  <label>
                    <input type="checkbox" @change="openmed" />
                    Medication</label
                  >
                </div>

                <div class="col-sm-12">
                  <div v-if="meddet == true">
                    <div class="row">
                      <div class="col-4">
                        <label> <input type="radio" /> Medical</label>
                      </div>
                      <div class="col-4">
                        <label> <input type="radio" /> Treatment</label>
                      </div>
                      <div class="col-4">
                        <label> <input type="radio" /> Classification</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="fomrgroup mt-3">
            <div class="row">
              <div class="col-8 mx-auto p-3">
                <button class="btn btn-success form-control">
                  Add Patient
                </button>
              </div>
            </div>
          </div>
        </form>
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
      formphy: false,
      meddet: false,
    };
  },
  setup() {},

  methods: {
    opentab() {
      if (this.formphy == true) {
        return (this.formphy = false);
      }
      return (this.formphy = true);
    },

    openmed() {
      if (this.meddet == true) {
        return (this.meddet = false);
      }
      return (this.meddet = true);
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
.intro p {
  text-align: center;
}

.form_hide {
  background: grey;
}
</style>