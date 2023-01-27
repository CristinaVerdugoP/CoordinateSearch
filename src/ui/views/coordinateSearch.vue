<template>
  <main>
    <div class="q-pa-md" style="max-width: 400px">
      <q-list bordered separator>
        <q-item>
          <p class="q-mt-md q-ml-sm">Conesearch</p>
        </q-item>

        <q-item class="row">
          <div class="col-6 q-mr-lg">
            <q-input class="q-mr-md" v-model="text" label="Target Name" />
          </div>
          <div class="row-4 q-mt-md q-ml-md">
            <q-btn class="full-width" color="black" label="Resolve" />
            <p class="q-mt-sm text-caption full-width">Provided by Sesame</p>
          </div>
        </q-item>

        <q-item>
          <q-radio
            class="q-mr-xl"
            v-model="shape"
            :value="false"
            val="line"
            label="Degrees"
          />
          <q-radio
            class="q-ml-md"
            v-model="shape"
            :value="true"
            val="line"
            label="HMS/DMS"
          />
        </q-item>

        <q-item class="row justify-between">
          <div class="col q-mr-sm">
            <q-input v-model="text" label="Ra" />
          </div>
          <div class="col q-ml-sm">
            <q-input v-model="text" label="Dec" />
          </div>
        </q-item>

        <q-item>
          <div class="col">
            <q-input v-model="text" label="Radius" />
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
