<!-- Found solution at https://bootstrap-vue.org/docs/components/form-checkbox -->
<template>
<div class="checkRef">
<input type="checkbox" class="form-check-input" id="Facebook" value="Facebook" v-model="checkedNames">
<label for="Facebook">Facebook</label>
<input type="checkbox" class="form-check-input" id="Instagram" value="Instagram" v-model="checkedNames">
<label for="Instagram">Instagram</label>
<input type="checkbox" class="form-check-input" id="Twitter" value="Twitter" v-model="checkedNames">
<label for="Twitter">Twitter</label>
<input type="checkbox" class="form-check-input" id="Word of Mouth" value="Word of Mouth" v-model="checkedNames">
<label for="wordofmouth">Word of Mouth</label>
<input type="checkbox" class="form-check-input" id="KMAZ" value="KMAZ" v-model="checkedNames">
<label for="KMAZ">KMAZ 102.5 FM</label>
<br>
</div>

</template>

<script>
export default{
   el: 'checkRef',
   data()  {
       return {
       checkedNames: []
   }
   } 
}
</script>
