<script setup lang="ts">
import type { RoleType } from '@/stores/users'

const ROLE = {
  ADMIN: 'Admin',
  AGENT: 'Agent',
  ACCOUNT_MANAGER: 'Account manager',
  EXTERNAL_REVIEWER: 'External reviewer',
  WORKSPACE_MANAGER: 'Workspace manager'
}

defineProps<{
  type: RoleType
}>()
</script>

<template>
  <span
    class="rounded text-xs font-medium px-2 py-1"
    :class="{
      blue: type === 'AGENT',
      purple: type === 'ADMIN',
      pink: type === 'ACCOUNT_MANAGER',
      green: type === 'WORKSPACE_MANAGER',
      yellow: type === 'EXTERNAL_REVIEWER'
    }"
    >{{ ROLE[type] }}</span
  >
</template>

<style scoped>
/* agent */
.blue {
  background-color: #c8e7f9;
  color: #2c5282;
}

/* admin */
.purple {
  background-color: #efe2fe;
  color: #574195;
}

/* account manager */
.pink {
  background-color: #fedde6;
  color: #922b6c;
}

/* workspace manager */
.green {
  background-color: #d0f6d3;
  color: #2e612d;
}

/* external reviewer */
.yellow {
  background-color: #feebc8;
  color: #91472c;
}
</style>
