<template>
<div class="row">
 <div class="col-md-2">
 </div>
 <div class="col-md-6">
<form @submit.prevent="handleUpdateForm">
   <div class="form-group">
     <h1>Edit</h1> 
     <h2>{{client.fName}}, {{client.lName}}</h2>
    <label>Distribution</label>
<DistSelected v-bind:distribution_id="client.distribution_id" @changeSelection="changeD($event)" /> 

<label class="font-weight-bold">2. First Name *</label>
<input type="text" class="form-control" v-model="client.fName" required>
<label class="font-weight-bold">3. Last Name *</label>
<input type="text" class="form-control" v-model="client.lName" required>
<label class="font-weight-bold">4. Phone Number *</label>
<input type="tel" class="form-control" pattern="^\d{3}-\d{3}-\d{4}$"
                    placeholder="XXX-XXX-XXXX" aria-describedby="phoneHelpBlock" v-model="client.phoneNumber" >
                    <small id="phoneHelpBlock" class="form-text text-muted">
                            10 digit phone number should be entered with dashes
                    </small>
<br>
<br>
        <label>References</label>
<RefCheckBox v-bind:selected="client.reference" v-model="client.reference" @RefSelections="changeR($event)" />
            
           
            <br>
 
<label class="font-weight-bold">5. Zip Code *</label>
<input type="text" class="form-control" v-model="client.zip" >
<br>



<label class="font-weight-bold">6. Would you like the COVID vaccine on during the distribution? *</label>

<br>
<br>                                                  

<YesNoCheck  v-bind:selected="client.takeVaccine" @YesNoSelection="changeTakeVaccine($event)" />

<br>

<h3> COVID Vaccine Preference </h3>
<br>
<VaccinePref v-bind:selected="client.vaccinePreference" @VacPref="changeVP($event)" />

<br>
<br>

<label class="font-weight-bold">8. Received the COVID vaccine?</label>
<br>
<br>
<YesNoCheck  v-bind:selected="client.vaccineReceived" @YesNoSelection="changeVR($event)" />
    
<br>
<h3>Additional Supportive Services</h3>
<br>

<label class="font-weight-bold"> 9. Additional supportive services (e.g. utility assistance, rental assistance, housing, nutritional support, etc.)? </label>
<br>
<br>
<YesNoCheck v-bind:selected="client.additionalServices" @YesNoSelection="changeAS($event)" />

<br>
<span class="font-weight-bold">Additional Questions</span>
<br>
<br>

<label class="font-weight-bold">10. Number of Children in Houshold *</label>
<input type="number" class="form-control" v-model="client.children" required>
<br>

<label class="font-weight-bold">11. 65+ in age </label>
<br>
<br>
<YesNoCheck v-bind:selected="client.senior"  @YesNoSelection="changeS($emit)" />
<br>

<label class="font-weight-bold"> Veteran? * </label>
<br>
<br>
<YesNoCheck v-bind:selected="client.veteran" @YesNoSelection="changeV($event)" />
<br>
<label class="font-weight-bold">Ethnicity</label>
<br>                                                          
<EthnicityCheck v-bind:checked="client.ethnicity" @EthnicitySelection="changeE($event)"/>

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
                   vaccineReceived: '',
                   additionalServices: '',
                   children: '',
                   senior: '',
                   veteran: '',
                   ethnicity: '',
                }
            }
        },
        created() {
        let apiURL = `http://localhost:3000/client/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.client = res.data;
        })
    },
        methods: {
          changeD(selectedDistribution_id) {
            this.client.distribution_id = selectedDistribution_id;
          },
          changeTakeVaccine(selectedCheck) {
            this.client.takeVaccine = selectedCheck;
          },
          changeE(selected) {
            this.client.ethnicity = selected;
          },
          changeR(selected) {
            this.client.reference = selected;
          },
          changeVP(selected) {
            this.client.vaccinePreference = selected;
          },
          changeVR(selected) {
            this.client.vaccineReceived = selected;
          },
          changeAS(selected) {
            this.client.additionalServices = selected;
          },
          changeS(selected) {
            this.client.senior = selected;
          },
          changeV(selected) {
            this.client.veteran = selected;
          },
          
            handleUpdateForm() {
            let apiURL = `http://localhost:3000/client/${this.$route.params.id}`;

            axios.put(apiURL, this.client).then((res) => {
                console.log(res)
                this.$router.push('/viewClients')
            }).catch(error => {
                console.log(error)
            });
        }
        }
           
    }
</script>