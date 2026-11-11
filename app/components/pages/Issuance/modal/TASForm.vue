<script setup>
const cashier_signature = ref('')

import SignaturePad from 'signature_pad'

const canvas = ref(null)
let pad = null

const resizeCanvas = () => {
  if (!pad || !canvas.value) return

  const data = pad.toData()
  const ratio = Math.max(window.devicePixelRatio || 1, 1)
  const el = canvas.value

  el.width = el.offsetWidth * ratio
  el.height = el.offsetHeight * ratio
  el.getContext('2d').scale(ratio, ratio)

  pad.clear()
  pad.fromData(data)
}

const clear = () => pad?.clear()

const getSignature = () =>
  !pad || pad.isEmpty() ? null : pad.toDataURL('image/png')

onMounted(async () => {
  await nextTick()
  if (!canvas.value) return

  pad = new SignaturePad(canvas.value)

  requestAnimationFrame(resizeCanvas)
  window.addEventListener('resize', resizeCanvas)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeCanvas)
  pad?.off()
})
</script>
<template>
  <div :class="styl['tas']">
    <div :class="styl['tas__body']">
      <div :class="styl['tas__body-header']">
        <h1 :class="styl['tas__body-header__heading']">
          token accountability sheet
        </h1>
      </div>
      <div :class="styl['tas__body-content']">
        <InlineTemplate
          :slots="[0, 1]"
          :templates="['two']"
        >
          <template #0>
            <InlineTemplate
              :slots="[0, 1]"
              :templates="['two']"
            >
              <template #0>
                <!-- will active when api is ready -->
                <!-- <DropDownTemplate
                  v-model="sub_branch"
                  label="Sub-branch name"
                  placeholder="Select sub-branch"
                  :options="sub_branches"
                  required
                />
                <DropDownTemplate
                  v-model="shift"
                  label="Shift"
                  placeholder="Select shift"
                  :options="shifts"
                  required
                />
                <DropDownTemplate
                  v-model="cashier"
                  label="Cashier name"
                  placeholder="Select cashier name"
                  :options="cashiers"
                  required
                /> -->
                <h1>hihihihihii</h1>
                <h1>hihihihihii</h1>
              </template>
              <template #1>
                <SignpadTemplate.vue
                  v-model="cashier_signature"
                  label="cashier signature"
                  description="Ask for the signature of the cashier"
                  required
                />
                <h1>hihihihihii</h1>
                <h1>hihihihihii</h1>
              </template>
            </InlineTemplate>
          </template>
          <template #1>
            <p>Issued tokens</p>
            <table>
              <thead>
                <th>Kinds of token</th>
                <th>Quantity</th>
              </thead>
            </table>
            <p>Enter a quantity for every kinds of issued token.</p>
          </template>
        </InlineTemplate>
      </div>
      <div :class="styl['tas__body-footer']">
        <p>Review each entrie before issuance</p>
        <ButtonTemplate :attrs="button">submit</ButtonTemplate>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" module="styl">
*
  outline: 1px solid red
.tas
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 11
  height: 100vh
  width: 100vw
  background-color: rgba(0,0,0, 0.6)
  &__body
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    padding: 20px
    border-radius: 10px
    background-color: #fff
    &-header
      &__heading
        text-transform: uppercase
    &-content
      &__canvas
        height: 150px
        width: 350px
        border: 1px solid black
        cursor: pointer
</style>
