<script setup lang="ts">
 defineProps<{
  to: string,
  label?: string
 }>()
</script>

<template>
  <NuxtLink class="py-3 lg:py-6" :to>
    <slot>
      {{ label ?? 'Link'}}
    </slot>
  </NuxtLink>
</template>
