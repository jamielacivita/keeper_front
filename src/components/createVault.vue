<template>
  <div class="createKeep">
    <h1>Enter Details to Make a Vault</h1>
    <div class="frame">
      <div class="tab-content">
        <div id="home" class="tab-pane fade in active">
          <form>


            <!-- Form Fields for Createing Vaults -->
            <input class="inputField" v-model="name" placeholder="  Name"><br>
            <input class="inputField" v-model="description" placeholder="  description"><br>
            <!--<input class="inputField" v-model="imageUrl" placeholder="  imageUrl"><br>-->

            <button class="btn btn-primary button" type="submit" name="action" @click.prevent="createVault()">Submit</button>
          </form>
        </div>


        <div id="menu1" class="tab-pane fade">
          <form>
            <!--name: <input v-model="name" placeholder="name"><br> -->
            <h3> Vault Creation form goes here </h3>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'createKeep',
    data() {
      return {
        name: '',
        description: '',
        imageUrl: '',
      }
    },
    methods:
    {
      createVault() {


        //console.debug("inside the create Vault method on the local page.")

        let obj_vault = {}
        obj_vault.name = this.name;
        obj_vault.imageUrl = this.imageUrl;
        obj_vault.description = this.description;
        obj_vault.userId = this.$root.store.state.user._id

        this.$root.store.actions.createVault(obj_vault)

        //Clear form data after submision.
        this.name = '';
        this.imageUrl = '';
        this.description = '';
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
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }

    .button{margin-top: 15px;}
</style>