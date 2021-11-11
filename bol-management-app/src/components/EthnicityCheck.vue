
<template>

      <!-- Radio button component that is used as input into ethnicity field in the client collection
            Radio button only allows for one input
            When selection is made, the method passEvent() is used-->
   <div class="form-check">
     <input type="radio" class="form-check-input" id="one" value="Asian or Pacific Islander" v-model="picked" @change='passEvent'>
    <label for="one">Asian or Pacific Islander</label>
<br>
    <input type="radio" class="form-check-input" id="two" value="Black or African American" v-model="picked" @change='passEvent'>
    <label for="two">Black or African American</label>   
<br>
     <input type="radio" class="form-check-input" id="three" value="Hispanic or Latino" v-model="picked" @change='passEvent'>
    <label for="one">Hispanic or Latino</label>
<br>
    <input type="radio" class="form-check-input" id="four" value="White or Caucasian" v-model="picked" @change='passEvent'>
    <label for="two">White or Caucasian</label>  
<br>
      <input type="radio" class="form-check-input" id="four" value="Multiracial or Biracial" v-model="picked" @change='passEvent'>
    <label for="two">Multiracial or Biracial</label>  
<br>
      <input type="radio" class="form-check-input" id="four" value="A race/ethnicity not listed here" v-model="picked" @change='passEvent'>
    <label for="two">A race/ethnicity not listed here</label>  

   </div>
</template>

<script>
export default{
    data() {
        return {
            picked: '',
        }
    },
       methods:{
 //Allows selection to be passed to the parent component
    passEvent()
    {
      this.$emit('EthnicitySelection', this.picked)
    }
  }
}
</script>
