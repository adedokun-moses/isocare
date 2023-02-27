<template>
  <button @click="openModal()" class="button">Edit</button>
  <!-- The Modal -->
  <div class="modal" id="myModal" v-if="modal == true">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="closeModal()"> &times;</span>
      <form>
        <div class="formgroup">
          <h5 class="m-2">Update Physician Order</h5>
          <select v-model="classification_id" class="form-control">
         
            <option
              v-for="order in allorders.filter((res) => res.id == class_id)"
              :key="order.id"
              selected
              :value="order.id"
            >
              {{ order.classification_name }}
            </option>
            <option
              v-for="order in allorders.filter((res) => res.id != class_id)"
              :key="order.id"
              :value="order.id"
            >
              {{ order.classification_name }}
            </option>
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
  props: ["orders"],
  data() {
    return {
      modal: false,
      order_name: "",
      dose: "",
      frequency: "",
      route: "",
      //classification_id: "",
      message: "Update Classification",
      loader: "",
      classification_name: "",
      id: this.orders.id,
      class_id: "",
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
      this.order_name = this.orders.order_name;
      this.frequency = this.orders.frequency;
      this.route = this.orders.route;
      this.classification_id = this.orders.classification_id;
      this.class_id = this.orders.classification_id;
      this.dose = this.orders.dose;
    },

    addclasification() {
      /*    if (this.classification_name == "") {
        swal({
          title: "Error!",
          text: "Error",
          icon: "error",
        });
        return false;
      } */
      this.message = "Editing...";
      this.loader = "fa fa-spinner fa-spin";
      let params = {
        order_name: this.order_name,
        frequency: this.frequency,
        route: this.route,
        classification_id: this.classification_id,
        dose: this.dose,
        orders_id: this.orders.id,
      };
      this.$store.dispatch("edit_phy", params);
    },
  },

  mounted() {
    this.fetchdetails();
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
  border: none;
  width: 40%;
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
  border-radius: 10px;
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
.formgroup input, .formgroup select{
  box-shadow: none;
  outline: none;
}
</style>



