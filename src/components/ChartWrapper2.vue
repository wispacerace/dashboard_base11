<template>
<div id="ChartWrapper1" class="wrapper">
    <Chart :chart="chart"></Chart>
</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Chart from '@/components/Chart.vue'
//import Plotly from 'plotly.js-dist';


export default {
  name: 'home',
  components: {
    Chart
  },
  mounted(){
    this.addData();
    var i;
    this.interval = setInterval(() => {
        i = i + 100
        this.addData(i);
    }, 500);
  },
  methods: {
    setup: function(x_axis, y_axis){
      print("HELLO")
      this.chart.layout.xaxis.title = x_axis;
      this.chart.layout.yaxis.title = y_axis;
    },
    addData: function() {

      this.chart.layout.datarevision = new Date().getTime();
      this.chart.traces[0].y.push(Math.random(10) + 10)
      this.chart.layout.xaxis.title = "x_axis_wrapper2";
      this.chart.layout.yaxis.title = "y_axis";}
    
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