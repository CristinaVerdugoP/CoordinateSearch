import { defineStore } from "pinia";
import { hmsToDegreesUseCases } from "@/app/use-cases/hmsToDegrees";
import { getCoordinatesUseCase } from "@/app/use-cases/getCoordinates";
import { hmsParse } from "@/ui/stores/hmsParse";
import type { HmsHandleSucces } from "@/common/use-cases/typeRaDecHms";
interface TypeState {
  targetName: string;
  ra: string;
  dec: string;
  radius: number;
  raHms: string;
  decHms: string;
  error: string;
}

export const useCoordinateStore = defineStore("info", {
  state: (): TypeState => ({
    targetName: "",
    ra: "",
    dec: "",
    radius: -999,
    raHms: "",
    decHms: "",
    error: "",
  }),
  actions: {
    resolveName() {
      getCoordinatesUseCase.execute(this.targetName, {
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
    hmsDegrees() {
      const parseRa = hmsParse(this.raHms);
      const parseDec = hmsParse(this.decHms);
      const radecHmsvalues = {
        ra: {
          hrs: parseRa[0],
          min: parseRa[1],
          sec: parseRa[2],
        },
        dec: {
          hrs: parseDec[0],
          min: parseDec[1],
          sec: parseDec[2],
        },
      };
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
