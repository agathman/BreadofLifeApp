<!-- HTML for listing all events -->
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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="distribution in Distributions" :key="distribution._id">
                        <td>{{ distribution.distribution_id }}</td>
                        <td>{{ distribution.reliefType }}</td>
                        <td>{{ distribution.reliefDate }}</td>
                        <td>{{ distribution.location }}</td>
                        <td>{{ distribution.zip }}</td>
                        <td>
                            <router-link :to="{name: 'editEvent', params: { id: distribution._id }}" class="btn btn-success ">Edit
                            </router-link>
                        <button @click.prevent="deleteDistribution(distribution._id)" class="btn btn-danger mx-2">Delete</button>
                        </td>
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
        },
        //delete distribution by _id
        methods: {
            deleteDistribution(id){
                console.log(id)
                let apiURL = `http://localhost:3000/deleteDistribution/${id}`;
                let indexOfArrayItem = this.Distributions.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Distributions.splice(indexOfArrayItem, 1);
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