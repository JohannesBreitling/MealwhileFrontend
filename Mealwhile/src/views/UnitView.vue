<template>
    <main>
        <v-dialog width="500">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props">Neue Einheit erstellen</v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Neue Einheit erstellen">
                <v-form>
                    <v-container>
                        <v-text-field
                            label="Name der Einheit (z. B. Gramm)"
                            hide-details
                        ></v-text-field>
                        <v-text-field
                            label="Abkürzung (z. B. g)"
                            hide-details
                        ></v-text-field>
                        <v-btn>Erstellen</v-btn><br>
                        <v-btn
                            text="abbrechen"
                            @click="isActive.value = false"
                        ></v-btn>
                    </v-container>
                </v-form>
                </v-card>
            </template>
        </v-dialog>        
    </main>
</template>

<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>