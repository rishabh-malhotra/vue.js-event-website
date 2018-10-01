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
import EventListing from './EventListing'
import eventValue from "@/data/DataValues.js"

export default{
    name: "EventView",
    props: {
        value: String
    },
    methods:{
      getEvent: function() {
      for (let i = 0; i < eventValue.events.length; i++) {
          console.log(this.value)
        if (eventValue.events[i].id === parseInt(this.value))
        console.log(eventValue.events[i])
          return eventValue.events[i];
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
