import type { IUserData } from './IUserData'

export class User implements IUserData {
  firstName: string | null
  lastName: string | null
  email: string | null
  id: string

  constructor(userData: IUserData) {
    this.firstName = userData.firstName !== undefined ? userData.firstName : null
    this.lastName = userData.lastName !== undefined ? userData.lastName : null
    this.email = userData.email !== undefined ? userData.email : null
    this.id = userData.id
  }
}
