
<template>
<div> <label>7. Which COVID vaccine would you prefer to receive? *</label>
<br>
 <!-- Radio button component that is used multiple times as input into different fields in the client collection
            Radio button only allows for one input (Moderna/Pfizer) 
            When selection is made, the method passEvent() is used-->
          <small>Mark only one</small>
      <div class="form-check">
         
     <input type="radio" class="form-check-input" id="one" value="Moderna" v-model="selected" @change='passEvent'>
    <label for="one">Moderna</label>
<br>
    <input type="radio" class="form-check-input" id="two" value="Pfizer" v-model="selected" @change='passEvent'>
    <label for="two">Pfizer</label>  
   </div>
</div>
</template>

<script>
export default{
    data() {
        return {
            selected: '',
           
        }
    },
     methods:{
        //Allows selection to be passed to the parent component
    passEvent()
    {
      this.$emit('VacPref', this.selected)
    }
  }
}
</script>
