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

export const ROLE_TYPES = [
  { label: 'Admin', value: 'ADMIN' },
  { label: 'Agent', value: 'AGENT' },
  { label: 'Account manager', value: 'ACCOUNT_MANAGER' },
  { label: 'External reviewer', value: 'EXTERNAL_REVIEWER' },
  { label: 'Workspace manager', value: 'WORKSPACE_MANAGER' }
]

export const useUsersStore = defineStore('users', () => {
  const data = ref<Array<UserType>>([])

  const searchInput = ref<string>('')
  const selected = ref<Array<number>>([])
  const sortByRole = ref<'asc' | 'desc' | undefined>(undefined)
  const editUser = ref<UserType>()
  const editUserModalOpen = ref<boolean>(false)

  const selectAll = ref<boolean>(false)

  const listItems = computed(() => {
    console.log('set list items')
    const items = handleSort(
      data.value.filter((item) =>
        JSON.stringify(item).toLowerCase().includes(searchInput.value.toLowerCase())
      )
    )

    return items
  })

  const handleSearch = () => {
    if (searchInput.value.length === 0) return data.value

    return data.value.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(searchInput.value.toLowerCase())
    )
  }

  const handleSort = (items: Array<UserType>): Array<UserType> => {
    if (sortByRole.value === 'asc')
      return items.sort((a, b) => PRIORITIES[a.role] - PRIORITIES[b.role])
    if (sortByRole.value === 'desc')
      return items.sort((a, b) => PRIORITIES[b.role] - PRIORITIES[a.role])

    return items
  }

  const handleSelected = (id: number) => {
    if (selected.value.includes(id)) return selected.value.filter((item) => item !== id)

    selected.value = [...selected.value, id]
  }

  const handleSortChange = () => {
    if (!sortByRole.value) return (sortByRole.value = 'asc')
    if (sortByRole.value === 'asc') return (sortByRole.value = 'desc')
    if (sortByRole.value === 'desc') return (sortByRole.value = undefined)
  }

  const handleDeleteUser = (id: number) => {
    console.log('deleted user with id', id)
    data.value = data.value.filter((item) => item.id !== id)
    selected.value = selected.value.filter((item) => item !== id)
  }

  const handleBulkDelete = () => {
    console.log('deleted selected users', selected.value)
    data.value = data.value.filter((item) => !selected.value.includes(item.id))
    selected.value = []
  }

  const handleEditUserModal = (user: UserType) => {
    editUser.value = user
    editUserModalOpen.value = true
  }

  const handleEditUser = () => {
    console.log('Save user details and update list')
    editUserModalOpen.value = false
  }

  const handleBulkEdit = () => {
    alert('Stay tuned. Bulk edit coming soon.')
  }

  const handleConnect = () => {
    alert('Stay tuned. This feature is being built right at this moment.')
  }

  const fetchUsers = () => {
    fetch('/users.json')
      .then((response) => response.json())
      .then((json) => {
        data.value = json.users
      })
  }

  watch(selectAll, () => {
    if (selectAll.value) selected.value = listItems.value.map((item) => item.id)
    else selected.value = []
  })

  onMounted(() => fetchUsers())

  return {
    data,
    searchInput,
    sortByRole,
    listItems,
    editUserModalOpen,
    editUser,
    handleSort,
    handleSearch,
    handleSelected,
    handleSortChange,
    handleDeleteUser,
    handleBulkDelete,
    handleEditUser,
    handleBulkEdit,
    handleConnect,
    handleEditUserModal,
    selected,
    selectAll,
    fetchUsers
  }
})
