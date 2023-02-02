import { execute } from "@/app/use-cases/getCoordinates";
import { defineStore } from "pinia";

export const useCoordinateStore = defineStore("info", {
  state: () => ({
    targetName: "",
    ra: null,
    dec: null,
    radius: null,
    error: null
  }),
  actions: {
    resolveName() {
      execute(this.targetName, {
        handleSuccess: (result) => {
          this.ra = result.jra
          this.dec = result.jdec
          this.radius = 1.5
        },
        handleError: (error) => {
          this.error = error
        }
      })
    }
  }
});
