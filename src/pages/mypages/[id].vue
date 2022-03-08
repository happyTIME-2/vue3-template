<script lang="ts" setup>
  const props = defineProps({
    id: String
  })
</script>

<template>
  <h3>Dynamic Routes</h3>
  <p>{{ props?.id }}</p>
</template>
