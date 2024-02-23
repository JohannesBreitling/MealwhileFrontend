<template>
    <div>
        <v-text-field
            name="name"
            variant="outlined"
            :label="props.text"
            hide-details
        ></v-text-field>
    </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped>

</style>