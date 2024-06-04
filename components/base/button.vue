<script setup lang="ts">
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const variants = cva('py-3 px-5 md:px-10 rounded-md', {
  variants: {
    variant: {
      filled: 'bg-white text-black',
      outlined: 'bg-transparent border-2 text-white border-white',
    }
  },
})

type ButtonProps = {
  variant: NonNullable<Parameters<typeof variants>[0]>['variant']
}

const props = defineProps<ButtonProps>()
</script>

<template>
  <button :class="twMerge(variants(props))" >
    <slot />
  </button>
</template>
