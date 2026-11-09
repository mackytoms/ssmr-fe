<script setup>
import { defineAsyncComponent } from 'vue'

const PageContent = defineAsyncComponent(
  () => import('~/components/pages/Transaction/PageContent.vue')
)
</script>

<template>
  <PageContent />
</template>
