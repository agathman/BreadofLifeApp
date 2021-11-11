<!-- HTML for listing client information -->
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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Getting client info from backend -->
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
                        <td>
                            <div class="span2">
                            <router-link :to="{name: 'editClient', params: { id: client._id }}" class="btn btn-block btn-success">Edit
                            </router-link>
                        <button @click.prevent="deleteClient(client._id)" class="btn btn-danger btn-block">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
//using axios to communicate with backend
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
        },
        //Deletes client using the _id
        methods: {
            deleteClient(id){
                console.log(id)
                let apiURL = `http://localhost:3000/deleteClient/${id}`;
                let indexOfArrayItem = this.Clients.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Clients.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>


<style>
    .btn-success {
        margin-right: 10px;
    }
</style>