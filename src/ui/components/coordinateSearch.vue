<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useCoordinateStore } from "@/ui/stores/conesearch";

const coordinate = useCoordinateStore();
const { targetName, ra, dec, radius } = storeToRefs(coordinate);
</script>

<template>
  <main>
    <div class="q-pa-md" style="max-width: 400px">
      <q-list bordered separator>
        <q-item>
          <p class="q-mt-md q-ml-sm">Conesearch</p>
        </q-item>

        <q-item class="row">
          <div class="col-6 q-mr-lg">
            <q-input
              data-test="targetName"
              class="q-mr-md"
              v-model="targetName"
              label="Target Name"
            />
          </div>
          <div class="row-4 q-mt-md q-ml-md">
            <q-btn
              data-test="resolve"
              class="full-width"
              color="black"
              label="Resolve"
              @click="coordinate.resolveName"
            />
            <p class="q-mt-sm text-caption full-width">Provided by Sesame</p>
          </div>
        </q-item>

        <q-item>
          <q-radio class="q-mr-xl" :value="false" val="line" label="Degrees" />
          <q-radio class="q-ml-md" :value="true" val="line" label="HMS/DMS" />
        </q-item>

        <q-item class="row justify-between">
          <div class="col q-mr-sm">
            <q-input data-test="ra" v-model="ra" label="Ra" />
          </div>
          <div class="col q-ml-sm">
            <q-input data-test="dec" v-model="dec" label="Dec" />
          </div>
        </q-item>

        <q-item>
          <div class="col">
            <q-input data-test="radius" v-model="radius" label="Radius" />
          </div>
        </q-item>
      </q-list>
    </div>
  </main>
</template>

<style lang="sass" scoped>
.q-input
  margin: 5px 5px 20px 5px
.q-list
  background: #1e1e1e
</style>
