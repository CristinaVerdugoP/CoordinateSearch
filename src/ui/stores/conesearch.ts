import { execute } from "@/app/use-cases/getCoordinates";
import { execute } from "@/app/use-cases/hmsToDegrees";
import { defineStore } from "pinia";
interface TypeState {
  targetName: string;
  ra: number;
  dec: number;
  radius: number;
  raHms: number | string;
  decHms: number | string;
  error: string;
}

export const useCoordinateStore = defineStore("info", {
  state: (): TypeState => ({
    targetName: "",
    ra: -999,
    dec: -999,
    radius: -999,
    raHms: -999,
    decHms: -999,
    error: "",
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
    hmsParse() {
      
    }
  },
});
