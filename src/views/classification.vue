<template>

  <div class="container-fluid ">
    <div class="row">
      <div class="col-sm-12 m-o p-0">
        <top />
      </div>
      <div class="col-sm-2">
        <side />
      </div>
      <div class="col-sm-10 top_nav_bar">
        <div class="intro">
          <h4>Classification Order</h4>
          <span><addclass /></span>
        </div>
        <div class="table_container">
          <table class="table  table-borderless mt-4">
            <thead>
              <tr>
                <th>Classification Name</th>

                <th colspan="2">
                  <input
                    type="text"
                    class="searchbutton"
                    placeholder="Search Classification "
                    v-model="search"
                  />
                </th>
              </tr>
            </thead>

            <tbody v-for="orders in filteredList()" :key="orders.id">
              <tr>
                <td>{{ orders.classification_name }}</td>
                <td><edit :orders="orders"/></td>
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
import addclass from "@/components/addclass.vue";
import edit from '@/components/editorder.vue'
export default {
  components: { top, side, addclass, edit },
  data() {
    return {
      search: ""
    };
  },
 
  methods:{
    filteredList() {
      if (this.search) {
        return this.allorders.filter((data) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => data.classification_name.toLowerCase().includes(v));
        });
      } else {
        return this.allorders;
      }
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
.top_nav_bar{
  background: whitesmoke;
 
}

.delete{
   border: none;
  width: 30%;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
}
.delete:hover {
  border: none;
  width: 30%;
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