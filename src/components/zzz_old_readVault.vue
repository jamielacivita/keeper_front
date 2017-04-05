<template>
  <div class="readVault">
    <h1>Put Title of Vault Here</h1>
    {{$root.store}}
    <h1>{{vaultId}}</h1>

  </div>
</template>

<script>
  export default {
    name: 'readVault',
    data() {
      return {
        vaultId: ''
      }
    },
    methods:
    {

    },
    mounted: function () {
      
      this.$root.store.actions.getKeeps()
      
      this.$root.store.actions.getVaults()
      

      console.debug("In mounted function in readVault")
      //Need to read in the current vault Id.
      this.vaultId = this.$root.store.currentVaultId;

      //Fetch that vault object and put it into local page store.

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