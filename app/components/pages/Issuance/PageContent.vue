<script setup>
import { defineAsyncComponent } from 'vue'

const TopSection = defineAsyncComponent(() => import('./sections/TopSections'))

const ContentSection = defineAsyncComponent(
  () => import('./sections/ContentSection')
)
</script>

<template>
  <TopSection />
  <ContentSection />
</template>
