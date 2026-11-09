<script setup>
import { useLinksStore } from '~/store/links'

const links = useLinksStore().links
</script>

<template>
  <InlineTemplate
    :slots="[0, 1]"
    :templates="['justify-space-between']"
    :class="styl['template']"
  >
    <template #0><h1>LOGO</h1></template>
    <template #1>
      <ul :class="styl['template__list']">
        <li
          v-for="(item, key) in links"
          :key="key"
          :class="styl['template__list-item']"
        >
          <NuxtLink
            :to="item.to"
            :class="styl['template__list-item__link']"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </template>
  </InlineTemplate>
</template>
<style lang="stylus" module="styl">
.template
  &__list
    display: flex
    flex-flow: row no-wrap
    margin: 0 -10px
    &-item
      margin: 0 10px
      list-style: none
</style>
