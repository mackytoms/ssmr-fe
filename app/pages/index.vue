<script setup>
import { defineAsyncComponent } from 'vue'

const PageContent = defineAsyncComponent(
  () => import('~/components/pages/home/PageContent.vue')
)
</script>

<template>
  <PageContent />
</template>
