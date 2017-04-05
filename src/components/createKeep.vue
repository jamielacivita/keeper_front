<template>
  <div class="createKeep">
    <h1>Enter Details to Make a Keep</h1>
    <div class="frame">
      <div class="tab-content">
        <div id="home" class="tab-pane fade in active">
          <form>
            <!-- Form Fields for Createing Keeps -->
            <input class="inputField" v-model="title" placeholder="  Title"><br>
            <input class="inputField" v-model="imageUrl" placeholder="  Image URL (Optional)"><br>
            <!--<input class="inputField" v-model="articleLink" placeholder="  Article Link"><br>-->
            <!--<input class="inputField" v-model="tags" placeholder="  Tags"><br>-->
            <button class="btn btn-primary button" type="submit" name="action" @click.prevent="createKeep()">Submit</button>
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
        title: '',
        imageUrl: '',
        articleLink: '',
        tags: ''
      }
    },
    methods:
    {
      createKeep() {
        console.debug("Inside create keep method.")

        //console.debug("inside the create Keep method on the local page.")

        let obj_keep = {}
        obj_keep.title = this.title;
        obj_keep.imageUrl = this.imageUrl;
        obj_keep.articleLink = this.articleLink;
        obj_keep.tags = this.tags;
        // obj_keep.userId = this.$root.store.state.user._id
        obj_keep.userId = this.$root.store.state.user._id

        this.$root.store.actions.createKeep(obj_keep)

        //Clear form data after submision.
        this.title = '';
        this.imageUrl = '';
        this.articleLink = '';
        this.tags = '';
      },

      getKeeps() {
        //console.debug("inside the get Keeps method.")
        this.$root.store.actions.getKeeps()
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
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }

  .inputField{
    width: 100%;
  }

  .button{margin-top: 15px;}
</style>