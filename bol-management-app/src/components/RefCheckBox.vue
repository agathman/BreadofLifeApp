<!-- Found solution at https://bootstrap-vue.org/docs/components/form-checkbox -->
<template>
<div>
  <b-form-group label="4. How did you hear about our distribution?" v-slot="{ ariaDescribedby }">
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
    passEvent()
    {
      this.$emit('RefSelections', this.selected)
    }
  } 
}
</script>
