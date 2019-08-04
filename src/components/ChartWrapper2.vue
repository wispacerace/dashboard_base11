<template>
<div id="ChartWrapper1" class="wrapper">
    <Chart :chart="chart"></Chart>
</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import Plotly from 'plotly.js-dist';
import Chart from '@/components/Chart.vue'
import {ipcRenderer} from 'electron'

export default {
  name: 'home',
  components: {
    Chart
  },
  mounted(){
    this.setup("x_axis_wrapper2", "y_axis");
  },
  methods: {
    setup: function(x_axis, y_axis){
      this.chart.layout.xaxis.title = x_axis;
      this.chart.layout.yaxis.title = y_axis;

      ipcRenderer.on('broadcast', (event, data) => {
        console.log(data);
        this.addData(data);
      });
    },
    addData: function(data) {
      this.chart.layout.datarevision = new Date().getTime();
      this.chart.traces[0].y.push(data);
    }
  },
  data: function() {
    return {
      chart: {
        uuid: "1283",
        traces: [
          {
            y: [],
            line: {
              color: "D5B547",
              width: 4,
              shape: "line"
            }
          }
        ],
        layout: {
          xaxis: {
            title: 'xaxis title'
          },
          yaxis: {
            title: 'yaxis title'
          },
          width: 400,
        }
      }
    };
  }
}
</script>