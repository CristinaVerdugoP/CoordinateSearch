import { defineStore } from "pinia";

export const useCoordinateStore = defineStore("info", {
  state: () => ({
    targetName: "",
    ra: null,
    dec: null,
    radius: null,
  }),
});
