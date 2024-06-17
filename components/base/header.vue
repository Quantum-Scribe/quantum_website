<script setup lang="ts">
const navLinks = readonly([
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/works', label: 'Works' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
])
</script>

<template>
  <nav class="px-10 py-12 lg:px-20 lg:py-16 flex justify-between bg-transparent">
    <NuxtImg src="/logo-main.png" sizes="134 lg:206" />
    <ul class="hidden md:flex gap-12 items-center">
      <li v-for="link in navLinks" :key="link.to">
        <BaseNavLink :to="link.to">
          {{ link.label }}
        </BaseNavLink>
      </li>
    </ul>

    <SDialog class="md:hidden">
      <SDialogTrigger>
        <SButton variant="outline" size="icon" class="bg-transparent md:hidden">
          <Icon name="mdi:menu" class="size-6" />
        </SButton>
      </SDialogTrigger>
      <SDialogContent class="max-w-md size-full bg-[#030013] text-white border-none top-0 right-0 translate-x-0 translate-y-0 left-auto ease-in-out duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right-0 data-[state=open]:slide-in-from-right-0">
        <div class="space-y-4">
          <ul class="flex flex-col gap-12 justify-center items-center">
            <NuxtImg src="/logo-main.png" sizes="134px" />
            <li v-for="link in navLinks" :key="link.to">
              <BaseNavLink :to="link.to">
                {{ link.label }}
              </BaseNavLink>
            </li>
          </ul>
        </div>
      </SDialogContent>
    </SDialog>
  </nav>
</template>
