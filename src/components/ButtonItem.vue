<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'

withDefaults(
  defineProps<{
    text?: string
    btnType?: 'primary' | 'secondary'
    type?: ButtonHTMLAttributes['type']
  }>(),
  {
    btnType: 'primary',
    type: 'button'
  }
)
</script>

<template>
  <button
    class="flex gap-2 px-3 py-2 rounded text-white items-center justify-center"
    :class="{ [btnType]: btnType }"
    :type="type"
  >
    <slot />
    <span v-if="text" class="text-inherit font-medium text-sm">{{ text }}</span>
  </button>
</template>

<style scoped>
.primary {
  background-color: var(--c-btn);
}

.primary:hover {
  background-color: var(--c-btn-hover);
}

.secondary {
  background-color: var(--c-white);
  border: 1px solid var(--c-border);
  color: var(--c-text-btn);

  padding: 6px 8px;
}
</style>
