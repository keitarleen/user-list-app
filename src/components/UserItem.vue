<script setup lang="ts">
import { ref } from 'vue'
import ButtonItem from '@/components/ButtonItem.vue'
import EditIcon from '@/components/EditIcon.vue'
import TrashIcon from '@/components/TrashIcon.vue'
import TagItem from '@/components/TagItem.vue'

withDefaults(
  defineProps<{
    selected?: boolean
  }>(),
  { selected: false }
)

const showActions = ref<boolean>(false)

const test = () => {
  showActions.value = true
}
</script>

<template>
  <div
    class="flex items-center gap-2 px-4 py-3 rounded cursor-pointer"
    :class="{ selected: selected }"
    @mouseenter="test()"
    @mouseleave="showActions = false"
  >
    <input type="checkbox" />
    <!-- user data -->
    <div class="flex items-center gap-3 grow-[2]">
      <div class="h-8 w-8 rounded-full overflow-hidden">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" class="object-cover" />
      </div>
      <div class="flex flex-col">
        <div class="text-sm font-medium">Name</div>
        <div class="text-sm">Email</div>
      </div>
    </div>
    <!-- Tag -->
    <div>
      <TagItem :type="'ADMIN'" />
    </div>
    <!-- Actions -->
    <div class="flex gap-1" :class="{ visible: showActions, invisible: !showActions }">
      <ButtonItem :text="'Edit'" :btnType="'secondary'">
        <EditIcon :width="16" :height="16" />
      </ButtonItem>
      <ButtonItem :text="''" :btnType="'secondary'">
        <TrashIcon :width="16" :height="16" />
      </ButtonItem>
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
