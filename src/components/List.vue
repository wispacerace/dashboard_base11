<template>
  <div class="list" style="display:inline"> <!-- style="transform: scale(.6)" -->


    <table width="150px" id="list-table" v-for="quantity in quantities" :key="quantity">
      <tr>
        <th class="list-element" id="list-header">{{quantity.name}}</th>
      </tr>

      <tr v-for="value in quantity.values.slice(0,5)" :key="value">
        <td class="list-element">{{value}}</td>
      </tr>
    </table>

    <button  @click="addRow"></button>

  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
        names: [
          {name:'Position'},
          {name:'Velocity'},
          {name:'Acceleration'}
        ],
        quantities: [

          {
            name: 'Position',
            values: ['1', '2', '3','4', '5', '6','7', '8', '9','10', '11', '12']
          },

          {
            name: 'Acceleration',
            values: ['1', '2', '3','4', '5', '6','7', '8', '9','10', '11', '12']
          },

          {
            name: 'Velocity',
            values: ['1', '2', '3','4', '5', '6','7', '8', '9','10', '11', '12']
          }
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#list-table {
  border-top: 4px solid aquamarine;
  border-left: 4px solid aquamarine;
  border-right: 4px solid aquamarine;
  border-spacing: 0;
  margin: 10px;
  border-radius: 15px 15px 0px 0px;
  width: 150px;
  float: left;

}

.list-element {
  border-bottom: 4px solid aquamarine;
}

#list-header {
  background-color: aquamarine;
}


</style>
