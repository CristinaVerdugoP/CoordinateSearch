<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useCoordinateStore } from "@/ui/stores/conesearch";
import { ref, watch } from "vue";
import { raHmsToDegrees, decHmsToDegrees } from "@/app/use-cases/hmsToDegrees";
import { hmsParse } from "../stores/hmsParse";

const coordinate = useCoordinateStore();
const {
  targetName,
  ra = ref(""),
  dec = ref(""),
  radius,
} = storeToRefs(coordinate);

const convertiondegrees = ref("");

watch(convertiondegrees, (conversion) => {
  const parseRa = hmsParse(ra.value);
  const parseDec = hmsParse(dec.value);

  if (conversion === "degrees") {
    const raDegrees: string = raHmsToDegrees(
      Number(parseRa[0]),
      Number(parseRa[1]),
      Number(parseRa[2])
    );
    console.log("este es el valor de ra en grados", raDegrees);
    const decDegrees: string = decHmsToDegrees(
      Number(parseDec[0]),
      Number(parseDec[1]),
      Number(parseDec[2])
    );
    ra.value = raDegrees;
    dec.value = decDegrees;
  }
});
</script>

<template>
  <main>
    <div class="q-pa-md" style="max-width: 400px">
      <q-list bordered separator>
        <q-item>
          <p class="q-mt-md q-ml-sm">Conesearch</p>
        </q-item>
        <!--TARGET-->
        <q-item class="row">
          <div class="col-6 q-mr-lg">
            <q-input
              data-test="targetName"
              class="q-mr-md"
              v-model="targetName"
              label="Target Name"
            />
          </div>
          <!--RESOLVE-->
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
        <!--RADIO BUTTON-->
        <q-item>
          <q-radio
            class="q-mr-xl"
            val="degrees"
            value="degrees"
            label="Degrees"
            id="degrees"
            data-test="buttonDegrees"
            v-model="convertiondegrees"
          />
          <q-radio
            class="q-ml-md"
            val="hms"
            value="hms"
            label="HMS/DMS"
            data-test="buttonHMS"
            v-model="convertiondegrees"
          />
        </q-item>
        <q-item class="row justify-between">
          <!--RA-->
          <div class="col q-mr-sm">
            <q-input data-test="ra" v-model="ra" label="Ra" />
          </div>
          <!--DEC-->
          <div class="col q-ml-sm">
            <q-input data-test="dec" v-model="dec" label="Dec" />
          </div>
        </q-item>
        <!--RADIUS-->
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
