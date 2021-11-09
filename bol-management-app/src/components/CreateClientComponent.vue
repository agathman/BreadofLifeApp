<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Client</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Client ID</label>
                    <input type="text" class="form-control" v-model="client.client_id" required>
                </div>
                <div class="form-group">
                    <label>Distribution ID</label>
                    <input type="text" class="form-control" v-model="client.distribution_id" required>
                </div>

                <div class="form-group">
                    <label>First Name</label>
                    <input type="email" class="form-control" v-model="client.fName">
                </div>

                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="client.lName" required>
                </div>

                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="text" class="form-control" v-model="client.phoneNumber" required>
                </div>

                <div class="form-group">
                    <label>Reference</label>
                    <input type="text" class="form-control" v-model="client.reference" required>
                </div>

                <div class="form-group">
                    <label>Zip</label>
                    <input type="text" class="form-control" v-model="client.zip" required>
                </div>

                <div class="form-group">
                    <label>Vaccine Status</label>
                    <input type="text" class="form-control" v-model="client.takeVaccine" required>
                </div>

                <div class="form-group">
                    <label>Vaccine Preference</label>
                    <input type="text" class="form-control" v-model="client.vaccinePreference" required>
                </div>

                <div class="form-group">
                    <label>Vaccine Received</label>
                    <input type="text" class="form-control" v-model="client.vaccineReceived" required>
                </div>

                <div class="form-group">
                    <label>Additional Supportive Services</label>
                    <input type="text" class="form-control" v-model="client.additionalServices" required>
                </div>

                <div class="form-group">
                    <label>Number of Children In Household</label>
                    <input type="text" class="form-control" v-model="client.children" required>
                </div>

                <div class="form-group">
                    <label>HouseHold 65+ In Age</label>
                    <input type="text" class="form-control" v-model="client.senior" required>
                </div>

                <div class="form-group">
                    <label>Veteran</label>
                    <input type="text" class="form-control" v-model="client.veteran" required>
                </div>

                <div class="form-group">
                    <label>Best Describes Of You</label>
                    <input type="text" class="form-control" v-model="client.ethnicity" required>
                </div>
                <button class="btn btn-danger mt-3">Create</button>
            </form>
        </div>
    </div>
</template>