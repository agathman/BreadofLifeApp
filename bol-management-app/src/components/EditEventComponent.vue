<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update Event content -->
            <h3 class="text-center">Update Event</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Distribution ID</label>
                    <input type="text" class="form-control" v-model="distribution.distribution_id" required>
                </div>

                <div class="form-group">
                    <label>Relief Type</label>
                    <input type="text" class="form-control" v-model="distribution.reliefType" required>
                </div>

                <div class="form-group">
                    <label>Relief Date</label>
                    <input type="text" class="form-control" v-model="distribution.reliefDate" required>
                </div>

                <div class="form-group">
                    <label>Location</label>
                    <input type="text" class="form-control" v-model="distribution.location" required>
                </div>

                <div class="form-group">
                    <label>Zip</label>
                    <input type="text" class="form-control" v-model="distribution.zip" required>
                </div>

                <button class="btn btn-danger mt-3">Update</button>

            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            distribution: { }
        }
    },
    created() {
        let apiURL = `http://localhost:3000/distribution/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.distribution = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:3000/distribution/${this.$route.params.id}`;

            axios.put(apiURL, this.distribution).then((res) => {
                console.log(res)
                this.$router.push('/viewEvents')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>