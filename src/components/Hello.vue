<template>
  <div class="hello">
    <h1>Welcome to Keepr</h1>
    <p>Lets Get This Started</p>
      <router-link to="login" class="btn btn-primary">Login</router-link>
      <router-link to="register" class="btn btn-primary">Register</router-link>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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

/*a {
  color: #42b983;
}*/
</style>
