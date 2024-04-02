<script setup lang="ts">
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import TextInput from '@/components/TextInput.vue'
import ButtonItem from '@/components/ButtonItem.vue'
import EditIcon from '@/components/EditIcon.vue'
import TrashIcon from '@/components/TrashIcon.vue'
import UserItem from '@/components/UserItem.vue'
import { useUsersStore } from '@/stores/users'

const users = useUsersStore()
</script>

<template>
  <div class="flex flex-col md:flex-row md:justify-between gap-2">
    <h1 class="font-bold">Account users</h1>
    <div class="flex gap-2">
      <TextInput :placeholder="'Search'" />
      <ButtonItem :text="'Connect users'" />
    </div>
  </div>
  <section class="flex flex-col grow gap-2 md:gap-4 px-2 md:px-8 py-6 rounded bg-white">
    <div class="flex items-center gap-2 px-4 md:px-0">
      <h2 class="font-medium">0 users selected</h2>
      <ButtonItem :text="'Edit'" :btnType="'secondary'">
        <EditIcon :width="16" :height="16" />
      </ButtonItem>
      <ButtonItem :text="'Delete'" :btnType="'secondary'">
        <TrashIcon :width="16" :height="16" />
      </ButtonItem>
    </div>

    <!-- list header -->
    <div class="flex gap-2 px-4 label_color text-sm font-medium">
      <label class="grow flex gap-3">
        <input type="checkbox" />
        <span class="text-sm">User</span>
      </label>
      <div class="shrink-0 md:w-60 text-sm">Permission</div>
    </div>

    <div v-if="users.data.length === 0">No users found</div>
    <div class="relative grow">
      <div class="scroller_wrapper">
        <RecycleScroller
          class="scroller"
          :items="users.data"
          :item-size="64"
          key-field="id"
          v-slot="{ item }"
        >
          <UserItem
            :key="item.id"
            :name="item.name"
            :email="item.email"
            :thumbnail="item.avatar"
            :role="item.role"
            :selected="false"
          />
        </RecycleScroller>
      </div>
    </div>
  </section>
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
