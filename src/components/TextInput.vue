<script setup lang="ts">
defineProps<{
  placeholder?: string
  required?: boolean
}>()

const value = defineModel()
</script>

<template>
  <div class="grow relative">
    <input
      v-model="value"
      class="py-2 px-4 rounded w-full text-sm"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
</template>

<style scoped>
input {
  border: 1px solid var(--c-border);
}
</style>
