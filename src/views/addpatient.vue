<template>
  <top />
  <div class="container-fluid text-white new">
    <div class="row">
      <div class="col-sm-12">
        <div class="intro">
          <h5>Isocare Medical Extenders Services, Inc</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            dolores exercitationem necessitatibu
          </p>
          <div class="attendee_det mt-4">
            <h4>
              Attending Physician Details:
              <span class="number"> 080223399003</span>
              <span style="margin-left: 200px"
                >Order: <span class="number"> 080223399003</span></span
              >
            </h4>
            <h4>
              Address:
              <span class="address">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus libero dolorem laboriosam ratione asperiores
                accusamus!</span
              >
            </h4>

            <table class="table text-white table-striped table-bordered">
              <thead>
                <tr>
                  <th colspan="5" style="text-align: center">
                    COMMUNICATION NOTE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="3">
                    Patient Name: Last First <br />
                    Mendoza Jomes
                  </td>
                  <td>Medical Record</td>
                  <td>Medical Record</td>
                </tr>
                <tr>
                  <td colspan="5">Resumtion Order</td>
                </tr>
                <tr>
                  <td colspan="5"></td>
                </tr>

                <tr>
                  <td colspan="5"></td>
                </tr>
                <tr>
                  <td colspan="5"></td>
                </tr>
                <tr>
                  <td colspan="5">New Meds</td>
                </tr>
                <tr>
                  <td colspan="5"></td>
                </tr>
                <tr>
                  <td colspan="5">D.O.B: 02/11/1983</td>
                </tr>
                <tr style="text-align: center" class="signature">
                  <th colspan="2">Visit</th>
                  <th colspan="2">Reported To Supervisor</th>
                  <th rowspan="2" style="text-align: left">
                    Report Received By: <br />
                    <span><h5>Signature</h5></span>
                  </th>
                </tr>
                <tr style="text-align: center">
                  <td>Date</td>
                  <td>Time</td>
                  <td>Date</td>
                  <td>Time</td>
                </tr>
              </tbody>
            </table>
            <div class="carediv d-flex">
              <div>
                <input type="checkbox" name="vehicle1" value="Bike" /> Start of
                care<br />
                <input type="checkbox" name="vehicle1" value="Bike" />Change Of
                Treatment<br />
              </div>
              <div>
                <input type="checkbox" name="vehicle1" value="Bike" /> Start of
                care<br />
                <input type="checkbox" name="vehicle1" value="Bike" />Change Of
                Treatment<br />
              </div>
              <div>
                <input type="checkbox" name="vehicle1" value="Bike" /> Start of
                care<br />
                <input type="checkbox" name="vehicle1" value="Bike" />Change Of
                Treatment<br />
              </div>
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
.new{
  padding: 0px;
  margin: 0px;
}
.intro {
  width: 80%;
  margin: 30px auto;
}
.intro h5 {
  text-align: center;
  font-size: 35px;
}
.intro p {
  text-align: center;
}
.attendee_det h4 {
  padding: 4px 0px;
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
form h6 {
  font-size: 30px;
}
form textarea {
  height: 70px;
}
.formgroup button {
  display: block;
  width: 40%;
  margin: auto;
}

.signature h5 {
  font-size: 15px;
  margin-top: 40px;
  border-top: 2px solid white;
  padding-top: 10px;
}

.carediv > div {
  width: 100%;
}
</style>