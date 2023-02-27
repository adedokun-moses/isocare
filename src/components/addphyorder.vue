<template>
  <button @click="openModal()" class="button">
    <i class="fa fa-file mr-2"></i> Add New Order
  </button>
  <!-- The Modal -->
  <div class="modal" id="myModal" v-if="modal == true">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="closeModal()"> &times;</span>
      <form>
        <div class="formgroup">
          <select v-model="classification_id" class="form-control">
            <option  v-for="order in allorders" :key="order.id" :value="order.id" >{{order.classification_name}}</option>
          </select>
        </div>
        <div class="formgroup">
          <label>Order Name</label>
          <input
            type="text"
            placeholder="Input Order Name"
            class="form-control"
            v-model="order_name"
          />
        </div>
        <div class="formgroup">
          <label>Dose</label>
          <input
            type="text"
            placeholder="Input Dose"
            class="form-control"
            v-model="dose"
          />
        </div>
        <div class="formgroup">
          <label>Frequency</label>
          <input
            type="text"
            placeholder="Frequency"
            class="form-control"
            v-model="frequency"
          />
        </div>
        <div class="formgroup">
          <label>Route</label>
          <input
            type="text"
            placeholder="Route"
            class="form-control"
            v-model="route"
          />
        </div>

        <button class="schedule" @click.prevent="addclasification()">
          <i :class="loader"></i> {{ message }}
        </button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      modal: false,
      order_name: "",
      dose: "",
      frequency: "",
      route: "",
      message: "Add Order",
      loader: "",
      classification_id: "",
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

    addclasification() {
      
      if (
        this.ordername == "" ||
        this.frequency == "" ||
        this.route == "" ||
        this.dose == ""
      ) {
        swal({
          title: "Error!",
          text: "All Fields Must Be Filled",
          icon: "error",
        });
        return false;
      }
      this.message = "Adding...";
      this.loader = "fa fa-spinner fa-spin";
      let params = new FormData();
      //  let user_id = JSON.parse(sessionStorage.getItem("user_id"));
      params.append("classification_id", this.classification_id);
      params.append("order_name", this.order_name);
      params.append("dose", this.dose);
      params.append("frequency", this.frequency);
      params.append("route", this.route);
      this.$store.dispatch("add_new_order", params);
    },
  },
  mounted() {
    this.$store.dispatch("all_orders");
  },

  computed: {
    allorders() {
      return this.$store.state.classificationModule.orders;
    },
  },
};
</script>

<style scoped>
/* Button   */
.button {
  background-color: #1c87c9;
  -webkit-border-radius: 60px;
  border-radius: 60px;
  border: none;
  color: #eeeeee;
  cursor: pointer;
  display: inline-block;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: bold;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
}
@keyframes glowing {
  0% {
    background-color: #2ba805;
    box-shadow: 0 0 5px #2ba805;
  }
  50% {
    background-color: #49e819;
    box-shadow: 0 0 20px #49e819;
  }
  100% {
    background-color: #2ba805;
    box-shadow: 0 0 5px #2ba805;
  }
}
.button {
  animation: glowing 1300ms infinite;
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
  background-color:   whitesmoke;
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
  border-radius: 10px;
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
.formgroup input:focus, select:focus {
  box-shadow: none;
  outline: none;
}
 input, select{
  border: none;
  
} 
</style>



