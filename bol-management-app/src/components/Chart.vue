
<template>
  <canvas ref="myChart"></canvas>
</template>

<script>
import Chart from "chart.js";
export default {
  props: {
    label: {
      type: Array,
    },
    chartData: {
      type: Number,
    },
  },
  async mounted() {
    console.log(this.chartData);
    await new Chart(this.$refs.myChart, {
      type: "bar",
      data: {
        labels: this.label,
        datasets: [
          {
            label: "Clients",
            backgroundColor: "rgba(144,238,144 , 0.9 )",
            data: this.chartData,
          },
        ],
      },
      options: {
        scales:  { 
          yAxes: [
            {
              ticks: {
                stepSize: 1,
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  },
};
</script>