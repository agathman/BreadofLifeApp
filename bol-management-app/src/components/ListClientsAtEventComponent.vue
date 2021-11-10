<template>
<div class="form">
    <label class="font-weight-bold"> Input Distribution ID </label>
    <input type="text" class="form-control">
    <button class="btn"> Submit </button>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="client in Clients" :key="client._id">
                        <td>{{ client.fName }}</td>
                        <td>{{ client.lName }}</td>
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
                Clients: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:3000/clientEvents/3';
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