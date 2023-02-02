let testType: string

export function setTestType(ttype: string) {
  testType = ttype
}

export function execute(targetName: string, callbacks: any) {
  if (testType === "success")
    callbacks.handleSuccess({ jra: 1, jdec: 2 })
  else if (testType === "error")
    callbacks.handleError(new Error("error"))
}
