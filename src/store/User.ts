import { defineStore } from 'pinia'
import { UserList } from '../models/UserList'
import type { User } from '../models/User'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userList: new UserList()
  }),
  actions: {
    addUser(user: User) {
      const isIdExists = this.userList.list.some((u) => u.id === user.id)
      if (isIdExists) {
        throw new Error(`User with id ${user.id} already exists`)
      }
      this.userList.add(user)
    },
    editUser(user: User) {
      this.userList.update(user)
    },
    removeUser(id: string) {
      this.userList.remove(id)
    }
  },
  getters: {
    getUsers(): Array<User> {
      return this.userList.list
    }
  }
})
