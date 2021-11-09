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
                    <input type="email" class="form-control" v-model="distribution.reliefDate">
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