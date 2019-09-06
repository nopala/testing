<template>
  <div id="app">
    <el-card shadow="always"
    style="padding:10px;">
        <canvas id="costumerChart"
        style="width:1000px; height:620px;"></canvas>
    </el-card>
  </div>
</template>

<script>
import Chart from 'chart.js';
import chartBar from './chartBar.js';

export default {
  data() {
    return {
      chartBar: chartBar,
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
    this.createChart('costumerChart', this.chartBar);
  },
}
</script>

<style>
</style>
