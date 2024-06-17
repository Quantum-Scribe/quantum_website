<script setup lang="ts">
  defineProps<{
    image: string,
    title: string
  }>()
</script>
<template>
  <div class="rounded-lg md:rounded-xl lg:rounded-2xl border-2 md:border-4 border-gray-800 overflow-hidden">
    <NuxtImg :src="image" :alt="title" width="384" height="384" fit="cover" class="w-full"/>
    <h4 class="text-lg md:text-xl font-semibold p-2 md:p-6 lg:p-10">
      {{ title }}
    </h4>
  </div>
</template>