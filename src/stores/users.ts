import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'

export type RoleType =
  | 'ADMIN'
  | 'AGENT'
  | 'ACCOUNT_MANAGER'
  | 'EXTERNAL_REVIEWER'
  | 'WORKSPACE_MANAGER'

type UserType = {
  id: number
  name: string
  email: string
  avatar: string
  role: RoleType
}

export const useUsersStore = defineStore('users', () => {
  const users = ref<Array<UserType>>([])

  const fetchUsers = () => {
    fetch('/users.json')
      .then((response) => response.json())
      .then((data) => {
        users.value = data.users
      })
  }

  onMounted(() => fetchUsers())

  return { users, fetchUsers }
})
