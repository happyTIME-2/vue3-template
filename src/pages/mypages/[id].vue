<script lang="ts" setup>
  const props = defineProps({
    id: String
  })

  useHead({
    title: 'My Pages',
    meta: [
    {
      name: `description`,
      content: `Website description`,
    },
  ],
  })
</script>

<template>
  <h3>Dynamic Routes</h3>
  <p>{{ props?.id }}</p>
</template>
