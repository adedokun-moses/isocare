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
          <h5>Moses Records</h5>
        </div>
        <div class="table_container">
          <div>
            <h5>Patient First Name<br> <p>Ajayi Oyindamola</p> </h5>
            <h5>Patient Last Name <p>Ajayi Oyindamola</p></h5>
                <h5>Ailment  <p>Malaria</p></h5>
                  <h5>Allegry  <p>None</p></h5>
            <h5>Registration Date: <p>18-02-2022</p></h5>
            <h5>Last Visit <span style="font-size: 15px"><p>19-07-2054</p></span></h5>
          </div>
          <div>
            <div class="row">
              <div class="col-sm-12">
           
                <button>Medication Profile</button>
              </div>
              <div class="col-sm-12">
                <button>Weekly Flowchart</button>
              </div>

              <div class="col-sm-12">
                <button>Medical Records</button>
              </div>
            </div>
          </div>

          <!--   <table class="table text-white table-striped table-borderless mt-4">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Patient First Name</th>
                <th>Patient Last Name</th>
                <th>Registration Date</th>
                <th>Last Visit</th>
                <th colspan="3">
                  <input
                    type="text"
                    class="searchbutton"
                    placeholder="Search Patient With First Name "
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>002</td>
                <td>Mike Adenuga</td>
                <td>Mike Otedola</td>
                <td>18:02:2022</td>
                <td>18:02:2023</td>
                <td>
                  <router-link to="/medprofile"
                    ><button class="">Medication Profile</button></router-link
                  >
                </td>
                <td><button>Weekly Flowchart</button></td>
                <td><button>Medical Records</button></td>
              </tr>
              <tr>
                <td>002</td>
                <td>Mike Adenuga</td>
                <td>Mike Otedola</td>
                <td>18:02:2022</td>
                <td>18:02:2023</td>
                <td><button class="">Medication Profile</button></td>
                <td><button>Weekly Flowchart</button></td>
                <td><button>Medical Records</button></td>
              </tr>
              <tr>
                <td>{{id}}</td>
                <td>Mike Adenuga</td>
                <td>Mike Otedola</td>
                <td>18:02:2022</td>
                <td>18:02:2023</td>
                <td><button class="">Medication Profile</button></td>
                <td><button>Weekly Flowchart</button></td>
                <td><button>Medical Records</button></td>
              </tr>
            </tbody>
          </table> -->
        </div>
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
      id: this.$route.params.id,
    };
  },
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
.table_container {
  display: flex;
  width: 70%;
  margin: auto;
}
.table_container > div {
  width: 100%;
}
.searchbutton {
  width: 93%;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  border: none;
}

button {
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  width: 70%;
}
</style>