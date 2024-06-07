<template>
  <nav class="px-10 py-8 lg:px-20 lg:py-16 flex justify-between bg-transparent">
    <NuxtImg src="/logo-main.png" sizes="134 lg:206" />
    <ul class="hidden md:flex gap-12 items-center">
      <li class="py-3 lg:py-6">
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </li>
      <li class="py-3 lg:py-6">
        <NuxtLink to="/service">
          Service
        </NuxtLink>
      </li>
      <li class="py-3 lg:py-6">
        <NuxtLink to="/works">
          Works
        </NuxtLink>
      </li>
      <li class="py-3 lg:py-6">
        <NuxtLink to="/team">
          Team
        </NuxtLink>
      </li>
      <li class="py-3 lg:py-6">
        <NuxtLink to="/contact">
          Contact
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
