<template>
  <main class="main-view">
    <div class="main-container">
      <h1 class="main-title">Einheiten</h1>

      <MWButton @click="state.dialogActive = true" type="primary" text="Neue Einheit erstellen"></MWButton>
      <v-dialog width="500" persistent v-model="state.dialogActive">
        
          <v-card title="Neue Einheit erstellen">
            <v-form>
              <v-container>
                <MWTextField text="Name der Einheit (z. B. Gramm)"></MWTextField>
                <MWTextField class="mt-3" text="Abkürzung (z. B. g)"></MWTextField>
                <MWButton class="mt-3" type="primary" text="Erstellen" block="true"></MWButton>
                <MWButton
                  @click="state.dialogActive = false"
                  class="mt-1"
                  type="secondary"
                  text="Abbrechen"
                  block="true"
                ></MWButton>
              </v-container>
            </v-form>
          </v-card>
      </v-dialog>

      <div class="mt-5">
          <v-card class="mb-3" variant="outlined" v-for="unit in state.units" :key="unit.id">
            <v-card-title>Gramm (g)</v-card-title>
            <v-card-actions>
              <v-btn icon="mdi-pencil"></v-btn>
              <v-btn icon="mdi-delete"></v-btn>
            </v-card-actions>
          </v-card>
      </div>


    </div>
  </main>
</template>

<script setup>
import MWTextField from '../components/basic/MWTextfield.vue'
import MWButton from '../components/basic/MWButton.vue'
import { reactive } from 'vue'
import { apiCaller } from '../assets/js/api/ApiCaller'

apiCaller.get('unit/').then((value) => {
  state.units = value
})

const state = reactive({
  dialogActive: false,
  units: []
})

</script>
