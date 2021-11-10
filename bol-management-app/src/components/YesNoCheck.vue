<!-- Found solution at https://bootstrap-vue.org/docs/components/form-checkbox -->
<template>
    
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
    passEvent()
    {
      this.$emit('YesNoSelection', this.selected)
    }
  }
};

</script>
