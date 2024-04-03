<script setup lang="ts">
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import SearchInput from '@/components/SearchInput.vue'
import ButtonItem from '@/components/ButtonItem.vue'
import EditIcon from '@/components/EditIcon.vue'
import TrashIcon from '@/components/TrashIcon.vue'
import ArrowDownIcon from '@/components/ArrowDownIcon.vue'
import UserItem from '@/components/UserItem.vue'
import EditModal from '@/components/EditModal.vue'
import { useUsersStore } from '@/stores/users'

const users = useUsersStore()
</script>

<template>
  <div class="flex flex-col md:flex-row md:justify-between gap-2">
    <h1 class="font-bold">Account users</h1>
    <div class="flex flex-col md:flex-row gap-2">
      <SearchInput :placeholder="'Search'" v-model="users.searchInput" />
      <ButtonItem :text="'Connect users'" @click="users.handleConnect" />
    </div>
  </div>

  <section class="flex flex-col grow gap-2 md:gap-4 px-2 md:px-4 py-6 rounded bg-white">
    <div class="flex items-center gap-2 px-4 md:px-4">
      <h2 class="font-medium">{{ users.selected.length }} users selected</h2>
      <ButtonItem :text="'Edit'" :btnType="'secondary'" @click="users.handleBulkEdit">
        <EditIcon :width="16" :height="16" />
      </ButtonItem>
      <ButtonItem :text="'Delete'" :btnType="'secondary'" @click="users.handleBulkDelete">
        <TrashIcon :width="16" :height="16" />
      </ButtonItem>
    </div>

    <div v-if="users.listItems.length === 0" class="px-4">No users found</div>

    <!-- list header -->
    <div
      v-if="users.listItems.length !== 0"
      class="flex gap-2 px-4 label_color text-sm font-medium"
    >
      <label class="grow flex gap-3 cursor-pointer">
        <input type="checkbox" v-model="users.selectAll" class="cursor-pointer" />
        <span class="text-sm">User</span>
      </label>
      <div class="shrink-0 md:w-60 lg:w-72">
        <button class="flex gap-2 items-center text-sm" @click="users.handleSortChange">
          <span>Permission</span>
          <span :class="{ 'rotate-180': users.sortByRole === 'desc' }" class="transition">
            <ArrowDownIcon />
          </span>
        </button>
      </div>
    </div>

    <div class="relative grow">
      <div class="scroller_wrapper">
        <RecycleScroller
          class="scroller"
          :items="users.listItems"
          :item-size="64"
          key-field="id"
          v-slot="{ item }"
        >
          <UserItem
            :key="item.id"
            :id="item.id"
            :name="item.name"
            :email="item.email"
            :thumbnail="item.avatar"
            :role="item.role"
            :selected="users.selected.includes(item.id)"
            :deleteUser="() => users.handleDeleteUser(item.id)"
            :editUser="() => users.handleEditUserModal(item)"
            v-model="users.selected"
          />
        </RecycleScroller>
      </div>
    </div>
  </section>

  <EditModal v-if="users.editUserModalOpen && users.editUser" />
</template>

<style scoped>
.scroller_wrapper {
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.scroller {
  height: 100%;
  width: 100%;
}

.label_color {
  color: var(--c-text-desc);
}
</style>
