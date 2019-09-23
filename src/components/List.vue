<template>
  <div class="list" style="display:inline"> <!-- style="transform: scale(.6)" -->


    <table width="150px" id="list-table" v-for="(quantity, index) in quantities" :key="`quantity-${index}`">
      <tr>
        <th class="list-element" id="list-header">{{quantity.name}}</th>
      </tr>

      <tr v-for="(value, index) in quantity.values.slice(0,5)" :key="`value-${index}`">
        <td class="list-element">{{value}}</td>
      </tr>
    </table>

    <button @click="addRow">Click to Add Row</button>

  </div>
</template>

<script>
  import Data from './Data.vue'

export default {
  name: 'List',
  methods: {
    addRow: () => {

    }
  },
  data: ()=>{
    return Data.data()
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
