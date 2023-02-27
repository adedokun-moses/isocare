<template>
  <nav>
    <ul style="margin-top: 6rem">
      <router-link to="/">
        <li>
          <i class="fas fa-house-medical fa-1x"></i><span class="ml-3">Dashboard</span>
        </li>
      </router-link>
    </ul>
    <ul>
      <router-link to="/patientrec">
        <li>
          <i class="fa-solid fa-user-doctor"></i> <span class="ml-3">Manage Patients</span>
        </li>
      </router-link>
    </ul>

    <!--   <ul style="background: #022567; border-radius: 30px">
      <li style="font-size: 20px; color: white">
        <i class="fa-solid fa-user"></i><span class="ml-3">Patients</span> <i class="fa-solid fa-caret-down ml-4"></i>
      </li>
      <router-link to="/patientrec">
        <li>
          <span class="ml-3">Manage Patients</span>
        </li>
      </router-link>

      <router-link to="@">
        <li>
          <span class="ml-3">Treatment Record</span>
        </li>
      </router-link>
 
      <router-link to="/weekvent">
        <li>
          <span class="ml-3">Ventilaor Flowchart</span>
        </li>
      </router-link> 
    </ul> -->
    <ul>
      <router-link to="/physician">
        <li>
          <i class="fa-solid fa-user-doctor"></i><span class="ml-3">Manage Physicians</span>
        </li>
      </router-link>
    </ul>
    <ul>
      <router-link to="/nurse">
        <li>
          <i class="fa-solid fa-user-nurse"></i><span class="ml-3">Manage Nurses</span>
        </li>
      </router-link>
    </ul>
    <ul>
      <router-link to="/physicianorder">
        <li>
          <i class="fa-solid fa-stethoscope"></i><span class="ml-3">Physician Order</span>

        </li>
      </router-link>
    </ul>
    <ul>
      <router-link to="/classification">
        <li>
          <i class="fa fa-pills"></i><span class="ml-3">Classification Order</span>
        </li>
      </router-link>
    </ul>
    <ul> <router-link to="/vent">
        <li>
          <i class="fa fa-pills"></i><span class="ml-3">Ventilator</span>
        </li>
      </router-link></ul>

    <ul class="mt-5">
      <router-link to="#">
        <li @click="logOut()"><i class="fa fa-sign-in"></i><span class="ml-3">Log Out</span></li>
      </router-link>

    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch("logout");
    },
  }
}
</script>


<style scoped>
nav {
  /*  */
  height: 100vh;
  position: fixed;
  z-index: 1;
  margin: 0px !important;
  padding: 0px !important;
  color: black;
  background: #032d7c;

}

nav ul {
  list-style: none;
  padding: 3px 5px;
}

nav li {
  margin-top: 0px;
  padding: 10px 20px !important;
  font-size: 15px;
  cursor: pointer;
}

nav ul a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 15px;
}

nav a:hover {
  color: #facd66;
  cursor: pointer;
}

nav a.router-link-active,
nav a.router-link-exact-active {
  color: green;
}
</style>
