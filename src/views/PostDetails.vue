<template>
	<div>
		<post-details-page :details="details" :userId="userId"/>
	</div>
</template>

<script>
import PostDetailsPage from '@/components/PostDetailsPage'
export default {
	props: ['userId'],
	data () {
    return {
      details: {}
		}
	},		
  methods: {
    loadPostsDetails () {
			return this.axios({
				method: 'get',
				url: `https://jsonplaceholder.typicode.com/posts/${this.userId}`
      }).then(response => {
        this.details = response
      }).catch(() => {
        console.log('Error')
      })
    }
	},
	mounted () {
		this.loadPostsDetails()
	},
	components: {
		PostDetailsPage
	}
}
</script>
