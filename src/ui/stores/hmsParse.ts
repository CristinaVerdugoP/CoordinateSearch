import type { Callbacks } from "@/common/use-cases/callbacks";

function hmsParse(hms: string) {
  const splitHms = hms.split(/:|\s+/).map((x) => +x);
  const hrs = splitHms[0];
  const min = splitHms[1];
  const sec = splitHms[2];
  return [hrs, min, sec];
}

function hmsParseUseCases() {
  return () => {
    function execute(hms: string, callbacks: Callbacks) {
      try {
        const result = hmsParse(hms);
        callbacks.handleSuccess(result);
      } catch (error: any) {
        callbacks.handleError(error);
      }
    }
  }
}

export { hmsParse, hmsParseUseCases };
