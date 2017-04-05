<template>
  <div class="register">
    <h1>Please Register as a New User</h1>

<div class="frame">
      <div class="tab-content">
        <div id="home" class="tab-pane fade in active">

        <form>
          <input class="inputField" v-model="name" placeholder="  name"><br>
          <input class="inputField" v-model="email" placeholder="  e-mail"><br>
          <input class="inputField" v-model="password" placeholder="  password"><br>

          <button class="btn btn-primary button" type="submit" name="action" @click.prevent="register()">Submit</button>
          <button class="btn btn-primary button" type="submit" name="action" @click.prevent="login()">Login</button>
          <button class="btn btn-primary button" type="submit" name="action" @click.prevent="guestLogin()">Guest Login</button>
        </form>

    </div>
    </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'register',
    data() {
      return {
        name: '',
        email: '',
        password : ''
      }
    },
    methods:
    {
      register() {
        console.debug("inside the register method.")
        let register_object = {}
        register_object.name = this.name;
        register_object.email = this.email;
        register_object.password = this.password;
        console.debug("registerObject: ", register_object)

        this.$root.store.actions.register(register_object)
      },

      guestLogin() {
        let login_object = {}
        this.$root.store.actions.guestLogin()
      },

      login() {
        this.$root.store.actions.sendToLogin()
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