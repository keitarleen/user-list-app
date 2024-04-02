<script setup lang="ts">
import { ref } from 'vue'
import ButtonItem from '@/components/ButtonItem.vue'
import EditIcon from '@/components/EditIcon.vue'
import TrashIcon from '@/components/TrashIcon.vue'
import TagItem from '@/components/TagItem.vue'
import type { RoleType } from '@/stores/users'

withDefaults(
  defineProps<{
    id?: number
    selected?: boolean
    name: string
    email: string
    thumbnail: string
    role: RoleType
  }>(),
  { selected: false }
)

const checkboxValue = defineModel()

const showActions = ref<boolean>(false)

const test = () => {
  showActions.value = true
}
</script>

<template>
  <div
    class="flex items-center gap-2 px-4 py-3 h-16 rounded cursor-pointer"
    :class="{ selected: selected }"
    @mouseenter="test()"
    @mouseleave="showActions = false"
  >
    <!-- user data -->
    <div class="flex items-center gap-3 grow overflow-hidden">
      <input type="checkbox" v-model="checkboxValue" :value="id" id="id" />
      <div class="shrink-0 h-8 w-8 rounded-full overflow-hidden">
        <img :src="thumbnail" class="object-cover" />
      </div>
      <div class="flex flex-col">
        <div class="text-sm font-medium">{{ name }}</div>
        <div class="text-sm overflow-ellipsis">{{ email }}</div>
      </div>
    </div>
    <div class="flex shrink-0 md:w-60 gap-4 justify-between">
      <!-- Tag -->
      <div>
        <TagItem :type="role" />
      </div>
      <!-- Actions -->
      <div class="hidden md:flex gap-1" :class="{ visible: showActions, invisible: !showActions }">
        <ButtonItem :text="'Edit'" :btnType="'secondary'">
          <EditIcon :width="16" :height="16" />
        </ButtonItem>
        <ButtonItem :text="''" :btnType="'secondary'">
          <TrashIcon :width="16" :height="16" />
        </ButtonItem>
      </div>
    </div>
  </div>
</template>

<style scoped>
.selected {
  background-color: var(--c-blue-lighter);
  position: relative;
}

.selected::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 4px;
  background-color: var(--c-btn);
  border-radius: 4px 0 0 4px;
}
</style>
