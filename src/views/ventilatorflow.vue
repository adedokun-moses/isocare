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
          <h5>Weekly Ventilator Flowchart</h5>
        </div>

        <table class="table text-white table-striped mt-4 table-bordered">
          <tbody>
            <tr>
              <th>Date</th>
              <td>John</td>
              <td>N</td>
              <td>john@example.com</td>
              <td>john@example.com</td>
              <td>11: 02: 2020</td>
            </tr>
            <tr>
              <th>Shift</th>
              <td>Mary</td>
              <td>C</td>
              <td>mary@example.com</td>
              <td>john@example.com</td>
              <td>11: 02: 2020</td>
            </tr>
            <tr>
              <th>Mode</th>
              <td>July</td>
              <td>U</td>
              <td>july@example.com</td>
              <td>john@example.com</td>
              <td>11: 02: 2020</td>
            </tr>
            <tr>
              <th>Volume</th>
              <td>July</td>
              <td>U</td>
              <td>july@example.com</td>
              <td>john@example.com</td>
              <td>11: 02: 2020</td>
            </tr>
            <tr>
              <th>BPM Rate Machine</th>
              <td>July</td>
              <td>U</td>
              <td>july@example.com</td>
              <td>john@example.com</td>
              <td>11: 02: 2020</td>
            </tr>
            <tr>
              <th>Peakaway Pressure</th>
              <td>July</td>
              <td>U</td>
              <td>july@example.com</td>
              <td>john@example.com</td>
              <td>11: 02: 2020</td>
            </tr>

            <tr>
              <th>Peakaway Pressure</th>
              <td>July</td>
              <td>U</td>
              <td>july@example.com</td>
              <td>john@example.com</td>
              <td>11: 02: 2020</td>
            </tr>
            <tr>
              <th>Peakaway Pressure</th>
              <td>July</td>
              <td>U</td>
              <td>july@example.com</td>
              <td>john@example.com</td>
              <td>11: 02: 2020</td>
            </tr>
            <tr>
              <th>I Time</th>
              <td>July</td>
              <td>U</td>
              <td>july@example.com</td>
              <td>john@example.com</td>
              <td>11: 02: 2020</td>
            </tr>
            <tr>
              <th>High Pressure Alarm</th>
              <td>July</td>
              <td>U</td>
              <td>july@example.com</td>
              <td>john@example.com</td>
              <td>11: 02: 2020</td>
            </tr>
            <tr>
              <th>High Pressure Alerm Audible</th>
              <td>July</td>
              <td>U</td>
              <td>july@example.com</td>
              <td>john@example.com</td>
              <td>11: 02: 2020</td>
            </tr>
            <tr>
              <th>Low Pressure Alerm</th>
              <td>July</td>
              <td>U</td>
              <td>july@example.com</td>
              <td>john@example.com</td>
              <td>11: 02: 2020</td>
            </tr>
            <tr>
              <th>Low Pressure Alerm Audible</th>
              <td>July</td>
              <td>U</td>
              <td>july@example.com</td>
              <td>john@example.com</td>
              <td>11: 02: 2020</td>
            </tr>
            <tr>
              <th>Sensitivity (If Audible)</th>
              <td>July</td>
              <td>U</td>
              <td>july@example.com</td>
              <td>john@example.com</td>
              <td>11: 02: 2020</td>
            </tr>
            <tr>
              <th>Power Source</th>
              <td>July</td>
              <td>U</td>
              <td>july@example.com</td>
              <td>john@example.com</td>
              <td>11: 02: 2020</td>
            </tr>
          </tbody>
        </table>

        <table class="table text-white table-striped mt-4 table-bordered">
            <tr class="table_head">
                <th>Nurses Initial/Signature</th>
                <th>Nurses Initial/Signature</th>
                <th>Nurses Initial/Signature</th>
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
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
.table_head th{
    text-align: center;
}
</style>