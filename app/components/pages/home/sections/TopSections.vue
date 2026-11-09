<script setup>
import { ref, defineAsyncComponent } from 'vue'

const IssuanceForm = defineAsyncComponent(
  () => import('../modal/IssuanceForm.vue')
)

const is_issuance_status = ref(false)

const openIssuance = () => {
  is_issuance_status.value = true
}

const closeIssuance = () => {
  is_issuance_status.value = false
}
</script>

<template>
  <h1>Issuance Form</h1>
  <button @click="openIssuance">ADD ISSUANCE</button>

  <IssuanceForm
    v-if="is_issuance_status"
    @close="closeIssuance"
  />
</template>
