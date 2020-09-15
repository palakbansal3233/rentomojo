<template>
  <div>
    <h3>RentoMojo Assignment</h3>
    <table>
      <tr>
        <th>Name</th>
        <th>Company</th>
        <th>Post</th>
      </tr>
      <tr v-for="user in users.data" :key="user">
        <td>{{ Object.values(user)[1] }}</td>
        <td>{{ Object.values(user)[7].name }}</td>
        <td><b-link :to="{name: 'posts', params: {id: Object.values(user)[0]}}">{{ Object.values(user)[0] }}</b-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['users']
}
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>