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
      ...templates.map(template => styl[`template--${template}`])
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
  &--one
    margin:  -10px 0
    & ^[0]__item
      flex: 0 0 calc(100% - 20px)
      margin: 10px 0
  &--two
    margin: 0 -10px
    & ^[0]__item
      flex: 0 0 calc(50% - 20px)
      margin: 0 10px
  &--justify-space-between
    justify-content: space-between
  &--align-center
    align-items: center
</style>
