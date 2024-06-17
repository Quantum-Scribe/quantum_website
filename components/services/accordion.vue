<script setup lang="ts">
const services = readonly < Array < { image: string, title: string, content: string, value: string } >> ([{
  value: 'design',
  image: '/service-textures/design.png',
  title: 'Web & Mobile Design',
  content: 'We are driven by our passion to craft visually.captivating and  functional solutions that convey messages with impact. With a meticulous  attention to detail and a profound grasp of design fundamentals, we  consistently surpass our clients\' expectations by delivering projects  that resonate deeply.',
}, {
  value: 'brand',
  image: '/service-textures/brand.png',
  title: 'Brand Identity',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium sit libero consequatur cumque laboriosam aliquam. Obcaecati aliquam omnis odit consequatur est dolor iste eveniet amet, earum dolores? Fugiat, nesciunt debitis. Illo quaerat sunt ipsa minus commodi voluptatem amet, modi odio tempora voluptate, dolorem dolorum ad error temporibus saepe possimus. ',
}, {
  value: 'apps',
  image: '/service-textures/apps.png',
  title: 'App Development',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium sit libero consequatur cumque laboriosam aliquam. Obcaecati aliquam omnis odit consequatur est dolor iste eveniet amet, earum dolores? Fugiat, nesciunt debitis. Illo quaerat sunt ipsa minus commodi voluptatem amet, modi odio tempora voluptate, dolorem dolorum ad error temporibus saepe possimus. ',
}, {
  value: 'teams',
  image: '/service-textures/teams.png',
  title: 'Team Augmentation',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium sit libero consequatur cumque laboriosam aliquam. Obcaecati aliquam omnis odit consequatur est dolor iste eveniet amet, earum dolores? Fugiat, nesciunt debitis. Illo quaerat sunt ipsa minus commodi voluptatem amet, modi odio tempora voluptate, dolorem dolorum ad error temporibus saepe possimus. ',
}, {
  value: 'consulting',
  image: '/service-textures/consulting.png',
  title: 'Consulting',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium sit libero consequatur cumque laboriosam aliquam. Obcaecati aliquam omnis odit consequatur est dolor iste eveniet amet, earum dolores? Fugiat, nesciunt debitis. Illo quaerat sunt ipsa minus commodi voluptatem amet, modi odio tempora voluptate, dolorem dolorum ad error temporibus saepe possimus. ',
}])
</script>

<template>
  <SAccordion type="multiple" class="w-full" collapsible :default-value="['design']">
    <SAccordionItem v-for="item in services" :key="item.value" :value="item.value">
      <SAccordionTrigger>
        <div class="flex items-center gap-5 md:gap-6 lg:gap-8">
          <NuxtImg :alt="item.title" :src="item.image" sizes="40px sm:80px md:120px lg:150px" class="rounded-full size-10 sm:rounded-md sm:w-20 md:w-32 lg:w-40" />
          <h4 class="text-lg md:text-xl font-semibold">
            {{ item.title }}
          </h4>
        </div>
      </SAccordionTrigger>
      <SAccordionContent class="md:text-lg">
        {{ item.content }}
      </SAccordionContent>
    </SAccordionItem>
  </SAccordion>
</template>
