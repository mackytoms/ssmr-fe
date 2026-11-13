<script setup>
const data = {
  form_type: '',
  trans_no: '',
  cashier_name: '',
  branch_name: '',
  date: '',
  shift: ''
}
const form_type = ['tas', 'pfas', 'afas']
</script>

<template>
  <div :class="styl['template']">
    <div :class="styl['template__header']">
      <h1 :class="styl['template__header-heading']">TAS</h1>
      <p :class="styl['template__header-transno']">
        TRANS NO.
        <spa>0013790</spa>
      </p>
    </div>
    <div :class="styl['template__body']">
      <InlineTemplate
        :slots="[0, 1]"
        :templates="['one']"
      >
        <template #0>
          <p :class="styl['template__body-cashier']">Jane Doe</p>
          <p :class="styl['template__body-branch']">PECO-MAIN</p>
        </template>
        <template #1>
          <p :class="styl['template__body-date']">11/4/26</p>
          <p :class="styl['template__body-shift']">CLOSING</p>
        </template>
      </InlineTemplate>
      <hr :class="styl['template__break']" />
      <p :class="styl['template__footer']">Issued by John Doe by 3:00pm</p>
    </div>
  </div>
</template>

<style lang="stylus" module="styl">
.template
  display: block
  &__header
    &-heading
      font-size: 16px
      font-weight: bold
    &-transno
      font-size: 12px
      color: rgba(0,0,0,0.6)
      span
        color: rgba(255, 0, 0, 1)
  &__body
    &-shift
      font-size: 12px
  &__break
    margin: 10px 0
  &__footer
    font-size: 12px
</style>
