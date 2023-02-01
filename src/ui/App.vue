<script lang="ts">
import coordinateSearch from "@/ui/components/coordinateSearch.vue";

export default {
  name: "coneSearch",
  components: {
    coordinateSearch,
  },
  created() {
    this.$q.dark.set(true);
  },
};
</script>

<template>
  <coordinateSearch />
</template>
