<template>
  <div>
		<home-page :users="users" />
	</div>
</template>

<script>
import HomePage from '@/components/HomePage'
export default {
	data () {
    return {
      users: {}
		}
	},		
  methods: {
    loadUsers () {
			return this.axios({
				method: 'get',
				url: 'https://jsonplaceholder.typicode.com/users'
      }).then(response => {
        this.users = response
      }).catch(() => {
        console.log('Error')
      })
    }
	},
	components: {
		HomePage
	},
	mounted () {
		this.loadUsers()
	}
}
</script>
