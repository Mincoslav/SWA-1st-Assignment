<template>
  <div id="app">
    <h3>Create New Data</h3>
    <FormToGoToServer @on-submit="submit" />
    <h3>Data List</h3>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>
            <button type="submit" @click="getDataHorsens">Horsens</button>
          </th>
          <th>
            <button type="submit" @click="getDataCph">Copenhagen</button>
          </th>
          <th>
            <button type="submit" @click="getDataAarhus">Aarhus</button>
          </th>
        </tr>
        <tr>
          <th>temperature</th>
          <td>
            {{ data.temperaturesData[data.temperaturesData.length - 1].value }}
          </td>
          <td>
            {{ data.temperaturesData[data.temperaturesData.length - 1].type }}
          </td>
          <td>
            {{ data.temperaturesData[data.temperaturesData.length - 1].unit }}
          </td>
        </tr>
         <tr>
          <th>precipitation</th>
          <td>
            {{ data.precipitationsData[data.precipitationsData.length - 1].value }}
          </td>
          <td>
            {{ data.precipitationsData[data.precipitationsData.length - 1].type }}
          </td>
          <td>
            {{ data.precipitationsData[data.precipitationsData.length - 1].unit }}
          </td>
        </tr>
        <tr>
          <th>wind</th>
          <td>
            {{ data.windsData[data.windsData.length - 1].value }}
          </td>
          <td>
            {{ data.windsData[data.windsData.length - 1].type }}
          </td>
          <td>
            {{ data.windsData[data.windsData.length - 1].unit }}
          </td>
        </tr>
        <tr>
          <th>cloud</th>
          <td>
            {{ data.cloudsData[data.cloudsData.length - 1].value }}
          </td>
          <td>
            {{ data.cloudsData[data.cloudsData.length - 1].type }}
          </td>
          <td>
            {{ data.cloudsData[data.cloudsData.length - 1].unit }}
          </td>
        </tr>

      </thead>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import FormToGoToServer from "./components/FormToGoToServer.vue";
export default {
  name: "App",
  components: {
    FormToGoToServer,
  },
  data() {
    return {
      data: {
        temperaturesData: [{ value: "", type: "", unit: "" }],
        precipitationsData: [{ value: "", type: "", unit: "" }],
        windsData: [{ value: "", type: "", unit: "" }],
        cloudsData: [{ value: "", type: "", unit: "" }],
      },
    };
  },
  methods: {
    submit() {
      axios
        .post("http://localhost:8080/data", this.form)
        .then(function (response) {
          alert(response.statusText);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getDataCph() {
      axios.get("http://localhost:8080/data/Copenhagen").then(response => {
        for (let index = 0; index < response.data.length; index++) {
          if (response.data[index].type === "temperature") {
            this.data.temperaturesData[index] = response.data[index];
          } else if (response.data[index].type === "precipitation") {
            this.data.precipitationsData[index] = response.data[index];
          } else if (response.data[index].type === "wind speed") {
            this.data.windsData[index] = response.data[index];
          } else if (response.data[index].type === "cloud coverage") {
            this.data.cloudsData[index] = response.data[index];
          }
        }
      });
    },
    getDataHorsens() {
      axios.get("http://localhost:8080/data/Horsens").then(response => {
        for (let index = 0; index < response.data.length; index++) {
          if (response.data[index].type === "temperature") {
            this.data.temperaturesData[index] = response.data[index];
          } else if (response.data[index].type === "precipitation") {
            this.data.precipitationsData[index] = response.data[index];
          } else if (response.data[index].type === "wind speed") {
            this.data.windsData[index] = response.data[index];
          } else if (response.data[index].type === "cloud coverage") {
            this.data.cloudsData[index] = response.data[index];
          }
        }
        console.log( this.data.temperaturesData[this.data.temperaturesData.length - 1].value )
      });
    },
    getDataAarhus() {
      axios.get("http://localhost:8080/data/Aarhus").then(response => {
        for (let index = 0; index < response.data.length; index++) {
          if (response.data[index].type === "temperature") {
            this.data.temperaturesData[index] = response.data[index];
          } else if (response.data[index].type === "precipitation") {
            this.data.precipitationsData[index] = response.data[index];
          } else if (response.data[index].type === "wind speed") {
            this.data.windsData[index] = response.data[index];
          } else if (response.data[index].type === "cloud coverage") {
            this.data.cloudsData[index] = response.data[index];
          }
        }
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
