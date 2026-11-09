<script setup>
const props = defineProps({
  slots: {
    type: Array,
    default: () => [] // e.g. [0, 1]
  },
  templates: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <section
    :class="[
      styl['template'], //
      templates.length &&
        templates.map(template => styl[`template--${template}`])
    ]"
  >
    <template v-for="(slot, key) in slots">
      <div
        :key="key"
        :class="styl['template__item']"
        v-if="$slots[slot] && $slots[slot]().length"
      >
        <slot :name="slot" />
      </div>
    </template>
  </section>
</template>

<style lang="stylus" module="styl">
.template
  display: flex
  flex-flow: row wrap
  &--justify-space-between
    justify-content: space-between
</style>
