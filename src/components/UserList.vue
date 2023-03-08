<template>
  <div class="table-container">
    <h2>User List</h2>
    <table class="table">
      <thead>
        <tr>
          <th>
            <label>First Name</label>
          </th>
          <th>
            <label>Last Name</label>
          </th>
          <th>
            <label>Email</label>
          </th>
        </tr>
      </thead>
      <tbody>
        <UserListItem v-for="user in users" :key="user.id" :user="user" />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUserStore } from '../store/User'
import UserListItem from './UserListItem.vue'

export default defineComponent({
  name: 'UserList',
  components: {
    UserListItem
  },
  setup() {
    const userStore = useUserStore()
    const users = userStore.getUsers

    return { users }
  }
})
</script>
