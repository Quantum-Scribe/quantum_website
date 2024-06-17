<template>
  <div>
    <BaseSection>
      <header class="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col auto-rows-auto md:place-items-center gap-4">
        <h1 class="text-2xl leading-8 md:text-5xl md:leading-normal font-semibold">
          Crafting Digital Excellence
          For Your Success!
        </h1>
        <h2 class="text-sm leading-5  md:text-xl md:leading-loose">
          Specializing in mobile app development, web development,
          graphic design, consulting, and more, we empower
          businesses and individuals with tailored excellence
        </h2>
        <div class="flex justify-between gap-6 lg:gap-12 justify-self-start">
          <BaseButton variant="filled">
            Our Service
          </BaseButton>
          <BaseButton variant="outlined">
            Contact Us <Icon name="ph:usb-thin" />
          </BaseButton>
        </div>
        <NuxtImg src="/header-background.png" class="hidden md:block place-self-center md:col-start-2 md:row-span-3" sizes="30vw md:45vw" />
      </header>
    </BaseSection>
    <BaseSection id="services">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 items-center">
        <p class="md:col-span-2 md:text-xl md:leading-prose leading-5 max-w-screen-md">
          We are driven by our passion to craft visually captivating and  functional solutions that convey messages with impact. With a meticulous  attention to detail and a profound grasp of design fundamentals, we  consistently surpass our clients' expectations by delivering projects  that resonate deeply.
        </p>
        <div class="md:col-span-1 grid row-start-1 md:col-start-3 grid-cols-3 auto-cols-max gap-x-7 gap-y-6 md:grid-cols-2 md:justify-items-end">
          <NuxtImg src="/logos/Full Logos Mono-1.png" alg="Logo 1" width="90" />
          <NuxtImg src="/logos/Full Logos Mono-2.png" alg="Logo 2" width="90" />
          <NuxtImg src="/logos/Full Logos Mono-3.png" alg="Logo 3" width="90" />
          <NuxtImg src="/logos/Full Logos Mono-4.png" alg="Logo 4" width="90" />
          <NuxtImg src="/logos/Full Logos Mono-5.png" alg="Logo 5" width="90" />
          <NuxtImg src="/logos/Full Logos Mono.png" alg="Logo 6" width="90" />
        </div>
      </div>
    </BaseSection>
    <BaseSection>
      <div class="space-y-4 md:space-y-8 lg:space-y-12">
        <BaseSectionTitle title="Our Services" />
        <ServicesAccordion />
      </div>
    </BaseSection>
    <BaseSection>
      <div class="space-y-4 md:space-y-8 lg:space-y-12">
        <BaseSectionTitle title="Recent Works" />
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard image="/projects/quantum_scribe.png" title="Quantum Scribe" />
          <ProjectCard image="/projects/john_mayer_nyc.png" title="John Mayer NYC" />
          <ProjectCard image="/projects/nayzak_patterns.png" title="Nayzak Patterns" />
          <ProjectCard image="/projects/crave_chips.png" title="Crave Chips" />
        </div>
        <NuxtLink class="inline-block border-4 border-gray-800 rounded-full w-full py-4 text-center md:text-lg lg:text-xl" to="/">
          View all works <Icon name="mdi:arrow-top-right" class="size-4 md:size-6 lg:size-8" />
        </NuxtLink>
      </div>
    </BaseSection>
    <BaseSection id="recent-works">
      <div class="space-y-4 md:space-y-8 lg:space-y-12">
        <BaseSectionTitle title="Technologies" />
        <p class="md:text-xl md:leading-prose leading-5">
          Unlock innovation with versatile programming languages. Our expertise  ensures seamless functionality and top-tier performance. Elevate your  projects with us.
        </p>
        <div class="flex gap-2 md:gap-6 lg:gap-10 flex-wrap items-center">
          <NuxtImg width="100" height="100" src="/technologies/vue.png" alt="Vue JS" />
          <NuxtImg width="100" height="100" src="/technologies/vue.png" alt="Vue JS" />
          <NuxtImg width="100" height="100" src="/technologies/vue.png" alt="Vue JS" />
          <NuxtImg width="100" height="100" src="/technologies/vue.png" alt="Vue JS" />
          <NuxtImg width="100" height="100" src="/technologies/vue.png" alt="Vue JS" />
          <NuxtImg width="100" height="100" src="/technologies/vue.png" alt="Vue JS" />
          <NuxtImg width="100" height="100" src="/technologies/vue.png" alt="Vue JS" />
          <NuxtImg width="100" height="100" src="/technologies/vue.png" alt="Vue JS" />
          <NuxtImg width="100" height="100" src="/technologies/vue.png" alt="Vue JS" />
          <NuxtImg width="100" height="100" src="/technologies/vue.png" alt="Vue JS" />
          <NuxtImg width="100" height="100" src="/technologies/vue.png" alt="Vue JS" />
          <NuxtImg width="100" height="100" src="/technologies/vue.png" alt="Vue JS" />
          <NuxtImg width="100" height="100" src="/technologies/vue.png" alt="Vue JS" />
          <NuxtImg width="100" height="100" src="/technologies/vue.png" alt="Vue JS" />
        </div>
      </div>
    </BaseSection>
  </div>
</template>
