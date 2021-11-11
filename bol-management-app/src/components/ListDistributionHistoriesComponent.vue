<!-- HTML used to list the distribution histories -->
<template>
<div class="form">
    <label class="font-weight-bold"> Input Client ID </label>
    <input type="text" class="form-control">
    <button class="btn"> Submit </button>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Distribution ID</th>
                        <th>Relief Type</th>
                        <th>Relief Date</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <!--Figure out how to connect to distribution-->
                    <tr v-for="client in Clients" :key="client._id">
                        <td>{{ client.fName }}</td>
                        <td>{{ client.lName }}</td>
                        <td>{{ client.distribution_id }}</td>
                        <td>{{ client.distributions }}</td>
                        <td>{{ client.distributions.reliefDate }}</td>
                        <td>{{ client.distributions.location }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                Clients: [],
                Distributions: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:3000/client-access/1';
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