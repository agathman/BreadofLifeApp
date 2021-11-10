<template>
<div class="row">
 <div class="col-md-2">
 </div>
 <div class="col-md-6">
<form @submit.prevent="handleSubmitForm">
   <div class="form-group">
     <h1>Distribution Sign Up</h1>
    
  <DistSelected v-bind:distribution_id="client.distribution_id" @changeSelection="ChangeT($event)" /> 

    <label class="font-weight-bold">2. First Name *</label>
    <input type="text" class="form-control" v-model="client.fName" required>
    <label class="font-weight-bold">3. Last Name *</label>
    <input type="text" class="form-control" v-model="client.lName" required>
    <label class="font-weight-bold">4. Phone Number *</label>
     <input type="tel" class="form-control" pattern="^\d{3}-\d{3}-\d{4}$"
                    placeholder="XXX-XXX-XXXX" aria-describedby="phoneHelpBlock" v-model="client.phoneNumber" required>
                    <small id="phoneHelpBlock" class="form-text text-muted">
                            10 digit phone number should be entered with dashes
                    </small>
            <br>
            <br>

            <RefCheckBox v-bind:checkedNames="client.reference" />
            
            <small>Check all that apply</small>
            <br>
            <!--
  <div class="form-group form-check">
  <input class="form-check-input" type="checkbox" value="Facebook" id="Facebook" v-model="client.reference">
  <label class="form-check-label" for="Facebook">
      Facebook
  </label>
  </div>
<div class="form-group form-check">
  <input class="form-check-input" type="checkbox" value="Instagram" id="Instagram" v-model="client.reference">
  <label class="form-check-label" for="Instagram">
    Instagram
  </label>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="Twitter" id="flexCheckDefault"  >
  <label class="form-check-label" for="flexCheckChecked">
    Twitter  </label>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="WordOfMouth" id="flexCheckDefault" >
  <label class="form-check-label" for="flexCheckChecked">
    Word of Mouth
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="KMAZ" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckChecked">
    KMAZ 102.5 FM
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Other" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckChecked">
    Other
  </label>
  <input type="text" class="form-control" name="other" v-model="client.reference">
</div>

<label class="font-weight-bold">Zip Code *</label>
<input type="text" class="form-control" v-model="client.zip" required>
<br>
-->

<!-- Formatting needed -->
<label class="font-weight-bold">Would you like the COVID vaccine on during the distribution? *</label>
<br>
<small>During the distribution we will also provide free COVID vaccines on the campus.</small>
<br>
<br>
<YesNoCheck v-bind:selected="client.takeVaccine" @YesNoSelection="yesNo($event)"/>
<!--
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Yes" id="flexCheckDefault" >
  <label class="form-check-label" for="flexCheckChecked">
    Yes <small> Skip to question 7 </small>
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="No" id="flexCheckDefault" >
  <label class="form-check-label" for="flexCheckChecked">
    No <small> Skip to question 8 </small>
  </label>
</div>
-->
  <br>
  <!-- Formatting needed -->
  <h3> COVID Vaccine Preference </h3>
  <br>
  <VaccinePref v-bind:checked="client.vaccinePreference"/>
  <!-- Formatting needed -->
  <small>Skip to question 9</small>
  <br>
  <br>

  <label class="font-weight-bold">8. Have you received the COVID vaccine? *</label>
    <br>
    <br>
    <YesNoCheck v-bind:checked="client.vaccineReceived"/>
    
<br>
<h3>Additional Supportive Services</h3>
<br>

<label class="font-weight-bold"> 9. Are you in need of additional supportive services (e.g. utility assistance, rental assistance, housing, nutritional support, etc.)? * </label>
<br>
<br>
<YesNoCheck v-bind:checked="client.additionalServices" />

<br>
<span class="font-weight-bold">Additional Questions</span>
<br>
<br>

<label class="font-weight-bold">10. Number of Children in Houshold *</label>
<input type="number" class="form-control" v-model="client.children" required>
<br>

<label class="font-weight-bold">11. Are you or anyone in your household 65+ in age? *</label>
<br>
<br>
<YesNoCheck v-bind:checked="client.senior"/>
<br>

<label class="font-weight-bold"> Are you a veteren? * </label>
<br>
<br>
<YesNoCheck v-bind:checked="client.veteran"/>
<br>
<label class="font-weight-bold">Which of the following best describes you? * </label>
<br>
<EthnicityCheck v-bind:checked="client.ethnicity"/>

  <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" :key="error">{{ error }} </li>
                    </ul>
                </p>
                <button class="btn"> Submit </button>
   </div>
</form>
 </div>
</div>
</template>

<script>
    import axios from "axios";
    import RefCheckBox from './RefCheckBox.vue';
    import YesNoCheck from './YesNoCheck.vue';
    import EthnicityCheck from './EthnicityCheck.vue';
    import VaccinePref from './VaccinePref.vue';
    import DistSelected from './DistributionSelector.vue'

    export default {
      components: {
       DistSelected,
       RefCheckBox,
       YesNoCheck,
       EthnicityCheck,
       VaccinePref
      },
        data() {
            return {
                
                errors: [],
                   client: {
                   client_id:'10',
                   distribution_id: '',
                   fName: '',
                   lName: '',
                   phoneNumber: '',
                   reference: '',
                   zip: '',
                   takeVaccine: '',
                   vaccinePreference: '',
                   vaccineReceived: Boolean,
                   additionalServices: Boolean,
                   children: '',
                   senior: Boolean,
                   veteran: Boolean,
                   ethnicity: Boolean,
                }
            }
        },
        methods: {
          ChangeT(selectedDistribution_id) {
            this.client.distribution_id = selectedDistribution_id;
          },
          yesNo(selectedCheck) {
            this.client.takeVaccine = selectedCheck;
          },
            handleSubmitForm() {
                //first validation
                this.errors = [];

                if (!this.client.phoneNumber) {
                    this.errors.push("Phone number required.");
                }
    
                let apiURL = 'http://localhost:3000/client';
                
                axios.post(apiURL, this.client).then(() => {
                    //changing the view to the list
                  this.$router.push('/viewClients')
                  this.client = {
                   client_id: '',
                   distribution_id: '',
                   fName: '',
                   lName: '',
                   phoneNumber: '',
                   reference: '',
                   zip: '',
                   takeVaccine: '',
                   vaccinePreference: '',
                   vaccineReceived:'',
                   additionalServices: '',
                   children: '',
                   senior: '',
                   veteran: '',
                   ethnicity: '',
                  }
                }).catch(error => {
                    this.errors.push("Error in form submission. " + error.response.data);
                    
                });
            }
        }
           
    }
</script>
