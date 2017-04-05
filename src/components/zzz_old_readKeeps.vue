<template>
  <div class="readKeeps">
    <h1>Read Public Keeps Page</h1>

    <!--<h3>{{$root.store.state.keeps}}</h3>-->

    <ul id="publicKeeps" class="fb">
      <li v-for="(item, index) in $root.store.state.keeps">
        <div class="card" style="width: 320px">
          <div class="cardOutline">
            <img class="card-img-top" :src=item.imageUrl width="300px" alt="Card image cap">
            <div class="card-block">
              <h4 class="card-title">{{item.title}}</h4>
              <p class="card-text">{{item.tags}}</p>
              <!--<a href="#" class="btn btn-primary">Keep</a>-->
              <a v-on:click="storeKeep(item)" class="btn btn-primary">Vault Me to the moon.</a>
              <button><router-link to="/58dadb81330fa500c49ad41e">Flying Link</router-link></button>
              <!--<a href="#" class="btn btn-primary">Else</a>-->
            </div>
          </div>
        </div>
      </li>
    </ul>

<!--This section of the page displays the users vaults.-->
    <div v-if="showVaultList" class="vaultBorder">
      <h1> Showing All Vaults </h1>
      <h3>{{$root.store.state.vaults}}</h3>
      <ul id="publicVaults">
        <li v-for="(item, index) in $root.store.state.vaults">
          <div class="card" style="width: 320px">
            <div class="cardOutline">
              <div class="card-block">
                <h4 class="card-title">{{item.name}}</h4>
                <p class="card-text">{{item.description}}</p>
                <a v-on:click="addToVault(item._id)" class="btn btn-primary">Vault Me.</a>
              </div>
            </div>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'readKeeps',
    data() {
      return {
        showVaultList: false,
        keep_obj: ''
      }
    },
    methods:
    {
      getKeeps() {
        this.$root.store.actions.getKeeps()
      },
      storeKeep(keep_obj) {

        //console.debug("1). In storeKeep with: ", keep_obj)
        //console.log("this should be a keep object.")

        this.keep_obj = keep_obj;
        this.showVaultList = !this.showVaultList;

        //console.debug("2). The keep objec in the local store is: ", this.keep_obj)
        //console.log("this should be a keep object.")

      },

      addToVault(vaultId) {
        //console.debug("3.) In add to vault with a vault object of: ", this.keep_obj)
        //console.debug("In add to vault with vault Id of: ", vaultId)
        this.$root.store.actions.setKeepToVault(this.keep_obj,  vaultId) 
        this.showVaultList = !this.showVaultList;
        this.getKeeps();
      },




    },
    mounted: function () {
      //console.log("Mounting Read Keeps")
      this.$root.store.actions.getKeeps()
      this.$root.store.actions.getVaults()
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
  
  a {
    color: #42b983;
  }
  
  .cardOutline {
    border: 1px solid black;
    padding: 15px;
    box-shadow: 5px 5px 5px grey;
  }
  
  .fb {
    display: flex;
    flex-direction: row;
    border: 1px solid red;
    flex-wrap: wrap;
  }
</style>