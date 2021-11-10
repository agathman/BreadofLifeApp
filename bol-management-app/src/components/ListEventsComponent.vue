<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Distribution ID</th>
                        <th>Relief Type</th>
                        <th>Relief Date</th>
                        <th>Location</th>
                        <th>Zip</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="distribution in Distributions" :key="distribution._id">
                        <td>{{ distribution.distribution_id }}</td>
                        <td>{{ distribution.reliefType }}</td>
                        <td>{{ distribution.reliefDate }}</td>
                        <td>{{ distribution.location }}</td>
                        <td>{{ distribution.zip }}</td>
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
                Distributions: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:3000/distributions';
            axios.get(apiURL).then(res => {
                this.Distributions = res.data;
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