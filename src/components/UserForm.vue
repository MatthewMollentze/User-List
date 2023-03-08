<template>
  <div class="table-container">
    <h2>Create a User</h2>
    <form @submit.prevent="submitUserForm">
      <table class="table">
        <thead>
          <tr>
            <th>
              <label for="firstName">First name:</label>
            </th>
            <th>
              <label for="lastName">Last name:</label>
            </th>
            <th>
              <label for="email">Email:</label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" id="firstName" v-model="form.firstName" />
            </td>
            <td>
              <input type="text" id="lastName" v-model="form.lastName" />
            </td>
            <td>
              <input type="email" id="email" v-model="form.email" />
            </td>
            <td>
              <button type="submit">Save</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useUserStore } from '../store/User'
import { User } from '../models/User'

export default defineComponent({
  name: 'UserForm',
  setup() {
    const userStore = useUserStore()
    const form = ref<User>({ firstName: '', lastName: '', email: '', id: '' })

    const resetForm = () => {
      form.value.firstName = ''
      form.value.lastName = ''
      form.value.email = ''
      form.value.id = ''
    }

    const submitUserForm = () => {
      if (form.value.id) {
        userStore.editUser(new User({ ...form.value }))
      } else {
        userStore.addUser(new User({ ...form.value, id: String(Date.now()) }))
      }
      resetForm()
    }

    return { form, submitUserForm }
  }
})
</script>
