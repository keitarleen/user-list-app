<script setup lang="ts">
defineProps<{
  placeholder?: string
  options: Array<{ label: string; value: string }>
}>()

const value = defineModel<string>()
</script>

<template>
  <div class="grow relative">
    <select v-model="value" placeholder="placeholder" class="py-2 px-4 rounded w-full text-sm">
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :selected="value === option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<style scoped>
select {
  border: 1px solid var(--c-border);
}
</style>
