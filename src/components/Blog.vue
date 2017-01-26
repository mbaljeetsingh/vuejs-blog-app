<template>
  <div class='blog container'>
    <h2>{{title}}</h2> 


    <!-- Trigger the modal add post with a button -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addNewPost">New Post</button>
    <!-- Add Post -->
    <div id="addNewPost" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Add Post Content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Add New Post</h4>
          </div>
          <div class="modal-body">
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="title" class="form-control" id="title" v-model="newPost.title">
              </div>
              <div class="form-group">
                <label for="body">Content:</label>
                <textarea class="form-control" rows="5" id="body" v-model="newPost.body"></textarea>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="AddPost()">Add</button>
          </div>
        </div>

      </div>
    </div>


    <hr>
    <div class="row">
    <div class="col-sm-6 col-md-4" v-for="post in posts" style="height: 400px;">
      <div class="thumbnail">
        <img src="http://placehold.it/350x150">
        <div class="caption">
          <h3>{{post.title | uppercase}}</h3>
          <!-- <p>{{post.body}}</p> -->
          <p><a href="#" class="btn btn-primary" role="button">Read More</a> <a href="#" class="btn btn-danger" role="button" v-on:click="deletePost(post)">Delete</a></p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      title: 'Blog App',
      newPost: {},
      posts: [{
        'userId': 1,
        'id': 1,
        'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      },
      {
        'userId': 1,
        'id': 2,
        'title': 'qui est esse',
        'body': 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
      },
      {
        'userId': 1,
        'id': 3,
        'title': 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        'body': 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
      }]
    }
  },
  methods: {
    deletePost: function (post) {
      console.log(post)
      this.posts.splice(this.posts.indexOf(post), 1)
    },
    AddPost: function () {
      this.posts.push({
        'userId': 1,
        'id': this.posts.length + 1,
        'title': this.newPost.title,
        'body': this.newPost.body
      })

      this.newPost = {}
    }
  },
  created: function () {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
      // console.log(response.data);
      this.posts = response.data
    })
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
