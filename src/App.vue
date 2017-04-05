<template>
  <div id="app">
    <!--<h3>{{$root.store.state.user.email}}</h3>-->
    <img src="./assets/logo.jpg">

    <!--<h4>User Object: {{$root.store.state.user}}</h4>-->

    <div v-if="$root.store.state.user.name">
    <h4>Logged in as: {{$root.store.state.user.name}} ({{$root.store.state.user.email}})</h4>
    <router-link v-if="showKeepsButton()" to="/keeps" class="btn btn-primary">Go To Keeps</router-link>
    <router-link v-if="showNewKeepButton()" to="/keeps/new" class="btn btn-primary">Make New Keep</router-link>
    <router-link v-if="userHasVaults()" to="/vaults" class="btn btn-primary">Go To Vaults</router-link>
    <router-link v-if="showNewVaultButton()" to="/vaults/new" class="btn btn-primary">Make New Vault</router-link>
    <router-link to="/login" class="btn btn-primary">Logout</router-link>
    </div>

    <router-view></router-view>
    
  </div>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        // showLogin: false,
        // name: '',
        // //hardcoded name and password.
        // email: 'JCLacivita@gmail.com',
        // password: 'sunfish'
      }
    },
    methods:
    {
      login() {
        //console.debug("inside the login method.")

        let login_object = {}
        login_object.email = this.email;
        login_object.password = this.password;
        this.$root.store.actions.login(login_object)
      },

      register() {
        //console.debug("inside the register method.")

        let register_object = {}
        register_object.name = this.name;
        register_object.email = this.email;
        register_object.password = this.password;

        this.$root.store.actions.register(register_object)
      },

      userHasVaults() {
        let route = this.$route.fullPath;
        if (route == '/vaults') {return false;}
        else{
        return this.$root.store.actions.userHasVaults()}
      },

      showKeepsButton() {
        let route = this.$route.fullPath;
        console.debug("route", route)
        if (route == '/keeps/') {return false;}
        else if (route == '/keeps') {return false;}
        else {return true;};
      },

      showNewKeepButton() {
        let route = this.$route.fullPath;
        let isGuest = this.$root.store.state.user.isGuest;
        if (route == '/keeps/new') {return false;}
        else if (isGuest) {return false;}
        else {return true;};
      },

      showNewVaultButton() {
        let route = this.$route.fullPath;
        let isGuest = this.$root.store.state.user.isGuest;
        if (route == '/vaults/new') {return false;}
        else if (isGuest) {return false;}
        else {return true;};
      },

    },
    mounted: function(){
      this.$root.store.actions.flyerGetVaults()

    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  .frame {
    margin: auto;
    width: 33%;
  }
  
  .inputField {
    margin-top: 15px;
    width: 100%;
    font-size: 40px;
  }
  
  .tab_class {
    color: black;
    font-size: 20px;
    background-color: rgba(254, 0, 149, .25);
  }
</style>