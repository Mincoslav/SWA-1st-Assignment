<template>
  <div id="app">
    <h3>Create New Data</h3>
    <FormToGoToServer @on-submit="submit" />
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
        value: "",
        type: "",
        unit: "",
        time: "",
        place: "",
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
      axios
        .get("http://localhost:8080/data/Copenhagen")
        .then(response => {
        this.data = response.data;
      });
    },
    getDataHorsens() {
      axios
        .get("http://localhost:8080/data/Horsens")
        .then(response => {
        this.data = response.data;
      });
    },
    getDataAarhus() {
      axios
        .get("http://localhost:8080/data/Aarhus")
        .then(response => {
        this.data = response.data;
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
