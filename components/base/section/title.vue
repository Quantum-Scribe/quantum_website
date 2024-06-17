<script setup lang="ts">
  withDefaults(defineProps<{
    icon?: string,
    title: string
  }>(), {
    icon: "material-symbols-light:subdirectory-arrow-right-rounded"
  })
</script>
<template>
  <div class="flex gap-4 md:gap-6 items-center">
    <Icon :name="icon" class="size-4 md:size-6 lg:size-8" />
    <p class="text-xl md:text-2xl lg:text-3xl font-semibold">
      {{ title }}
    </p>
  </div>
</template>
