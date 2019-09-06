<template>
  <div id="app">
    <el-row>
      <el-card shadow="always"
      style="padding:10px;">
          <canvas id="planet-chart"
          style="width:1000px; height:300px;"></canvas>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import Chart from 'chart.js';
import planetChartData from './chart-data.js';

export default {
  data() {
    return {
      planetChartData: planetChartData,
    }
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    }
  },
  mounted() {
    this.createChart('planet-chart', this.planetChartData);
  },
}
</script>

<style>
</style>
