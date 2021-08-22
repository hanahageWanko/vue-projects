<template>
  <div>
    <canvas id="chart"></canvas>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Chart from "chart.js/auto";
export default defineComponent({
  name: "Chart",
  props: {
    data: {
      type: Object,
      default: () => ({ count: 0 }),
    },
  },
  setup(props) {
    const renderChart = () => {
      let ctx: HTMLElement | null = document.getElementById("chart");
      new Chart(ctx, props.data);
    };
    onMounted(() => {
      renderChart();
    });
  },
});
</script>
<style lang="scss" scoped></style>
