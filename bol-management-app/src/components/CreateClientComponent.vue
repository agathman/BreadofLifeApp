<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Client</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Client ID</label>
                    <input type="text" class="form-control" v-model="client.client_id" required>
                </div>

                <div class="form-group">
                    <label>Distribution ID</label>
                    <input type="text" class="form-control" v-model="client.distribution_id" required>
                </div>

                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="client.fName" required>
                </div>

                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="client.lName" required>
                </div>

                <div class="form-group">
                    <label>Reference</label>
                    <input type="text" class="form-control" v-model="client.reference" required>
                </div>

                <div class="form-group">
                    <label>Zip</label>
                    <input type="text" class="form-control" v-model="client.zip" required>
                </div>

                <div class="form-group">
                    <label>Take Vaccine</label>
                    <input type="text" class="form-control" v-model="client.takeVaccine" required>
                </div>

                <div class="form-group">
                    <label>Vaccine Preference</label>
                    <input type="text" class="form-control" v-model="client.vaccinePreference" required>
                </div>

                <div class="form-group">
                    <label>Vaccine Preference</label>
                    <input type="text" class="form-control" v-model="client.vaccinePreference" required>
                </div>

                <div class="form-group">
                    <label>Previous Vaccine</label>
                    <input type="text" class="form-control" v-model="client.vaccineReceived" required>
                </div>

                <div class="form-group">
                    <label>Additional Services</label>
                    <input type="text" class="form-control" v-model="client.additionalServices" required>
                </div>

                <div class="form-group">
                    <label>Children</label>
                    <input type="text" class="form-control" v-model="client.children" required>
                </div>

                <div class="form-group">
                    <label>Senior</label>
                    <input type="text" class="form-control" v-model="client.senior" required>
                </div>

                <div class="form-group">
                    <label>Veteran</label>
                    <input type="text" class="form-control" v-model="client.veteran" required>
                </div>

                <div class="form-group">
                    <label>Ethnicity</label>
                    <input type="text" class="form-control" v-model="client.ethnicity" required>
                </div>

                <button class="btn btn-danger mt-3">Create</button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                errors: [],
                client: {
                   client_id: '',
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
                   ethnicity: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                this.errors = [];
    
                let apiURL = 'http://localhost:3000/client';
                
                axios.post(apiURL, this.client).then(() => {
                    //changing the view to the list
                  this.$router.push('/viewClient')
                  this.client = {
                    distribution_id: '',
                    reliefType: '',
                    reliefDate: '',
                    location: '',
                    zip: ''
                  }
                }).catch(error => {
                    this.errors.push("Error in form submission. " + error.response.data);
                    
                });
            }
        }
           
    }
</script>