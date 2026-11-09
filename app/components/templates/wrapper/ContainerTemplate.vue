<script setup>
const prop = defineProps({
  templates: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div
    :class="[
      styl['template'],
      ...templates.map(template => styl[`template--${template}`])
    ]"
  >
    <slot />
  </div>
</template>

<style lang="stylus" module="styl">
.template
    width: 100%
    margin: 0 auto
    &--w-1280
        max-width: 1280px
</style>
