<script setup lang="ts">
withDefaults(
  defineProps<{
    width?: number
    height?: number
  }>(),
  {
    width: 16,
    height: 16
  }
)
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4751_11)">
      <path
        d="M11.3333 2C11.5084 1.8249 11.7163 1.68601 11.9451 1.59125C12.1738 1.49649 12.419 1.44772 12.6667 1.44772C12.9143 1.44772 13.1595 1.49649 13.3883 1.59125C13.617 1.68601 13.8249 1.8249 14 2C14.1751 2.1751 14.314 2.38297 14.4087 2.61174C14.5035 2.84051 14.5523 3.08571 14.5523 3.33333C14.5523 3.58096 14.5035 3.82615 14.4087 4.05493C14.314 4.2837 14.1751 4.49157 14 4.66667L5 13.6667L1.33333 14.6667L2.33333 11L11.3333 2Z"
        stroke="#A0AEC0"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4751_11">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>
