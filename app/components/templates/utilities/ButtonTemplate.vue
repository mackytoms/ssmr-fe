<script setup>
defineProps({
  templates: {
    type: Array,
    default: () => ['']
  },
  tagType: {
    type: String,
    default: 'nuxt-link'
  },
  attrs: {
    type: Object,
    default: () => ({
      to: '', // if template is <nuxt-link> tag
      href: '', // if template is <a> tag
      download: '', // if template is <a> tag
      target: '', // if template is <a> tag
      type: '' // if template is <button> tag
    })
  }
})
</script>

<template>
  <div
    :class="[
      styl['template'],
      templates.length &&
        templates.map(template => styl[`template--${template}`])
    ]"
  >
    <template v-if="tagType == 'nuxt-link'">
      <nuxt-link
        v-bind="attrs"
        custom
        v-slot="{ href, navigate, isExactActive }"
      >
        <a
          :class="[
            styl['template__link'],
            isExactActive && styl['template__link--exact']
          ]"
          :href="href"
          @click="navigate"
        >
          <slot />
        </a>
      </nuxt-link>
    </template>
    <template v-else-if="tagType == 'a'">
      <a
        v-bind="attrs"
        :class="styl['template__link']"
      >
        <slot />
      </a>
    </template>
    <template v-else-if="tagType == 'button'">
      <button
        v-bind="attrs"
        :class="styl['template__link']"
      >
        <slot />
      </button>
    </template>
  </div>
</template>

<style lang="stylus" module="styl">
.template
 position: relative
  display: inline-table
  overflow: hidden
  text-align: center
  pointer-events: auto
  transition: .3s ease
  &--primary-button
    & ^[0]__link
      background-color: var(--theme_blue)

      :hover
        background-color: var(--theme_dark_blue)
</style>
