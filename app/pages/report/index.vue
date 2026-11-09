<script setup>
import { defineAsyncComponent } from 'vue'

const PageContent = defineAsyncComponent(
  () => import('~/components/pages/Report/PageContent.vue')
)
</script>

<template>
  <PageContent />
</template>
