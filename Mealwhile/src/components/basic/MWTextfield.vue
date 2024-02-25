<template>
  <div>
    <v-text-field :rules="rules" v-model="value" @change="emits('update', value)" name="name" variant="outlined" :label="props.text"></v-text-field>
  </div>
</template>

<script setup>

import { ref } from 'vue'

const props = defineProps(['text', 'rules'])

const emits = defineEmits(['update'])

let value = ref()


</script>

<style scoped></style>
