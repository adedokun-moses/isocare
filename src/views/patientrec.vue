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
          <h5>All Records</h5>
        </div>
        <div class="table_container">
          <table class="table text-white table-striped table-borderless mt-4">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Patient Name</th>
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
            <tbody v-for="user in users" :key="user.id">
              <tr>
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.regdate}}</td>
                <td>{{user.lastvisit}}</td>

                 <td colspan="3" ><router-link :to="{ name: 'record', params:{ id: user.id} }"><button   class="managebtn" >Manage</button></router-link></td>
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
export default {
  components: { top },
  data(){
    return{
      users:[{
          id: "001",
          name: "Moses",
          regdate: "11-02-2022",
          lastvisit: "22-03-2022"

      },
      {
          id: "002",
          name: "Moses_NAME",
          regdate: "11-02-2022",
          lastvisit: "22-03-2022"
      
      },
      {
          id: "003",
          name: "Moses",
          regdate: "11-02-2022",
          lastvisit: "22-03-2022"

      },
      
      
      
      
      
      ]
    }
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

.searchbutton {
  width: 93%;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  border: none;
}
.managebtn{
   width: 50%;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  border: none;
}

.table button {
  border: none;
  padding: 10px;
  border-radius: 5px;
}
</style>