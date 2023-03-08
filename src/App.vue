<template>
  <div>
    <h1>Matthew Mollentze - Technical Assessment</h1>
    <UserForm />
    <UserList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserList from './components/UserList.vue'
import UserForm from './components/UserForm.vue'

export default defineComponent({
  name: 'App',
  components: {
    UserList,
    UserForm
  }
})
</script>
