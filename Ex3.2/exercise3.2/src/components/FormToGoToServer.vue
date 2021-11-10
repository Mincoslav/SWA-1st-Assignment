<template>
  <form @submit.prevent="$emit('on-submit', form)">

    <div class="form-group">
      <label for="value">value </label>
      <input type="number" name="value" v-model="form.value" />
    </div>
     <div class="form-group">
      <label for="type">type </label>
      <input type="text" name="type" v-model="form.type" />
    </div>
     <div class="form-group">
      <label for="unit">unit </label>
      <input type="text" name="unit" v-model="form.unit" />
    </div>
    <div class="form-group">
      <label for="time">time </label>
      <input type="Date" name="time" v-model="form.time" />
    </div>

    <div class="form-group">
      <label for="place">place</label>
      <input type="text" name="place" v-model="form.place" />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>
<script>
//import axios from 'axios';
export default {
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      form: {
        value: this.data?.value || "",
        type: this.data?.type || "",
        unit: this.data?.unit || "",
        time: this.data?.time || "",
        place: this.data?.place || "",
      },
    };
  },
};
</script>