<template>
  <main class="main-view">
    <div class="main-container">
      <h1 class="main-title">Einheiten</h1>

      <MWButton @click="state.dialogActive = true" type="primary" text="Neue Einheit erstellen"></MWButton>
      <v-dialog width="500" persistent v-model="state.dialogActive">
        
          <v-card title="Neue Einheit erstellen">
            <v-form @submit.prevent>
              <v-container>
                <MWTextField :rules="[unitNameRule]" @update="(v) => createUnitState.name = v" text="Name der Einheit (z. B. Gramm)"></MWTextField>
                <MWTextField @update="(v) => createUnitState.abbreviation = v" class="mt-3" text="Abkürzung (z. B. g)"></MWTextField>
                <MWButton
                  class="mt-3"
                  type="primary"
                  @click="createUnit()"
                  text="Erstellen" block="true"></MWButton>
                <MWButton
                  @click="state.dialogActive = false"
                  submit="true"
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
          <div v-if="state.unitsLoading">
            <v-skeleton-loader class="mb-5 entity-card-loader" type="heading, text, actions"></v-skeleton-loader>
          </div>

          <div v-if="!state.unitsLoading">
            <MWEntityCard class="mb-3" v-for="unit in state.units" v-bind:key="unit.Id" :id="unit.Id" :title="unit.Name + ' (' + unit.Abbreviation + ')'"></MWEntityCard>
          </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import MWTextField from '../components/basic/MWTextfield.vue'
import MWButton from '../components/basic/MWButton.vue'
import MWEntityCard from '../components/basic/cards/MWEntityCard.vue'
import { reactive } from 'vue'
import { apiCaller } from '../assets/js/api/ApiCaller'

const state = reactive({
  dialogActive: false,
  units: [],
  unitsLoading: false,
})

const unitNameRule = (s) => {
  if (!s) return 'Gib einen Namen für die Einheit ein!'

  return true
}

state.unitsLoading = true
  apiCaller.get('unit/').then((value) => {
  state.units = value
  state.unitsLoading = false
})

let createUnitState = reactive({
  name: "",
  abbreviation: ""
})

const createUnit = () => {
  console.log(createUnitState.name, createUnitState.abbreviation)
}

// apiCaller.post('unit/', {"name": "Gramm", "abbreviation": "g"})



</script>
