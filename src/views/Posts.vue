<template>
  <div>
    <posts-page :posts="posts" />
  </div>
</template>

<script>
import PostsPage from '@/components/PostsPage'
export default {
props: ['id'],
	data () {
    return {
      posts: {}
		}
	},		
  methods: {
    loadPosts () {
			return this.axios({
				method: 'get',
				url: `https://jsonplaceholder.typicode.com/posts?userId=${this.id}&skip=0&limit=10`
      }).then(response => {
        this.posts = response
      }).catch(() => {
        console.log('Error')
      })
    }
	},
	mounted () {
		this.loadPosts()
	},
	components: {
		PostsPage
	}
}
</script>
