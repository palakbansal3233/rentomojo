<template>
  <div>
    <h3>RentoMojo Assignment</h3>
    <table>
      <tr>
        <th>Post Title</th>
        <th>Post Body</th>
        <th>Comments</th>
      </tr>
      <tr>
        <td>{{ Object.values(details.data)[2] }}</td>
        <td>{{ Object.values(details.data)[3] }}</td>
        <td><button @click="loadComments()">Comments</button></td>
        <td v-if="this.loading">
          <table>
            <tr>
              <th>Post ID</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>
            <tr v-for="comment in comments.data" :key="comment">
              <td>{{ Object.values(comment)[0] }}</td>
              <td>{{ Object.values(comment)[1] }}</td>
              <td>{{ Object.values(comment)[2] }}</td>
              <td>{{ Object.values(comment)[3] }}</td>
              <td>{{ Object.values(comment)[4] }}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <div>
      <button @click="deletePost()">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['details' , 'userId'],
  data () {
    return {
      id: this.userId,
      comments: {},
      loading: false
		}
	},	
  methods: {
    loadComments () {
			return this.axios({
				method: 'get',
				url: `https://jsonplaceholder.typicode.com/comments?postId=${this.userId}`
      }).then(response => {
        this.comments = response
        this.loading = true
      }).catch(() => {
        console.log('Error')
      })
    },
    deletePost () {
      return this.axios({
        method: 'delete',
        url: `https://jsonplaceholder.typicode.com/posts/${this.userId}`
      }).then(response => {
        console.log(response)
        this.$router.push({ name: 'posts', params: {id: this.id} })
      }).catch(() => {
        console.log('Error')
      })
    }
  }
}
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
