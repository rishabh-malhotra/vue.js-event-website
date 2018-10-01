<template>
    <div class="container" >
        <h1>Events</h1>
        <div class="row" id="app">
            <div class="col-md-4" v-for="image in eventValue.events">
                <div class="card box-card">
                    <div class="card-body">
                        <h3>{{image.title}}</h3>
                        <img :src="image.text" height="400px" width="400px" class="img-thumbnail">
                        <hr>
                        <router-link :to="{name:'events',params: {id: image.id}}">Get Details</router-link>   
                        <!-- v-on:click="titleUpperCase(image.btid)" -->
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
import eventValue from "@/data/DataValues.js";
export default {
    name: "EventListing",
    data(){
        return {
             eventValue
//             images:[
//         {
//         id: 1,
//         text: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1910d96881ab2d90dfe217957f00cae0&auto=format&fit=crop&w=600&q=60",
//         btid:'id1',
//         title: "Nature Conference",
//         content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi."
//       },
//       {
//         id: 2,
//         text: "https://images.unsplash.com/photo-1523791906223-5cef82f180ea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=623e58ad29dead46b99b4dc3094c635d&auto=format&fit=crop&w=600&q=60",
//         btid:'id2',
//         title: "Art Conference",
//         content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi."
//       },
//       {
//         id: 3,
//         text: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1d0bff8bb159f3157a0a6291244e4761&auto=format&fit=crop&w=600&q=60",
//         btid:'id3',
//         title: "Stand Up Comedy",
//         content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi."
//       },
//       {
//         id: 4,
//         text: "https://images.unsplash.com/photo-1521334726092-b509a19597c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c81d64e81415fca6fde564e483f858d&auto=format&fit=crop&w=600&q=60",
//         btid:'id4',
//         title: "Rock Band",
//         content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi."
//       },
//       {
//         id: 5,
//         text: "https://images.unsplash.com/photo-1518276171089-5d234e24effa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=56d5ba500045b6443c3ff00f0988edce&auto=format&fit=crop&w=1050&q=80",
//         btid:'id5',
//         title: "Electric Museum",
//         content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi."
//       },
//       {
//         id: 6,
//         text: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a413a0b054159dd7840130c25e6dbdf&auto=format&fit=crop&w=600&q=60",
//         btid:'id6',
//         title: "Karoke Night",
//         content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi."
//       }
//     ]
   }
 }
}
</script>

<style>
    .box-card{
        margin-bottom: 20px;
        margin-top:10px;
    }
</style>
