<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 m-0 p-0">
        <top />
      </div>
      <div class="col-sm-2">
        <side />
      </div>
      <div class="col-sm-10 top_nav_bar ">
        <div class="intro">
          <h4>Patients Records</h4>
          <button class="button" @click="addpatient">
            <span>Add New Patient</span>
          </button>
        </div>
        <div class="table_container">
          <table class="table table-striped table-borderless mt-4">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Allergies</th>

                <th colspan="3">
                  <input type="text" class="searchbutton" placeholder="Search Patient With First Name "
                    v-model="search" />
                </th>
              </tr>
            </thead>

            <tbody v-for="patient in filteredList()" :key="patient.id">
              <tr>
                <td>{{ patient.firstname }}</td>
                <td>{{ patient.lastname }}</td>
                <td>{{ patient.allergies }}</td>

                <td colspan="3">
                  <button class="managebtn" @click="openDropDown(patient.id)">
                    Manage
                  </button>

                  <ul v-if="openAction == patient.id" class="newdrop">
                    <li>
                      <router-link :to="{ name: 'medprofile', params: { profile_code: patient.profile_code } }">Medical
                        Profile </router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'weeklyflow', params: { profile_code: patient.profile_code } }"> Weekly
                        Treatment </router-link>
                    </li>

                    <li>
                      <router-link :to="{ name: 'mar', params: { profile_code: patient.profile_code } }">MAR</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'weekvent', params: { id: patient.id } }">Ventilator Sheet</router-link>
                    </li>
                  </ul>
                </td>
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
export default {
  components: { top, side },
  data() {
    return {
      openAction: false,
      search: "",
    };
  },
  methods: {
    addpatient() {
      this.$router.push("/patientsign");
    },

    medProf() {
      this.$router.push("/medprofile/" + profile_code);
    },
    openDropDown(id) {
      if (this.openAction == "") {
        return (this.openAction = id);
      }
      return (this.openAction = "");
    },

    filteredList() {
      if (this.search) {
        return this.patients.filter((data) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => data.firstname.toLowerCase().includes(v));
        });
      } else {
        return this.patients;
      }
    },
  },

  mounted() {
    this.$store.dispatch("all_patient");
    this.filteredList();
  },

  computed: {
    patients() {
      return this.$store.state.patientModule.all_patients;
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

/* .intro button {
  font-size: 20px !important;
  background: black;
  color: white;
  outline: none;
}
 */
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

/* 
dropdown    */

.newdrop {
  width: 50%;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  margin-top: 8px;
  transition: height 0.2s ease;
}

.newdrop li {
  padding: 0px;
  list-style: none;
  margin: 10px;
}</style>