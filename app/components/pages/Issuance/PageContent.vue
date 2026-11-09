<script setup>
import { defineAsyncComponent } from 'vue'

const TopSection = defineAsyncComponent(
  () => import('./sections/TopSections.vue')
)
</script>

<template>
  <TopSection />
</template>
