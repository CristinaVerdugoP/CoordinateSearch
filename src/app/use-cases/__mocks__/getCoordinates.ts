import type { Callbacks } from "@/common/use-cases/callbacks";

let testType: string;

export function setTestType(ttype: string) {
  testType = ttype;
}

export const getCoordinatesUseCase = {
  execute: async (targetName: string, callbacks: Callbacks) => {
    if (testType === "success")
      callbacks.handleSuccess({ jra: "1", jdec: "2" });
    else if (testType === "error") callbacks.handleError(new Error("error"));
  },
};
