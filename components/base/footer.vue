<template>
  <footer class="lg:pt-12 p-7 md:pt-9">
    <div class="max-w-screen-lg mx-auto grid grid-cols-2 md:grid-cols-3 auto-rows-auto lg:grid-cols-4 gap-2 md:gap-4 justify-center">
      <NuxtImg class="w-32 md:40 lg:w-52 col-span-2 md:col-span-1" src="/logo-main.png" alt="Quantum Scribe"/>
      <div class="flex flex-col gap-2 md:gap-3">
        <p class="md:text-xl mb-2 md:leading-prose leading-5 max-w-screen-md">
          Navigation
        </p>
        <NuxtLink class="text-sm" to="/services">Our Services</NuxtLink>
        <NuxtLink class="text-sm" to="/projects" >Recent Work</NuxtLink>
        <NuxtLink class="text-sm" to="/our_team">Our Team</NuxtLink>
        <NuxtLink class="text-sm" to="/contact_us">Contact us</NuxtLink>
      </div>
      <div class="flex flex-col gap-2 md:gap-3">
        <p class="md:text-xl md:leading-prose mb-2 leading-5 max-w-screen-md">
          Contact Us
        </p>
        <p class="text-sm">Phone: 123-456-7890</p>
        <p class="text-sm">Office: 123-456-7890</p>
      </div>
      <div class="flex flex-col gap-2 md:gap-3">
        <p class="md:text-xl md:leading-prose mb-2 leading-5 max-w-screen-md">
          Social
        </p>
        <div class="flex gap-4 lg:gap-6">
          <NuxtLink to="/">
            <Icon class="size-6 md:size-8" name="ion:social-facebook" />
          </NuxtLink>
          <NuxtLink to="/">
            <Icon class="size-6 md:size-8" name="ion:social-instagram" />
          </NuxtLink>
          <NuxtLink to="/">
            <Icon class="size-6 md:size-8" name="ion:logo-twitter" />
          </NuxtLink>
          <NuxtLink to="/">
            <Icon class="size-6 md:size-8" name="ion:logo-youtube" />
          </NuxtLink>
        </div>
      </div>
      <div class="border-b-4 my-2 col-span-full border-b-gray-800"></div>
      <p class="col-span-full text-center">© 2024 Quantum Scribe | All Rights Reserved</p>
    </div>
  </footer>
</template>