<template>
  <div class="container-fluid">
    <div class="form_container ">
      <div class="row">
        <div class="col-sm-6 logo">
          <h5>  IsoCare</h5>
          
        </div>
        <div class="col-sm-6">
          <form>
            <div class="form-group mt-3" >
              <input type="text"  placeholder="Email">
            </div>

             <div class="form-group mt-4" >
              <input type="text" placeholder="Password">
            </div>
            <div class="form-group mt-4">
                <button @click.prevent="submitFile()" class="btn btn-success"><i :class="loader"></i> {{ msg }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg: "Log In"
    }
  },
methods:{
    submitFile() {
        this.msg = "Loading...";
        this.loader = "fa fa-spinner fa-spin"; 
        this.$router.push('/dash')

     
    },
}
};

</script>

<style scoped>
.form_container{
  width: 80%;
  background: rgb(70, 67, 67);
  margin: 10rem auto;
  padding: 30px;
  
}
.logo{
 border-right: 2px solid black;
}
.logo h5{
  font-size: 40px;
  margin: 40px 100px;
 
}
.form-group {
  width: 80%;
  margin: auto;
}
.form-group input{
  border: 2px solid black;
  color: white;
  background: rgb(70, 67, 67);
    outline: none;
  width: 100%;
  padding: 10px 10px;
  margin: auto;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.form-group input:focus{
  border: 2px solid green;
}
.btn{
  width: 100%;
}
</style>
