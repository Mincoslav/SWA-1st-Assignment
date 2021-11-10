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
            <input type="Date" name="time" v-bind="date"/>
          </th>
        </tr>
        <tr>
          <th>{{ data.items.value }}</th>
          <th>{{ data.items.type }}</th>
          <th>{{ data.items.unit }}</th>
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
        items: [
          {
            value: null,
            type: null,
            unit: null,
            time: null,
            place: null,
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
        this.data.items = response.data.bpi;
      });
    },
    getDataHorsens() {
      axios.get("http://localhost:8080/data/Horsens").then((response) => {
        console.log(response);
        this.data = response.data.bpi;
      });
    },
    getDataAarhus() {
      axios.get("http://localhost:8080/data/Aarhus").then((response) => {
        this.data = response.data.bpi;
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
