<template>
  <div class="keeps">
    <h1>Shared Keeps</h1>
    <h3>Pick Some Favorites</h3>
    <!--<div>Debug: {{myKeeps}} </div>-->

    <ul id="publicKeeps" class="fb">
      <!--<li v-for="(item, index) in $root.store.state.myKeeps">-->
      <li v-for="(item, index) in myKeeps">
        <div class="card" style="width: 339px">
          <div class="cardOutline">
            <img class="card-img-top" :src=item.imageUrl width="300px" alt="Card image cap">
            <div class="card-block">
              <h4 class="card-title">{{item.title}}</h4>
              <p class="card-text">{{item.tags}}</p>
              <p class="card-text">Views: {{item.views}}</p>
              <p class="card-text">Vaulted: {{item.timesVaulted}}</p>
              <router-link v-bind:to='"/keeps/"+item._id' class="btn btn-primary">View</router-link>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'keeps',
    data() {
      return {
        showKeepList: false,
      }
    },
    methods:
    {
    },
    mounted: function () {
      this.$root.store.actions.flyerGetKeeps(this.$route.params.id)
    },
    computed: {
      myKeeps() {
        return this.$root.store.state.myKeeps
      }
    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: block;
    margin: 0 10px;
  }
  
  /*a {
    color: #42b983;
  }*/
  
  .cardOutline {
    border: 1px solid black;
    padding: 15px;
    box-shadow: 5px 5px 5px grey;
  }
  
  .fb {
    display: flex;
    flex-direction: row;
    /*border: 1px solid red;*/
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>