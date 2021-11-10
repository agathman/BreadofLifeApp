<!-- Found solution at https://bootstrap-vue.org/docs/components/form-checkbox -->
<template>
    <div>
        <small>Mark only one box.</small>
        <b-form-group >
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
                {text: 'Moderna', value: 'Moderna'},
                {text: 'Pfizer', value: 'Pfizer'},
            ]
        }
    }
}
</script>
