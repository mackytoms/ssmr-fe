<script setup>
const props = defineProps({
  options: {
    type: Array,
    default: () => [] // e.g. [{ label: 'Branch A', value: 1 }] — from API later
  },
  optionLabel: {
    type: String,
    default: 'label' // key to display, e.g. 'name' if the API returns { id, name }
  },
  optionValue: {
    type: String,
    default: 'value' // key to store, e.g. 'id'
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Select an option'
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  templates: {
    type: Array,
    default: () => [] // e.g. ['full']
  }
})

const model = defineModel({ default: '' })

const id = useId()

// supports plain arrays (['A', 'B']) and object arrays ([{ label, value }])
const getLabel = option =>
  typeof option === 'object' ? option[props.optionLabel] : option
const getValue = option =>
  typeof option === 'object' ? option[props.optionValue] : option
</script>

<template>
  <div
    :class="[
      styl['template'],
      ...templates.map(template => styl[`template--${template}`])
    ]"
  >
    <label
      v-if="label"
      :for="id"
      :class="styl['template__label']"
    >
      {{ label }}
      <span
        v-if="required"
        :class="styl['template__required']"
      >
        *
      </span>
    </label>

    <select
      :id="id"
      v-model="model"
      :class="styl['template__select']"
      :required="required"
      :disabled="disabled || loading"
    >
      <option
        value=""
        disabled
      >
        {{ loading ? 'Loading...' : placeholder }}
      </option>
      <option
        v-for="(option, key) in options"
        :key="key"
        :value="getValue(option)"
      >
        {{ getLabel(option) }}
      </option>
    </select>
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
  &__select
    padding: 8px 10px
    border: 1px solid #ccc
    border-radius: 5px
    background-color: #fff
    cursor: pointer
    &:disabled
      cursor: not-allowed
      opacity: 0.6
</style>
