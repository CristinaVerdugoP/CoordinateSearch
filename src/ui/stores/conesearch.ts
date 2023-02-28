import { defineStore } from "pinia";
import { hmsToDegreesUseCases } from "@/app/use-cases/hmsToDegrees";
import { getCoordinatesUseCase } from "@/app/use-cases/getCoordinates";
import { hmsParse } from "@/ui/stores/hmsParse";
import type {
  HmsHandleSucces,
  RaDecHms,
} from "@/common/use-cases/typeRaDecHms";
import type { ErrorStore } from "@/common/use-cases/callbacks";
interface Coordinates {
  jra: string;
  jdec: string;
}

interface TypeState {
  targetName: string;
  ra: string;
  dec: string;
  radius: string | number;
  raHms: string;
  decHms: string;
  error: ErrorStore;
}

export const useCoordinateStore = defineStore("info", {
  state: (): TypeState => ({
    targetName: "",
    ra: "",
    dec: "",
    radius: "",
    raHms: "",
    decHms: "",
    error: null,
  }),
  actions: {
    resolveName() {
      getCoordinatesUseCase.execute(this.targetName, {
        handleSuccess: (result) => {
          this.ra = String(result.jra);
          this.dec = String(result.jdec);
          this.radius = 1.5;
          console.log(
            "Este es el action del getCoordinates",
            this.ra,
            this.dec
          );
        },
        handleError: (error) => {
          this.error = error;
        },
      });
    },
    hmsDegrees() {
      hmsToDegreesUseCases.execute(radecHmsvalues, {
        handleSuccess: (result: HmsHandleSucces) => {
          this.ra = result.resultRa;
          this.dec = result.resultDec;
        },
        handleError: (error) => {
          this.error = error;
        }
      });
    }

  },
});
