<template>
  <button @click="openModal()" class="button">Edit</button>
  <!-- The Modal -->
  <div class="modal" id="myModal" v-if="modal == true">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="closeModal()"> &times;</span>
      <form>
        <div class="formgroup">
          <label>Classification Name</label>
          <input
            type="text"
            placeholder="Input Your Name"
            class="form-control"
            v-model="classification_name"
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
      classification_name: "",
      message: "Add Classification",
      loader: "",
      id: this.orders.id
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
      this.classification_name = this.orders.classification_name;
    },

    addclasification() {
      if (this.classification_name == "") {
        swal({
          title: "Error!",
          text: "Error",
          icon: "error",
        });
        return false;
      }
      this.message = "Editing...";
      this.loader = "fa fa-spinner fa-spin";
      let params = {
        classification_name: this.classification_name,
        orders_id: this.orders.id,
      };
      this.$store.dispatch("edit_class", params);
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
  width: 30%;
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
</style>



