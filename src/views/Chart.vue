<template>
  <div class="chart-wrap">
    <button @click="pushData()" value="おす">グラフ描画</button>
    {{ data }}
    <Chart v-if="data[0]" :data="data[0]" />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import Chart from "@/components/chart/Chart.vue";
export default defineComponent({
  components: {
    Chart,
  },
  setup() {
    const data = reactive([]);
    const pushData = () => {
      data.splice(0);
      const graphData: {
        type: string;
        data: {
          labels: string[];
          datasets: {
            label: string;
            data: number[];
            backgroundColor: string[];
            borderColor: string[];
            borderWidth: number;
          }[];
        };
        options: {
          scales: {
            yAxes: {
              ticks: {
                beginAtZero: boolean;
              };
            }[];
          };
        };
      } = {
        type: "line",
        data: {
          labels: ["赤", "青", "黄色", "緑", "紫", "橙"],
          datasets: [
            {
              label: "得票数",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      };
      data.push(graphData);
    };
    return {
      data,
      pushData,
    };
  },
});
</script>
<style lang="scss" scoped>
.chart-wrap {
  width: 90%;
  margin: 0 auto;
}
</style>
