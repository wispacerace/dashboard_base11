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
import Data from './Data.vue'
import {ipcRenderer} from 'electron'
const DataEnum = require('../MapsAndEnums/DataEnum.json');

export default {
  name: 'home',
  components: {
    Chart
  },
  mounted(){
    this.setup("x_axis_wrapper2", "y_axis");
    var setupFlag = false;
    ipcRenderer.on('broadcast', (event, data) => {
      if(data.id == DataEnum["Velocity"]){
        if(!setupFlag){
          this.chart.traces[0].y = Data.data().quantities[DataEnum["Velocity"]].values;
          setupFlag = true;
        }
        this.chart.layout.datarevision = new Date().getTime();
      }
    });
  },
  methods: {
    setup: function(x_axis, y_axis){
      this.chart.layout.xaxis.title = x_axis;
      this.chart.layout.yaxis.title = y_axis;
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