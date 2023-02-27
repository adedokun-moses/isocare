<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 top_nav" >
        <div class="row">
          <div class="col-sm-2 top">
            <h5 >
              <router-link to="/" style="font-weight: bold; font-size: 25px">
                ISO-CARE </router-link
              ><i class="fa fa-refresh ml-5 refresh" @click="refresh()" ></i>
            </h5>
          </div>
          <div class="col-sm-7">
            <img src="../assets/user.png" />
            <span class="ml-3">{{nurse_det.firstname}} {{nurse_det.lastname}}</span>
            <i class="fa fa-bell fa-2x ml-4"></i>
          </div>
          <div class="col-sm-3 settings" id="changecolor">
            <i class="fa fa-search iconnameleft"></i>
            <input type="text" placeholder="Search Anything" />
            <i class="fa fa-cog ml-1"></i>
      
          </div>
        </div>

        <!--  <h4>
          Welcome Moses
          <span class="float-right" style="font-size: 15px"
            >{{ latestTime }} <span class="profile">MO</span></span
          >
        </h4> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      latestTime: "",

    };
  },

  methods: {
    New_date() {
      const date = new Date().toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      this.latestTime = date;
    },

    refresh(){
      window.location.reload();
    }

  /*   change() {
     document.getElementById('changecolor').style.backgroundColor = 'red';
      //document.body.style.backgroundColor = "red";
    }, */
  },

  mounted() {
    this.New_date();
    
    this.$store.dispatch("nur_det");
  },
  computed:{
    nurse_det(){
      return this.$store.state.nurseModule.nurse
    }
  }
};
</script>

<style scoped>
button {
  padding: 10px 30px;
  border-radius: 10px;
  outline: none;
  border: none;
  color: black;
  background: purple;
  font-weight: bolder;
  margin-bottom: 7px;
}
.top_nav {
  position: fixed;
  z-index: 5;
  width: 100%;
  padding: 10px !important;
  margin: 0px !important;
  background: white !important;
  box-shadow: 0 0 10px rgb(236, 234, 234);
}
.refresh{
 cursor: pointer;
}
/* .top_nav > div{
  padding: 0px;
  margin: 0px;
 
}  */
.profile {
  padding: 15px 15px;
  border-radius: 40px;
  border: 3px solid rgba(0, 0, 0, 0.633);
}
.search {
  position: absolute;
  left: 10;
  top: 15;
}
.settings {
  position: relative;
}
.settings input {
  padding: 5px 40px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  width: 93%;
  outline: none;
}


.inputleft {
  padding-left: 35px;
  height: 2em;
  width: 30em;
  border: 2px solid #acacac;
  border-radius: 0.5em;
  font-size: 1em;
}

.iconnameleft {
  position: relative;
  font-size: 1.3em;
  z-index: 1;
  left: 10px;
  top: 1px;
  color: #7b7b7b;
  cursor: pointer;
  width: 0;
}
</style>