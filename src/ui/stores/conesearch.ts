import { execute } from "@/app/use-cases/getCoordinates";
import { execute } from "@/app/use-cases/hmsToDegrees";
import { defineStore } from "pinia";
interface TypeState {
  targetName: string;
  ra: number | null;
  dec: number | null;
  radius: number | null;
  raHms: number | null | string;
  decHms: number | null | string;
  error: string | null;
}

export const useCoordinateStore = defineStore("info", {
  state: (): TypeState => ({
    targetName: "",
    ra: null,
    dec: null,
    radius: null,
    raHms: null,
    decHms: null,
    error: null,
  }),
  actions: {
    resolveName() {
      execute(this.targetName, {
        handleSuccess: (result) => {
          this.ra = result.jra;
          this.dec = result.jdec;
          this.radius = 1.5;
        },
        handleError: (error) => {
          this.error = error;
        },
      });
    },
  },
});
