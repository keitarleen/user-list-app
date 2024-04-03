<script setup lang="ts">
import SearchIcon from '@/components/SearchIcon.vue'

defineProps<{
  placeholder?: string
}>()

const value = defineModel()
</script>

<template>
  <div class="grow relative">
    <input v-model="value" :placeholder="placeholder" class="p-2 pl-9 rounded w-full text-sm" />
    <span class="absolute top-2.5 left-3">
      <SearchIcon :width="16" :height="16" />
    </span>
  </div>
</template>

<style scoped>
input {
  border: 1px solid var(--c-border);
}
</style>
