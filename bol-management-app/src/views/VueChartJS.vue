<template>
  <section class="container">
    <h1>Bread of Life</h1>
    <div class="columns">
      <div class="column">
        
      </div>
      <div class="column">
        <h3>Demographics of Attendees</h3>
        <div>
          <div>
            <Bar
              v-if="!loading && !error"
              :label="labels"
              :chart-data="client"
            ></Bar>

            <!-- Start of loading animation -->
            <div class="mt-40" v-if="loading">
              <p
                class="
                  text-6xl
                  font-bold
                  text-center text-gray-500
                  animate-pulse
                "
              >
                Loading...
              </p>
            </div>
            <!-- End of loading animation -->

            <!-- Start of error alert -->
            <div class="mt-12 bg-red-50" v-if="error">
              <h3 class="px-4 py-1 text-4xl font-bold text-white bg-red-800">
                {{ error.title }}
              </h3>
              <p class="p-4 text-lg font-bold text-red-900">
                {{ error.message }}
              </p>
            </div>
            <!-- End of error alert -->
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const axios = require("axios");
import Bar from "@/components/Chart";

export default {
  name: "VueChartJS",
  components: {
    Bar
  },
  data() {
    return {
      labels: [],
      client: [],
      count: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        this.error = null;
        this.loading = true;
        const url = `http://localhost:3000/clients`;
        const response = await axios.get(url)
        let count = response.data.map((item) => item.ethnicity)
        let q1 = 0
        let q2 = 0
        let q3 = 0
        let q4 = 0
        let q5 = 0
        let q6 = 0
        let q7 = 0
         for (let i = 0; i < response.data.length; i++) { 
          if (count[i] === 'Asian or Pacific Islander') {
          q1 += 1;
         }
      }
         for (let i = 0; i < response.data.length; i++) { 
          if (count[i] === 'Black or African American') {
          q2 += 1;
         }
      }
        for (let i = 0; i < response.data.length; i++) { 
          if (count[i] === 'Hispanic or Latino') {
          q3 += 1;
         }
      }
       for (let i = 0; i < response.data.length; i++) { 
          if (count[i] === 'Hispanic or Latino') {
          q4 += 1;
         }
      }
       for (let i = 0; i < response.data.length; i++) { 
          if (count[i] === 'White or Caucasian') {
          q5 += 1;
         }
      }
       for (let i = 0; i < response.data.length; i++) { 
          if (count[i] === 'Multiracial or Biracial') {
          q6 += 1;
         }
      }
       for (let i = 0; i < response.data.length; i++) { 
          if (count[i] === 'A race/ethnicity not listed here') {
          q7 += 1;
         }
      }
             this.labels = [  "Asian or Pacific Islander", "Black or African American", "Hispanic or Latino", "White or Caucasian",
                                  "Multiracial or Biracial", "A race/ethnicity not listed here"]
        this.client = [q1, q2, q3, q4, q5, q6, q7]
      } catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          this.error = {
            title: "Server Response",
            message: err.message,
          };
        } else if (err.request) {
          // client never received a response, or request never left
          this.error = {
            title: "Unable to Reach Server",
            message: err.message,
          };
        } else {
          // There's probably an error in your code
          this.error = {
            title: "Application Error",
            message: err.message,
          };
        }
      }
      this.loading = false;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>