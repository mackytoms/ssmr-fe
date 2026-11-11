<script setup>
const emit = defineEmits(['close', 'select'])

const select = function (form) {
  emit('select', form)
  emit('close')
}
</script>

<template>
  <div
    :class="styl['template']"
    @click.self="emit('close')"
  >
    <div :class="styl['template__modal']">
      <div
        :class="styl['template__modal-item']"
        @click="select('TAS')"
      >
        <h1>TAS</h1>
      </div>
      <div
        :class="styl['template__modal-item']"
        @click="select('PFAS')"
      >
        <h1>PFAS</h1>
      </div>
      <div
        :class="styl['template__modal-item']"
        @click="select('AFAS')"
      >
        <h1>AFAS</h1>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" module="styl">
.template
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 10
  height: 100vh
  width: 100vw

  background: rgba(0,0,0,0.7)
  &__modal
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    display: flex
    flex-direction: row wrap
    margin: 0  -10px
    padding: 50px
    background-color: white
    border-radius: 10px
    text-align: center
    &-item
      margin: 0 10px
</style>
