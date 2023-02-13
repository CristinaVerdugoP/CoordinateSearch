import type { raDecHms2 } from "@/common/use-cases/typeRaDecHms";
import type { Callbacks } from "@/common/use-cases/callbacks";

function raHmsToDegrees(hrs: number, min: number, sec: number): string {
  const degreesRa = ((hrs + min / 60 + sec / 3600) * 15).toFixed(3);
  return degreesRa;
}

function decHmsToDegrees(hrs: number, min: number, sec: number): string {
  const degreesDec = (hrs + min / 60 + sec / 3600).toFixed(3);
  return degreesDec;
}

function execute(degrees: raDecHms2, callbacks: Callbacks) {
  type typeError = any;
  try {
    const resultRa = raHmsToDegrees(
      degrees.ra.hrs,
      degrees.ra.min,
      degrees.ra.sec
    );
    const resultDec = decHmsToDegrees(
      degrees.dec.hrs,
      degrees.ra.min,
      degrees.ra.sec
    );
    callbacks.handleSuccess(resultRa);
    callbacks.handleSuccess(resultDec);
  } catch (error: typeError) {
    callbacks.handleError(error);
  }
}
export { raHmsToDegrees, decHmsToDegrees, execute };
