<template>
  <div class="keeps">
    <h1>{{myKeeps.title}}</h1>
    <!--<div>Debug: {{myKeeps}} </div>-->
    <ul id="publicKeeps" class="fb">
      <div class="card" style="">
        <div class="cardOutline">
          <img class="card-img-top" :src=myKeeps.imageUrl height="350vh" alt="Card image cap">
          <div class="card-block">
            <p class="card-text">{{myKeeps.tags}}</p>
            <!--{{myKeeps.userId}} {{$root.store.state.user._id}}-->
            <a v-if="showVaultMeButton()" v-on:click="openVaults(item)" class="btn btn-primary">Vault Me!</a>
            <span v-if="myKeeps.userId == $root.store.state.user._id">
            <a v-on:click="deleteKeep(myKeeps)" class="btn btn-warning">Delete Me.</a>
            </span>
          </div>
        </div>
      </div>
    </ul>


<!--<h1>debugstuff</h1>
<h3>{{$root.store.state.myVaults}}</h3>
{{$root.store.state.user._id}}
{{$root.store.state.myVaults}}
<h1>debugstuff</h1>-->

    <!--This section is where the vault cards show. -->
    <div v-if="showVaultCards">
      <ul id="publicVaults" class="fb">
        <li v-for="item in userVaults(myVaults)">
          <div class="card" style="width: 320px">
            <div class="cardOutline">
              <div class="card-block">
                <h4 class="card-title">{{item.name}}</h4>
                <p class="card-text">{{item.description}}</p>
                <p class="card-text">User Id: {{item.userId}}</p>
                <a v-on:click="sendToKeep(myKeeps,item._id)" class="btn btn-primary">To This Vault</a>
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
    name: 'keeps',
    data() {
      return {
        showVaultCards: false,
        showAllVaultCards: false,
      }
    },
    methods:
    {
      sendToKeep: function (keep_obj, vaultId) {
        console.debug("In sendToKeep with keep object", keep_obj)
        console.debug("In sendToKeep with vaultId", vaultId)
        console.debug("my vaults: ", this.$root.store.state.myVaults)

        let vaults = this.$root.store.state.myVaults;
        for (var i = 0; i < vaults.length;i++)
        {
          let vault = vaults[i];
          if (vault._id == vaultId)
          {
            console.debug("70:this is the vault you want: ", vault)
            vault.keeps.push(keep_obj)
          } 
        }

        console.debug("my vaults after push: ", this.$root.store.state.myVaults)
        this.$nextTick(function () {
        console.debug("In next tick");
        this.$root.store.state.myVaults
      })

        this.$root.store.actions.setKeepToVault(keep_obj, vaultId)
      },
      userVaults: function (arr_vaults) {
        this.out_array = arr_vaults.filter(element => {
          if (element.userId == this.$root.store.state.user._id) { return true }
          else { return false }
        })
        //console.debug("out array: ", this.out_array)
        return this.out_array;
      },
      openVaults: function () {
        console.debug("In open vaults function.")
        this.showVaultCards = !this.showVaultCards;
      },

      deleteKeep: function (keep_obj) {
        console.debug("In delete Keep function with: ",  keep_obj)
        this.$root.store.actions.deleteKeep(keep_obj._id)
      },

      showVaultMeButton: function () {
        return this.$root.store.actions.userHasVaults()
      }
    },
    mounted: function () {

      this.$nextTick(function () {
        console.debug("In next tick");

      })

      console.debug("Hello World from show keep.")
      console.debug("params.id: ", this.$route.params.id)
      this.$root.store.actions.flyerGetKeep(this.$route.params.id)
      this.$root.store.actions.getVaults()
      this.$root.store.actions.incrementViews(this.$route.params.id)

    },
    computed: {
      myKeeps() {
        return this.$root.store.state.myKeeps
      },
      myVaults() {
        return this.$root.store.state.myVaults
      },
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
  /*  
  a {
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
</style>