<script setup lang="ts">
import { ConfigProvider } from 'radix-vue';
import { useId } from '#app'; // Using useId from nuxt as it is SSR friendly 

function useIdFunction() {
  return useId()
}
</script>

<template>
  <div class="bg-[#030013] min-h-screen text-white">
    <ConfigProvider :use-id="useIdFunction">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </ConfigProvider>
  </div>
</template>
