<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Client ID</th>
                        <th>Distribution ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Reference</th>
                        <th>Zip</th>
                        <th>Take Vaccine</th>
                        <th>Vaccine Preference</th>
                        <th>Previous Vaccine</th>
                        <th>Additional Services</th>
                        <th>Children</th>
                        <th>Senior</th>
                        <th>Veteran</th>
                        <th>Ethnicity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="client in Clients" :key="client._id">
                        <td>{{ client.client_id }}</td>
                        <td>{{ client.distribution_id }}</td>
                        <td>{{ client.fName }}</td>
                        <td>{{ client.lName }}</td>
                        <td>{{ client.phoneNumber }}</td>
                        <td>{{ client.reference }}</td>
                        <td>{{ client.zip }}</td>
                        <td>{{ client.takeVaccine }}</td>
                        <td>{{ client.vaccinePreference }}</td>
                        <td>{{ client.vaccineReceived }}</td>
                        <td>{{ client.additionalServices }}</td>
                        <td>{{ client.children }}</td>
                        <td>{{ client.senior }}</td>
                        <td>{{ client.veteran }}</td>
                        <td>{{ client.ethnicity }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
    import axios from "axios";

    export default {
        data() {
            return {
                Clients: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:3000/clients';
            axios.get(apiURL).then(res => {
                this.Clients = res.data;
            }).catch(error => {
                console.log(error)
            });
        }
    }
</script>


<style>
    .btn-success {
        margin-right: 10px;
    }
</style>