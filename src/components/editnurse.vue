<template>
  <button @click="openModal()" class="button">Edit</button>
  <!-- The Modal -->
  <div class="modal" id="myModal" v-if="modal == true">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="closeModal()"> &times;</span>
      <form>
        <div class="formgroup">
          <h5 class="m-3">Update Nurse</h5>
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

        <div class="fomrgroup mt-1">
          <div class="row">
            <div class="col-8 mx-auto p-2">
              <button
                class="btn btn-success form-control"
                @click.prevent="editNurse()"
              >
                <i :class="loader"></i> {{ logmesage }}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import Swal from 'sweetalert2'
export default {
  props: ["user"],
  data() {
    return {
      modal: false,
      // classification_name: "",
      loader: "",
      id: this.user.id,
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      address: "",
      phone_no: "",
      address: "",
      dob: "",
      loader: "",
      logmesage: "Update Physician",
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

    fetchdetails() {
      this.firstname = this.user.firstname;
      this.middlename = this.user.middlename;
      this.lastname = this.user.lastname;
      this.address = this.user.address;
      this.phone_no = this.user.phone_no;
      this.email = this.user.email;
    },


     editNurse() {
      /*  if (this.classification_name == "") {
        Swal.fire({
          title: "Error!",
          text: "Error",
          icon: "error",
        });
        return false;
      }  */
      this.logmesage = "Editing...";
      this.loader = "fa fa-spinner fa-spin";
      let params = {
        firstname: this.firstname,
        lastname: this.lastname,
        middlename: this.middlename,
        email: this.email,
        address: this.address,
        phone_no: this.phone_no,
        nur_id: this.user.id,
      };
      this.$store.dispatch("edit_nurse", params);
    },

  },

  mounted() {
    this.fetchdetails();
  },

  /*   computed:{
      addchannel(){
      return this.$store.state.channelModule.addchannel
      }
  } */
};
</script>

<style scoped>
/* Button   */
.button {
  border: none;
  width: 50%;
  padding: 10px 20px;
  border-radius: 5px;
  background: greenyellow;
  font-weight: bold;
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

.formgroup input:focus,
.formgroup select:focus {
  box-shadow: none;
}
</style>



