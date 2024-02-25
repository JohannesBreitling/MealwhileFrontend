<template>
  <div>
    <v-btn
      class="mw-button"
      :class="{ primary: props.type == 'primary', secondary: props.type == 'secondary' }"
      :block="props.block"
      variant="tonal"
      @click="(e) => emit('click', e)"
      :type="{submit : props.submit}"
      :text="props.text"
    ></v-btn>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },

  block: {
    type: Boolean,
    required: false,
    default: false
  },
  type: {
    validator(value, props) {
      return ['primary', 'secondary'].includes(value)
    }
  },
  submit: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])
</script>

<style scoped>
.mw-button {
  border-radius: 4px !important;
}

.mw-button.primary {
  background-color: #69b673 !important;
  color: #fff !important;
}

.mw-button.secondary {
  background-color: #7b877f !important;
  color: #fff !important;
}
</style>
