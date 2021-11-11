<template>
<div class="form-group">
    <div id="v-model-select">
    <select class="form-control" v-model="distribution_id" @change='passEvent' required>
    <option disabled value="" >Please select an option</option> 
      <option v-for="distribution in Distribution" :key="distribution._id" :value="distribution.distribution_id">
        {{distribution.reliefType}},{{distribution.reliefDate}},{{distribution.location}}</option>
    
    </select>
</div>
</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Distribution: [],
      selected: "",
      distribution_id: '',
    };
  },
  created() {

    let apiURL = `http://localhost:3000/distributions`;

    axios.get(apiURL).then((res) => {
      this.Distribution = res.data;
    });
  },
  methods:{
    passEvent()
    {
      this.$emit('changeSelection', this.distribution_id)
    }
  }
};
</script>
