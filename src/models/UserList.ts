import { User } from './User'

export class UserList {
  list: Array<User>

  constructor() {
    this.list = [
      new User({
        id: '1',
        firstName: 'Matthew',
        lastName: 'Mollentze',
        email: 'matthewmollentze@gmail.com'
      }),
      new User({
        id: '2',
        firstName: 'Joel',
        lastName: 'Miller',
        email: 'joel.miller@gmail.com'
      })
    ]
  }

  add(user: User) {
    const existingUser = this.list.find((u) => u.id === user.id)
    if (existingUser) {
      throw new Error(`User with id ${user.id} already exists`)
    }
    this.list.push(user)
  }

  update(user: User) {
    const existingUserIndex = this.list.findIndex((u) => u.id === user.id)
    if (existingUserIndex === -1) {
      throw new Error(`User with id ${user.id} does not exist`)
    }
    this.list.splice(existingUserIndex, 1, user)
  }

  remove(id: string) {
    const existingUserIndex = this.list.findIndex((u) => u.id === id)
    if (existingUserIndex === -1) {
      throw new Error(`User with id ${id} does not exist`)
    }
    this.list.splice(existingUserIndex, 1)
  }
}
