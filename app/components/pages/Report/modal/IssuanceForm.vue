<script setup>
const emit = defineEmits(['close'])
</script>

<template>
  <div :class="styl['template']">
    <div :class="styl['template__modal']">
      <h1>MODAL</h1>
      <button @click="emit('close')">close</button>
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
    height: 100vh
    width: 100vw
    background: rgba(0,0,0,0.7)
    &__modal
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%, -50%)
        padding: 50px
        background-color: white
        border-radius: 10px
        text-align: center
        button
            outline: 0
            border: 0
            border-radius: 5px
            background-color: red
            margin-top: 30px
            padding: 5px 10px
</style>
