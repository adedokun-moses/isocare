<template>
  <div class="container-fluid text-white">
    <div class="row">
      <div class="col-sm-12">
        <top />
      </div>
      <div class="col-sm-12">
        <div class="intro">
          <h5>Isocare Medical Extenders Services, Inc</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            dolores exercitationem necessitatibus, minus eveniet aut excepturi
            modi fuga
          </p>
          <div class="attendee_det mt-4">
            <h4>Medication Profile</h4>
            <div class="patient_det">
              <div>
                <h3>Patient Name: Franklin</h3>
                <h3>Allegries:</h3>
              </div>
              <div>
                <h3>Physician Name: Franklin Omolola</h3>
              </div>
            </div>
            <table class="table text-white table-striped mt-4 table-bordered">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>NCU</th>
                  <th>Nme, Dose, Frequency, Route</th>
                  <th>Classification</th>
                  <th>Date DC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John</td>
                  <td>N</td>
                  <td>john@example.com</td>
                  <td>john@example.com</td>
                  <td>11: 02: 2020</td>
                </tr>
                <tr>
                  <td>Mary</td>
                  <td>C</td>
                  <td>mary@example.com</td>
                  <td>john@example.com</td>
                  <td>11: 02: 2020</td>
                </tr>
                <tr>
                  <td>July</td>
                  <td>U</td>
                  <td>july@example.com</td>
                  <td>john@example.com</td>
                  <td>11: 02: 2020</td>
                </tr>
              </tbody>
            </table>

            <div class="description mt-5">
              <h5>N: New (Within 30 Days)</h5>
              <h5>C: Changed (Within 30 Days)</h5>
              <h5>U: Unchanged</h5>
            </div>
            <div class="signature text-center">
                <h6>Professional Signature </h6>  
                <h6>Date </h6>  
            </div>
          </div>
        </div>
        <form></form>
      </div>
    </div>
  </div>
</template>
<script>
import top from "@/components/topnav.vue";
export default {
  components: { top },
  setup() {},
};
</script>

<style scoped>
body::-webkit-scrollbar {
  display: none;
}

.intro {
  width: 80%;
  margin: 30px auto;
}
.intro h5 {
  text-align: center;
  font-size: 35px;
}
.attendee_det h4 {
  padding: 4px 0px;
  text-align: center;
}
.number {
  padding: 0px 30px;
  border-bottom: 2px dotted red;
}
.address {
  padding: 0px 30px;
  border-bottom: 2px dotted red;
  font-size: 15px;
}
.patient_det {
  display: flex;
  justify-content: space-between;
}
.patient_det h3 {
  font-size: 15px;
}
.description h5 {
  text-align: left;
  font-size: 15px;
}
.signature h6{
  
    display: inline-block;
    border-top: 2px dotted grey;
    padding: 10px 0px;
    margin: 0px 10px;
}
</style>