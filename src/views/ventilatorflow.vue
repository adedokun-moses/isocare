<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 m-0 p-0">
        <top class="main_top" />
      </div>
      <div class="col-sm-2">
        <side class="side" />
      </div>
      <div class="col-sm-10 top_nav_bar">
        <div class="intro">
          <h5>Isocare Medical Extenders</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            dolores exercitationem necessitatibus
          </p>
          <h5>Weekly Ventilator Flowchart</h5>
        </div>

        <table class="table  table-striped mt-4 table-bordered">
          <tbody>
            <tr>
              <th>Date</th>
              <td v-for="day in getDate()" :key="day.toLocaleDateString()">{{ day.toLocaleDateString() }}</td>
          
            </tr>
            <tr v-for="vent_det in userVentDet" :key="vent_det.id">
              <th>{{ vent_det.ventilator_name }}</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          
            </tr>

          </tbody>
        </table>

        <table class="table  table-bordered   mt-4">
          <thead class="table_head ">
            <th>Nurses Initial/Signature</th>
            <th>Nurses Initial/Signature</th>
            <th>Nurses Initial/Signature</th>
          </thead>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>

        <div class="client_det">
          <h5>Client Name: ________________________________ <span style="margin-left: 50px;">MR: 500988</span>
          </h5>
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
      id: this.$route.params.id,
      weekdate: ""
    }
  },

  methods: {
    getDate() {
      // Create a new date object for today's date
      const today = new Date();
      // Calculate the date of the previous Sunday
      const sunday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());

      // Loop through the days of the week (Sunday to Saturday) and output the date for each day
      const daysArray = [];
      for (let i = 0; i < 7; i++) {
        const date = new Date(sunday.getFullYear(), sunday.getMonth(), sunday.getDate() + i);
        console.log(date.toLocaleDateString());
        daysArray.push(date);
          //this.weekdate = date.toLocaleDateString()
      }
      return daysArray;


    },

 
  },
  mounted() {
    this.$store.dispatch('all_vent')
    this.getDate()
  },
  computed: {
    userVentDet() {
      return this.$store.state.ventModule.all_vent
    }
  }
};
</script>

<style scoped>
.intro {
  width: 80%;
  margin: 20px auto;
  margin-top: 4rem;
}

.intro h5 {
  text-align: center;
  font-size: 35px;
}

.intro p {
  text-align: center;
}

.table_head th {
  text-align: center;
  border: 0px solid black;
}

.top_nav_bar {
  background: whitesmoke;
}

.table tr {
  border: 2px solid black;
}

.table-bordered td {
  border: 2px solid black;
}</style>