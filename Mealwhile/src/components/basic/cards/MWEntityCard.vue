<template>
    <div class="container">
        <MWCard :title="title" actions="true">
            <template v-slot:actions>
                <v-btn color="#000" @click="emits('edit')" icon="mdi-pencil"></v-btn>
                <v-btn color="#000" @click="emits('delete')" icon="mdi-delete"></v-btn>
            </template>
        </MWCard>
    </div>
</template>

<style scoped>
.container {
    max-width: 500px;
}
</style>

<script setup>
import MWCard from './MWCard.vue'

const emits = defineEmits(['edit', 'delete'])
const props = defineProps(['title', 'id'])


</script>