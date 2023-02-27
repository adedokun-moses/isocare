<template>
  <div class="container-fluid ">
    <div class="row">
      <div class="col-sm-12 m-0 p-0">
        <top />
      </div>
      <div class="col-sm-2">
        <side />
      </div>
      <div class="col-sm-10 top_nav_bar ">
        <div class="intro">
          <h4>Nurses Records</h4>

          <button class="button" @click="addphy()">
            <span>Add New Nurse</span>
          </button>
        </div>
        <div class="table_container">
          <table class="table table-striped table-borderless mt-4">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Phone No</th>

                <th colspan="3">
                  <input type="text" class="searchbutton" placeholder="Search Patient With First Name "
                    v-model="search" />
                </th>
              </tr>
            </thead>
            <tbody v-for="user in filteredList()" :key="user.id">
              <tr>
                <td>{{ user.firstname }}</td>
                <td>{{ user.lastname }}</td>
                <td>{{ user.address }}</td>
                <td>{{ user.phone_no }}</td>
                <td>
                  <edit :user="user" />
                </td>
                <td><button class="delete">Delete</button></td>


              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import top from "@/components/topnav.vue";
import side from "@/components/side.vue";
import edit from "@/components/editnurse.vue"
export default {
  components: { top, side, edit },
  data() {
    return {
      search: ""
    };
  },

  methods: {
    addphy() {
      this.$router.push("/addnurse");
    },
    filteredList() {
      if (this.search) {
        return this.all_nurses.filter((data) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => data.firstname.toLowerCase().includes(v));
        });
      } else {
        return this.all_nurses;
      }
    },
  },
  mounted() {
    this.$store.dispatch("all_nurses");
  },
  computed: {
    all_nurses() {
      return this.$store.state.nurseModule.all_nurses;
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
  width: 100%;
  margin: 20px auto;
  margin-top: 7rem;
}

.intro h5,
.intro h4 {
  text-align: center;
  font-size: 35px;
  font-weight: bolder;
}

.intro button {
  font-size: 20px !important;
  background: black;
  color: white;
  outline: none;
}

.intro p {
  text-align: center;
}

.searchbutton {
  width: 93%;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  border: 2px solid black;
}

.managebtn {
  width: 50%;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  border: none;
}

.top_nav_bar {
  background: whitesmoke;
  height: 100vh;
}

.table_container {
  width: 90%;
  margin: auto;
}

/* .table button {
  border: none;
  padding: 10px;
  border-radius: 5px;
}
 */
/* 
Button   */
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

.delete {
  border: none;
  width: 50%;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
}

.delete:hover {
  border: none;
  width: 50%;
  padding: 10px 20px;
  border-radius: 5px;
  background: red;
  font-weight: bold;
}</style>