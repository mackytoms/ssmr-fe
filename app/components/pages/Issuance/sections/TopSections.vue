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
  <h1>Issuance Form</h1>
  <button @click="openIssuance">ADD ISSUANCE</button>

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
