<script setup>
import { defineAsyncComponent } from 'vue'

const TopBar = defineAsyncComponent(() => import('~/components/general/TopBar'))
</script>

<template>
  <ContainerTemplate :templates="['w-1280']">
    <TopBar />

    <slot />
  </ContainerTemplate>
</template>
