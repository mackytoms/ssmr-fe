<script setup>
import { ref, defineAsyncComponent } from 'vue'

const FormSelection = defineAsyncComponent(
  () => import('../modal/FormSelection.vue')
)
const TAS = defineAsyncComponent(() => import('../modal/TASForm.vue'))
const AFAS = defineAsyncComponent(() => import('../modal/AFASForm.vue'))
const PFAS = defineAsyncComponent(() => import('../modal/PFASForm.vue'))

const is_issuance_status = ref(false)
const active_form = ref(null)

const openIssuance = () => {
  is_issuance_status.value = true
}

const closeIssuance = () => {
  is_issuance_status.value = false
}

const selectForm = form => {
  active_form.value = form
}
</script>

<template>
  <div :class="styl['TopSection']">
    <InlineTemplate
      :slots="[0, 1]"
      :templates="['two', 'align-center']"
    >
      <template #0>
        <HeadingTemplate
          :heading="{
            title: {
              level: 1,
              text: 'Issuance Form',
              templates: ['fs-30']
            },
            subtitle: {
              level: 2,
              text: 'Select a form to issue to cashier',
              templates: ['fs-20']
            }
          }"
        />
      </template>
      <template #1>
        <div :class="styl['TopSection__btn']">
          <ButtonTemplate
            @click="openIssuance"
            tag-type="button"
            :attrs="add_button"
          >
            ADD ISSUANCE
          </ButtonTemplate>
        </div>
      </template>
    </InlineTemplate>
  </div>

  <FormSelection
    v-if="is_issuance_status"
    @close="closeIssuance"
    @select="selectForm"
  />

  <teleport to="#teleports">
    <TAS v-if="active_form === 'TAS'" />
    <PFAS v-if="active_form === 'PFAS'" />
    <AFAS v-if="active_form === 'AFAS'" />
  </teleport>
</template>
<style lang="stylus" module="styl">
.TopSection
  padding-top: 50px
  &__btn
    text-align end
</style>
