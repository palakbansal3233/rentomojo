<template>
  <div>
    <h3>RentoMojo Assignment</h3>
    <table>
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
  props: ['posts']
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
