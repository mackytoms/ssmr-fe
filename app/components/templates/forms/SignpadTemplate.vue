<script setup>
import SignaturePad from 'signature_pad'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: '' // e.g. 'Ask for the signature of the cashier'
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  templates: {
    type: Array,
    default: () => [] // e.g. ['full']
  }
})

// signature as base64 PNG (data:image/png;base64,...) — '' when empty
const model = defineModel({ default: '' })

const canvas = ref(null)
let pad = null

const save = () => {
  model.value = pad.isEmpty() ? '' : pad.toDataURL('image/png')
}

const clear = () => {
  pad.clear()
  model.value = ''
}

// keeps strokes sharp on high-DPI screens; redraws existing strokes after resize
const resizeCanvas = () => {
  const el = canvas.value
  if (!el || !pad) return
  const data = pad.toData()
  const ratio = Math.max(window.devicePixelRatio || 1, 1)
  el.width = el.offsetWidth * ratio
  el.height = el.offsetHeight * ratio
  el.getContext('2d').scale(ratio, ratio)
  pad.clear()
  pad.fromData(data)
}

watch(
  () => props.disabled,
  value => (value ? pad?.off() : pad?.on())
)

onMounted(() => {
  if (!canvas.value) return
  pad = new SignaturePad(canvas.value)
  pad.addEventListener('endStroke', save)
  if (props.disabled) pad.off()
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeCanvas)
  pad?.off()
})

defineExpose({ clear })
</script>

<template>
  <div
    :class="[
      styl['template'],
      ...templates.map(template => styl[`template--${template}`])
    ]"
  >
    <p
      v-if="label"
      :class="styl['template__label']"
    >
      {{ label }}
      <span
        v-if="required"
        :class="styl['template__required']"
      >
        *
      </span>
    </p>
    <p
      v-if="description"
      :class="styl['template__description']"
    >
      {{ description }}
    </p>

    <canvas
      ref="canvas"
      :class="[
        styl['template__canvas'],
        disabled && styl['template__canvas--disabled']
      ]"
    />

    <button
      type="button"
      :class="styl['template__clear']"
      :disabled="disabled"
      @click="clear"
    >
      Clear
    </button>
  </div>
</template>

<style lang="stylus" module="styl">
.template
  display: flex
  flex-direction: column
  gap: 5px
  &--full
    width: 100%
  &__label
    font-size: 14px
    text-transform: capitalize
  &__required
    color: red
  &__description
    font-size: 12px
    color: #666
  &__canvas
    width: 100%
    height: 150px
    border: 1px solid #ccc
    border-radius: 5px
    background-color: #fff
    cursor: crosshair
    touch-action: none
    &--disabled
      cursor: not-allowed
      opacity: 0.6
  &__clear
    align-self: flex-end
    padding: 5px 10px
    border: 1px solid #ccc
    border-radius: 5px
    background-color: #fff
    cursor: pointer
    &:disabled
      cursor: not-allowed
      opacity: 0.6
</style>
