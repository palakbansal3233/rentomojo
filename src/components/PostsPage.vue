<template>
  <div class="overflow-auto">
    <h3>RentoMojo Assignment</h3>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>
    <table id="my-table" :per-page="perPage" :current-page="currentPage">
      <tr>
        <th>Post Title</th>
        <th>Post ID</th>
      </tr>
      <tr v-for="post in posts.data" :key="post">
        <td>{{ Object.values(post)[2] }}</td>
        <td>
          <b-link
            :to="{name: 'postDetails', params: {userId: Object.values(post)[1]}}"
          >{{ Object.values(post)[1] }}</b-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      perPage: 3,
      currentPage: 1,
    }
  },
  props: ['posts'],
  computed: {
    rows() {
      return this.posts.length
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
