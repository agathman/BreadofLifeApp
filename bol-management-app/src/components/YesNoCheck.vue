<!-- Found solution at https://bootstrap-vue.org/docs/components/form-checkbox -->
<template>
    <div>
        <small>Mark only one box.</small>
        <b-form-group >
        <b-form-checkbox-group 
        id="checkboxRef"
        v-model="selected"
        @change='passEvent'
        >
         <b-form-checkbox value="Yes">Yes</b-form-checkbox>
        <b-form-checkbox value="No">No</b-form-checkbox>
        </b-form-checkbox-group>
        </b-form-group>
    </div>

</template>

<script>
export default{
    data() {
        return {
            selected: [],
        }
        
    },
     methods:{
    passEvent()
    {
      this.$emit('YesNoSelection', this.selected[0])
    }
  }
};

</script>
