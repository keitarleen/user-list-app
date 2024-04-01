<script setup lang="ts">
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
  <section class="flex flex-col gap-4 px-8 py-6 rounded bg-white">
    <div class="flex items-center gap-2">
      <h2 class="font-medium">0 users selected</h2>
      <ButtonItem :text="'Edit'" :btnType="'secondary'">
        <EditIcon :width="16" :height="16" />
      </ButtonItem>
      <ButtonItem :text="'Delete'" :btnType="'secondary'">
        <TrashIcon :width="16" :height="16" />
      </ButtonItem>
    </div>

    <div class="flex flex-col gap-2">
      <UserItem :selected="true" />
      <UserItem />
    </div>
  </section>
</template>

<style scoped></style>
