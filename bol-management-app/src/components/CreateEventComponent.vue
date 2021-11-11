<!-- HTML template for create event -->
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Event</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Distribution ID</label>
                    <input type="text" class="form-control" v-model="distribution.distribution_id" required>
                </div>
                <div class="form-group">
                    <label>Type</label>
                    <input type="text" class="form-control" v-model="distribution.reliefType" required>
                </div>

                <div class="form-group">
                    <label>Date</label>
                    <input type="text" class="form-control" v-model="distribution.reliefDate">
                </div>

                <div class="form-group">
                    <label>Location</label>
                    <input type="text" class="form-control" v-model="distribution.location" required>
                </div>

                <div class="form-group">
                    <label>Zip</label>
                    <input type="text" class="form-control" v-model="distribution.zip" required>
                </div>

                <button class="btn btn-danger mt-3">Create</button>
            </form>
        </div>
    </div>
</template>

<!-- Post event using the backend -->
<script>
    import axios from "axios";

    export default {
        data() {
            return {
                errors: [],
                distribution: {
                   distribution_id: '',
                   reliefType: '',
                   reliefDate: '',
                   location: '',
                   zip: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                this.errors = [];
    
                let apiURL = 'http://localhost:3000/distribution';
                
                axios.post(apiURL, this.distribution).then(() => {
                    //changing the view to the list
                  this.$router.push('/viewEvents')
                  this.distribution = {
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