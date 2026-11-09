<script setup>
import { defineAsyncComponent } from 'vue'

const PageContent = defineAsyncComponent(
  () => import('~/components/pages/Remittance/PageContent.vue')
)
</script>

<template>
  <PageContent />
</template>
