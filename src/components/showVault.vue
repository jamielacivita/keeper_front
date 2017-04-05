<template>
  <div class="keeps">
    <!--{{myVault[0]}}-->
    <h1>{{myVault[0].name}}</h1>
    <!--<div> Debug:  {{myVault}} </div>-->
    <div id="publicKeeps" class="fb">
      <div class="card">
        <div class="cardOutline">
          <div class="card-block">
            <p class="card-text">{{myVault[0].description}}</p>
            <!--<p class="card-text">Debug: {{myVault._id}}</p>-->
            <ul>
              <li v-for="(item, index) in myVault[0].keeps">
                <img class="card-img-top" :src=item.imageUrl alt="Card image cap">
                <div>{{item.title}}</div>
              </li>
            </ul>
          </div>
          <button class="btn btn-warning" @click="deleteVault(myVault[0]._id)">Delete This Vault</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'keeps',
    data() {
      return {
        showVaultCards: false,
        showAllVaultCards: false,
      }
    },
    methods:
    {
      deleteVault: function (id) {
        console.debug("In delete vault function with: ", id)
        this.$root.store.actions.deleteVault(id)
      }
    },
    mounted: function () {
      console.log("Hello World from show keep.")
      console.log("params.id: ", this.$route.params.id)
      this.$root.store.actions.flyerGetVault(this.$route.params.id)
 
    },
    computed: {
      myVault() {
        return this.$root.store.state.myVaults
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
    flex-wrap: wrap;
    justify-content: space-around;
  }

  img {max-width: 90%;}
</style>