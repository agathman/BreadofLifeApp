<!-- Found solution at https://bootstrap-vue.org/docs/components/form-checkbox -->
<template>
<div> <label>7. Which COVID vaccine would you prefer to receive? *</label>
<br>
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
    passEvent()
    {
      this.$emit('VacPref', this.selected)
    }
  }
}
</script>
