<script setup lang="ts">
import { ROLE_TYPES, useUsersStore } from '@/stores/users'
import TextInput from './TextInput.vue'
import SelectInput from './SelectInput.vue'
import ButtonItem from './ButtonItem.vue'

const users = useUsersStore()
</script>

<template>
  <div class="overlay z-10" @click.self="() => (users.editUserModalOpen = false)">
    <div
      class="bg-white rounded shadow-sm p-6 fixed flex flex-col gap-4 w-full md:w-1/2 z-20 modal"
    >
      <h4 class="font-medium">Edit user</h4>

      <form
        v-if="users.editUser"
        class="flex flex-col gap-2"
        @submit.prevent="users.handleEditUser"
      >
        <TextInput :placeholder="'Name'" v-model="users.editUser.name" :required="true" />
        <TextInput :placeholder="'Email'" v-model="users.editUser.email" :required="true" />
        <SelectInput :placeholder="'Role'" :options="ROLE_TYPES" v-model="users.editUser.role" />
        <ButtonItem :type="'submit'" :btn-type="'primary'" :text="'Save'" />
      </form>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  &::before {
    content: '';
    display: block;
    align-items: center;
    position: fixed;
    background-color: black;
    opacity: 0.5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

.modal {
  bottom: 0;
  left: 0;
  right: 0;

  @media (min-width: 768px) {
    top: 50%;
    left: 50%;
    right: unset;
    bottom: unset;
    transform: translate(-50%, -50%);
  }
}
</style>
