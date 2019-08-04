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
    this.setup("x_axis_wrapper", "y_axis");
    this.interval = setInterval(() => {
        var data = Math.random() + 100;
        this.addData(data);
    }, 500);
  },
  methods: {
    setup: function(x_axis, y_axis){
      this.chart.layout.xaxis.title = x_axis;
      this.chart.layout.yaxis.title = y_axis;
    },
    addData: function(data) {
      this.chart.layout.datarevision = new Date().getTime();
      this.chart.traces[0].y.push(data);
    }
    
  },
  data: function() {
    return {
      chart: {
        uuid: "123",
        traces: [
          {
            y: [],
            line: {
              color: "#5e9e7e",
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