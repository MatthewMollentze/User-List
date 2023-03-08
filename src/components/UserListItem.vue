<template>
  <tr class="UserListItem" v-if="!isEditing">
    <td>{{ user.firstName }}</td>
    <td>{{ user.lastName }}</td>
    <td>{{ user.email }}</td>
    <td>
      <button @click="isEditing = true">Edit</button>
    </td>
    <td>
      <button class="delete" @click="deleteUser">Delete</button>
    </td>
  </tr>
  <tr class="UserListItem" v-else>
    <td>
      <input type="text" id="first-name" v-model="userCopy.firstName" />
    </td>
    <td>
      <input type="text" id="last-name" v-model="userCopy.lastName" />
    </td>
    <td>
      <input type="email" id="email" v-model="userCopy.email" />
    </td>
    <td>
      <button @click="editUser">Update</button>
    </td>
    <td>
      <button @click="cancelEdit">Cancel</button>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useUserStore } from '../store/User'
import type { User } from '../models/User'

export default defineComponent({
  name: 'UserListItem',
  props: {
    user: {
      type: Object as () => User,
      required: true
    }
  },
  setup(props) {
    const userStore = useUserStore()
    const isEditing = ref(false)
    const userCopy = ref<User>({ ...props.user })

    const editUser = () => {
      if (userCopy.value.firstName && userCopy.value.lastName && userCopy.value.email) {
        userStore.editUser(userCopy.value)
        isEditing.value = false
      }
    }

    const cancelEdit = () => {
      userCopy.value = { ...props.user }
      isEditing.value = false
    }

    const deleteUser = () => {
      userStore.removeUser(props.user.id)
    }

    return {
      isEditing,
      userCopy,
      editUser,
      cancelEdit,
      deleteUser
    }
  }
})
</script>
