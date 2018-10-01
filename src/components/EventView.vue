<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div class="card box-style">
                    <div class="card-body">
                        <h1>{{getEvent().title}}</h1>
                        <img :src="getEvent().text" class="img-thumbnail">
                        <p>{{getEvent().content}}</p>
                        <button class ="btn btn-success">Going</button>
                        <button class="btn btn-danger">Not Going</button>
                        <button class="btn btn-info">Maybe</button>
                    </div>
                </div>
            </div>        
        </div>
    </div>

</template>

<script>
import eventValue from "@/data/DataValues.js";
import EventListing from './EventListing'
var x=eventValue
export default{
    name: "EventView",
    props: {
        value: Number
    },
    methods:{
        
        getEvent: function() {
            
            for (let i = 0; i < x.events.length; i++) {
                console.log(typeof(this.value))
                console.log(x.events.length)
            if (x.events[i].id === this.value)
                return x.events[i];
      }
    }    
 }
}
</script>

<style>
    button{
        margin: 10px 10px 10px 0;
    }
    .box-style{
        box-shadow: 5px 5px 5px 5px #888888;
        
    }
</style>
