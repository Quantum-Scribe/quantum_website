<script setup lang="ts">
 defineProps<{
  to: string,
  label?: string
 }>()
</script>

<template>
  <NuxtLink class="py-3 lg:py-6" :to active-class="border-b-2">
    <slot>
      {{ label ?? 'Link'}}
    </slot>
  </NuxtLink>
</template>
