<template>
    <main>

        <h1>Einheiten</h1>



        <v-dialog
            width="500"
            persistent
            v-model="dialog"
        >
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props">Neue Einheit erstellen</v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Neue Einheit erstellen">
                <v-form>
                    <v-container>
                        <MWTextField text="Name der Einheit (z. B. Gramm)"></MWTextField>
                        <MWTextField class="mt-3" text="Abkürzung (z. B. g)"></MWTextField>
                        <MWButton class="mt-3" type="primary" text="Erstellen" block="true"></MWButton>
                        <MWButton
                            class="mt-1"
                            type="secondary"
                            @click="(isActive.value = false)"
                            text="Abbrechen"
                            block="true">
                        </MWButton>
                    </v-container>
                </v-form>
                </v-card>
            </template>
        </v-dialog>        
    </main>
</template>

<script setup>
import MWTextField from '../components/basic/MWTextfield.vue'
import MWButton from '../components/basic/MWButton.vue'
import { ref } from 'vue'

const dialog = ref(false)
</script>