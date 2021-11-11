<!-- Found checkbox setup at https://bootstrap-vue.org/docs/components/form-checkbox -->
<template>
<div>
   <!-- Checkbox component that is used as input into the reference field in the client collection
            Checkbox button allows for multiple selections into an array field in client collection 
            When selections are made, the method passEvent() is used-->
  <b-form-group v-slot="{ ariaDescribedby }">
      <small>Check all that apply</small>
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="selected"
        :options="options"
        @change='passEvent'
        :aria-describedby="ariaDescribedby"
        name="flavour-1"
      ></b-form-checkbox-group>
    </b-form-group>

</div>

</template>

<script>
export default{
   el: 'checkRef',
   data()  {
       return {
         //Array to store 1 or more values
       selected: [],
       options: [
          { text: 'Facebook', value: 'Facebook' },
          { text: 'Instagram', value: 'Instagram' },
          { text: 'Twitter', value: 'Twitter' },
          { text: 'Word of Mouth', value: 'Word of Mouth' },
          { text: 'KMAZ 102.5 FM', value: 'KMAZ 102.5 FM' }
       ]
   }
   },
   methods:{
        //Allows selections to be passed to the parent component
    passEvent()
    {
      this.$emit('RefSelections', this.selected)
    }
  } 
}
</script>
