<template>
    <div>
        <v-card variant="outlined">
            <v-card-title>{{ title }}</v-card-title>
            



            <v-card-actions v-if="actions" class="actions">
                <slot name="actions"></slot>
            </v-card-actions>
            
        </v-card>
    </div>
</template>

<script setup>

const props = defineProps(['title', 'actions'])




</script>

<style scoped>
.actions {
    justify-content: end;
}

</style>


