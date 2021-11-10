<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update Client content -->
            <h3 class="text-center">Update Client</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="client.fName" required>
                </div>

                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="client.lName" required>
                </div>

                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="client.phoneNumber" required>
                </div>

                <button class="btn btn-danger mt-3">Update</button>

            </form>
        </div>
    </div>
</template>