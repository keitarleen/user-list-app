import { computed, onMounted, ref, watch } from 'vue'
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

const PRIORITIES = {
  ADMIN: 0,
  AGENT: 1,
  ACCOUNT_MANAGER: 2,
  WORKSPACE_MANAGER: 3,
  EXTERNAL_REVIEWER: 4
}

export const useUsersStore = defineStore('users', () => {
  const data = ref<Array<UserType>>([])
  const searchInput = ref<string>('')
  const selected = ref<Array<number>>([])

  const selectAll = ref<boolean>(false)

  const searchItems = computed(() => {
    if (searchInput.value.length === 0) return data.value

    return data.value.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(searchInput.value.toLowerCase())
    )
  })

  const handleSelected = (id: number) => {
    if (selected.value.includes(id)) return selected.value.filter((item) => item !== id)

    selected.value = [...selected.value, id]
  }

  const fetchUsers = () => {
    fetch('/users.json')
      .then((response) => response.json())
      .then((json) => {
        data.value = json.users
      })
  }

  watch(selectAll, () => {
    if (selectAll.value) selected.value = searchItems.value.map((item) => item.id)
    else selected.value = []
  })

  onMounted(() => fetchUsers())

  return { data, searchInput, searchItems, handleSelected, selected, selectAll, fetchUsers }
})
