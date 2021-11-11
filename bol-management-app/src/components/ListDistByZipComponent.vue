<!-- HTML used to list the events by the zip code -->
<template>
<div class="form">
    <label class="font-weight-bold"> Input Zip Code </label>
    <input type="number" v-model="zip_input" class="form-control">
    <button class="btn" v-on:click="lookUp"> Submit </button>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Client ID</th>
                        <th>Distribution ID</th>
                        <th>Zip</th>
                    </tr>
                </thead>
                <tbody>
                    <!--Figure out how to connect to distribution-->
                    <tr v-for="client in Clients" :key="client._id">
                        <td>{{ client.client_id }}</td>
                        <td>{{ client.distribution_id }}</td>
                        <td>{{ client.zip }}</td>
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
                zip_input: ''
            }
        },
        methods: { 
            lookUp() {
            let apiURL = 'http://localhost:3000/distributionZip/' + this.zip_input
            axios.get(apiURL).then(res => {
                this.Clients = res.data;
            }).catch(error => {
                console.log(error)
            });
            }
        }
        }
    
</script>


<style>
    .btn-success {
        margin-right: 10px;
    }
</style>