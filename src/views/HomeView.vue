<template>
  <div class="main">
    <div class="container-fluid">
      <div class="form_container">
        <div class="row">
          <div class="col-sm-6 logo">
            <h5>IsoCare</h5>
          </div>
          <div class="col-sm-6 log">
            <form>
              <div class="form-group mt-3">
                <input type="text" placeholder="Email" v-model="email" />
              </div>

              <div class="form-group mt-4">
                <input type="text" placeholder="Password" v-model="password" />
              </div>
              <div class="form-group mt-4">
                <button @click.prevent="logIN()" class="btn btn-success">
                  <i :class="loader"></i> {{ msg }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      msg: "Log In",
      email: "",
      password: "",
      loader: ""
    };
  },
  methods: {
     logIN(){
          if (this.email == "") {
       Swal.fire({
                        title: "ERROR!",
                        text: "Email can not be empty, input your mail",
                        icon: "error",
                    });
        return false;
      }
      if (this.password == "") {
        Swal.fire({
                        title: "ERROR!",
                        text: "Password can not be empty, input your mail",
                        icon: "error",
                    });
        return false;
      }
      this.msg = "Loading...";
      this.loader = "fa fa-spinner fa-spin";
      var params = new FormData();
      params.append("email", this.email);
      params.append("password", this.password);
      this.$store.commit("LOG_IN", params);
    },
  },
};
</script>

<style scoped>
.main {
  background: url(../assets/walpaper.jpg);
  background-size: cover;
  height: 100vh;
  color: white;
}
.form_container {
  width: 80%;
  margin: auto;

}
.log {
 
  margin-top: 10rem;
}
.logo {
  border-right: 2px solid black;
  margin-top: 10rem;
}
.logo h5 {
  font-size: 40px;
  margin: 40px 100px;
}
.form-group {
  width: 80%;
  margin: auto;
}
.form-group input {
  border: 2px solid black;
  color: white;
  background: rgb(70, 67, 67);
  outline: none;
  width: 100%;
  padding: 10px 10px;
  margin: auto;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.form-group input:focus {
  border: 2px solid green;
}
.btn {
  width: 100%;
}
</style>
