<template>
      <!-- Radio button component that is used multiple times as input into different fields in the client collection
            Radio button only allows for one input (Yes/No) 
            When selection is made, the method passEvent() is used-->
     <div class="form-check">
     <input type="radio" class="form-check-input" id="one" value="Yes" v-model="selected" @change='passEvent'>
    <label for="one">Yes</label>
<br>
    <input type="radio" class="form-check-input" id="two" value="No" v-model="selected" @change='passEvent'>
    <label for="two">No</label>  
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
      this.$emit('YesNoSelection', this.selected)
    }
  }
};

</script>
