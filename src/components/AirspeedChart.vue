<template>
<div id="ChartWrapper1" class="wrapper">
    <Chart class="plot" :chart="chart"></Chart>
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

const x_axis_title = "Time (s)"; // plot labels
const y_axis_title = "Airspeed (m/s)"; // plot labels
const dataEnumName = "Airsped";
const gray = 	"525252";

export default {
  name: 'home',
  components: {
    Chart
  },
  mounted(){
    this.setup(x_axis_title, y_axis_title);
    var setupFlag = false;
    ipcRenderer.on('broadcast', (event, data) => {
      if(data.id == DataEnum[dataEnumName]){
        this.addData(data.value); // add data to plot trace
        if(!setupFlag){
          //this.chart.traces[0].y = Data.data().quantities[DataEnum["Velocity"]].values;
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
    },
    addData: function(value){
      this.chart.traces[0].y.push(value);
    }
  },
  data: function() {
    return {
      chart: {
        uuid: "1294",
        traces: [
          {
            y: [],
            line: {
              color: gray,
              width: 4,
              shape: "line"
            }
          }
        ],
        layout: {
          xaxis: {
            title: x_axis_title
          },
          yaxis: {
            title: y_axis_title
          },
          width: 500,
          height: 300,
          padding:0,
          margin:0,
        }
      }
    };
  }
}
</script>