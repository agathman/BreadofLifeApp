<!-- Found solution at https://bootstrap-vue.org/docs/components/form-checkbox -->
<template>
    <div>
        <small>Check only one box</small>
        <b-form-group>
        <b-form-checkbox-group
        id="checkboxRef"
        v-model="selected"
        :options="options"
        >
        </b-form-checkbox-group>
        </b-form-group>
    </div>

</template>

<script>
export default{
    data() {
        return {
            selected: [],
            options: [
                {text: 'Asian or Pacific Islander', value: 'Asian or Pacific Islander'},
                {text: 'Black or African American', value: 'Black or African American'},
                {text: 'Hispanic or Latino', value: 'Hispanic or Latino'},
                {text: 'Native American or Alaskan Native', value: 'Native American or Alaskan Native'},
                {text: 'White or Caucasian', value: 'White or Caucasian'},
                {text: 'Multiracial or Biracial', value: 'Multiracial or Biracial'},
                {text: 'A race/ethnicity not listed here', value: 'A race/ethnicity not listed here'}
            ]
        }
    }
}
</script>
