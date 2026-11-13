<script setup>
const props = defineProps({
  heading: {
    type: Object,
    default: () => ({
      title: {
        level: 1, // h1 to h6
        text: ''
      },
      subtitle: {
        level: 2, // h1 to h6
        text: ''
      }
    })
  },
  templates: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <header
    :class="[
      styl['template'], //
      templates.length && templates.map(item => styl[`template--${item}`])
    ]"
  >
    <div
      role="heading"
      :aria-level="heading.title.level"
      :class="[
        styl['template__title'], //
        heading.title?.templates?.length &&
          heading.title.templates.map(item => styl[`template__title--${item}`])
      ]"
      v-html="heading.title.text"
    ></div>
    <template v-if="heading.subtitle && heading.subtitle.text">
      <div
        role="heading"
        :aria-level="heading.subtitle.level"
        :class="[
          styl['template__subtitle'], //
          heading.subtitle?.templates?.length &&
            heading.subtitle.templates.map(
              item => styl[`template__subtitle--${item}`]
            )
        ]"
        v-html="heading.subtitle.text"
      ></div>
    </template>
  </header>
</template>

<style lang="stylus" module="styl">
.template
  position: relative
  z-index: 1
  &__title
    *,&
      font-weight: var(--bold)
    &--p
      line-height: 1.2
    &--fs-30
      font-size: 30px
  &__subtitle
    color: rgba(0,0,0,0.6)
    &--fs-18
      font-size: 18px
    &--fs-20
      font-size: 20px
</style>
