import type { Callbacks } from "@/common/use-cases/callbacks";
import type { RaDecHms } from "@/common/use-cases/typeRaDecHms";

let testType: string;

export function setTestType(ttype: string) {
  testType = ttype;
}
export function execute(degrees: RaDecHms, callbacks: Callbacks) {
  if (testType === "success")
    callbacks.handleSuccess({ ra: "152.800", dec: "10.187" });
  else if (testType === "error") callbacks.handleError(new Error("error"));
}
