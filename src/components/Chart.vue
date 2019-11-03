<template>
    <div :ref="chart.uuid"></div>
</template>

<script>
import Plotly from 'plotly.js-dist';
export default {
  name: 'Chart',
  props: ["chart"],

  mounted() {
    Plotly.plot(this.$refs[this.chart.uuid], this.chart.traces, this.chart.layout);
  },
  watch: {
    chart: {
      handler: function() {
        Plotly.react(
          this.$refs[this.chart.uuid],
          this.chart.traces,
          this.chart.layout
        );
      },
      deep: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.plot{
  padding: 5px;
  width: 500px;
  height: 300px;
  float: left;
}
</style>
