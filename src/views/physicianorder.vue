<template>
 
  <div class="container-fluid ">
    <div class="row">
      <div class="col-sm-12 m-0 p-0">
        <top />
      </div>
      <div class="col-sm-2">
        <side />
      </div>
      <div class="col-sm-10 top_nav_bar">
        <div class="intro">
          <h4>Physician Order</h4>
          <span><addphyorder /></span>
        </div>
        <div class="table_container">
          <table class="table  table-borderless mt-4">
            <thead>
              <tr>
                <th> Order Name</th>
                <th>Dose</th>
                <th>Frequency</th>
                <th>Route</th>


                <th colspan="3">
                  <input
                    type="text"
                    class="searchbutton"
                    placeholder="Search Dose With First Name "
                    v-model="search"
                  />
                </th>
              </tr>
            </thead>

            <tbody v-for="orders in sortOrder()" :key="orders.id">
              <tr>
                <td>{{ orders.order_name }}</td>
                <td>{{orders.dose}}</td>
                <td>{{orders.frequency}}</td>
                <td>{{orders.route}}</td>
                <td><editphyorder :orders="orders"/></td>
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
import addphyorder from "@/components/addphyorder.vue";
import editphyorder from '@/components/editphyorder.vue'
export default {
  components: { top, side, addphyorder, editphyorder },
  data() {
    return {
      search: ""
    };
  },
  methods: {
  sortOrder(){
     if (this.search) {
        return this.allorders.filter((data) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => data.order_name.toLowerCase().includes(v));
        });
      } else {
        return this.allorders;
      }
  }
  },

  mounted() {
    this.$store.dispatch("all_phy_orders");
  },
  computed: {
    allorders() {
      return this.$store.state.physicianorderModule.phy_orders;
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
.top_nav_bar{
  background: whitesmoke;
  height: 700px;
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
  width: 90%;
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


.delete{
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
}

/* 


/* 
dropdown    */

.newdrop {
  width: 40%;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  transition: height 0.2s ease;
}

.newdrop li {
  padding: 0px;
  list-style: none;
  margin: 10px;
}
</style>