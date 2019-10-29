<template>
    
</template>

<script>
    import {ipcRenderer} from 'electron'
    const DataIDMap = require('../MapsAndEnums/DataIDMap.json');
    var quantity = [ ];
    export default {
        name: "Data",
        mounted(){
            this.setup();
        },
        methods:{
            setup: ()=>{
                ipcRenderer.on('broadcast', (event, data) => {
                    console.log("id: " + data.id + " Value: " + data.value);
                    quantity[data.id].values.push(data.value);
                    if(quantity[data.id].values.length > 10){
                        quantity[data.id].values.shift();
                    }
                });
                for (var i = 0; i < Object.keys(DataIDMap).length; i++){
                    quantity.push({ name: DataIDMap[i], values: []});
                }

            }
        },
        data: () => {
            return {
                quantities: quantity
            }
        },

    }
</script>

<style scoped>

</style>