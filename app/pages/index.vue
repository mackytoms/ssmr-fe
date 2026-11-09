<script setup>
import { defineAsyncComponent } from 'vue'

const PageContent = defineAsyncComponent(
  () => import('~/components/pages/Issuance/PageContent.vue')
)
</script>

<template>
  <PageContent />
</template>
