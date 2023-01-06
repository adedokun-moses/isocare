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
            Add NEW Physician <br />
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
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              class="form-control"
            />
          </div>
          <div class="formgroup mt-3">
            <label>Email</label>
            <input type="email" placeholder="Email" class="form-control" />
          </div>
          <div class="formgroup mt-3">
            <label>Address</label>
            <input type="email" placeholder="Address" class="form-control" />
          </div>

          <div class="formgroup mt-3">
            <label>Status</label>
            <select class="form-control">
              <option>Nurse</option>
              <option>Physician</option>
            </select>
          </div>

          <div class="formgroup mt-3">
            <div class="row">
              <div class="col-6">
                <label>Password</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="col-6">
                <label>Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
          </div>
          <div class="fomrgroup mt-3">
            <div class="row">
              <div class="col-8 mx-auto ">
                <button class="btn btn-success form-control">Submit</button>
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
  setup() {},
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
</style>