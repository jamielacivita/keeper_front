<template>

  <div class="keep-container">
    <!--<h2> Keeps: {{$route.name}}
    </h2>-->


    <div v-if="$root.$data.store.state.user.email">
      <router-view></router-view>
    </div>

    <div v-else>
      <h1> You are not logged in </h1>
      <router-link to="/login"><button class="btn btn-primary">Return to Login Page</button></router-link>
    </div>
  </div>
</template>

<script>
  export default {

    name: '',
    data() {
      return {

    methods:
    {
    },

    mounted: function () {
    },

      }
    }
  }

</script>

<style>
  .button {
    color: white;
  }
</style>