<template>
  <div id="app">
    <h3>Create New Data</h3>
    <FormToGoToServer @on-submit="submit" />
    <h3>Data List</h3>
    <table>
      <thead>
        <tr>
          <th>
            <button type="submit" @click="getDataHorsens">Horsens</button>
          </th>
          <th>
            <button type="submit" @click="getDataCph">Copenhagen</button>
          </th>
          <th>
            <button type="submit" @click="getDataAarhus">Aarhus</button>
          </th>
          <th>
         
          </th>
        </tr>
        <tr>
          <td>{{data.items[data.items.length-3].value}}</td>
          <td>{{ data.items[0].type }}</td>
          <th>{{ data.items[0].unit }}</th>
        </tr>

        <thead>
				<tr>
					<th>Latest Temperature</th>
					<th>Latest Precipitation</th>
					<th>Latest Wind</th>
					<th>Latest Cloud Coverage</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{data.items.latestTemperature}</td>
					<td>{data.historicalData.latestPrecipitation}</td>
					<td>{data.historicalData.latestWind}</td>
					<td>{data.historicalData.latestClouds}</td>
				</tr>
			</tbody>

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
         temperaturesData = [],
        precipitationsData = [],
        windsData = [],
        cloudsData = [],
        items: [
          {
            value: '',
            type: '',
            unit: '',
            time: '',
            place: '',
          },
        ],
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
      axios.get("http://localhost:8080/data/Copenhagen").then((response) => {
        this.data.items = response.data;
        console.log(this.data.items);
        
        
        //FOR LOOP NEEDS TO BE HERE
        if (element.type === "temperature") {
				temperaturesData.push(element);
			} else if (element.type === "precipitation") {
				precipitationsData.push(element);
			} else if (element.type === "wind speed") {
				windsData.push(element);
			} else if (element.type === "cloud coverage") {
				cloudsData.push(element);
			}
      });
    },
    getDataHorsens() {
      axios.get("http://localhost:8080/data/Horsens").then((response) => {
        console.log(response);
        this.data.items = response.data;
      });
    },
    getDataAarhus() {
      axios.get("http://localhost:8080/data/Aarhus").then((response) => {
        this.data.items = response.data;
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
