export type Callbacks = {
  handleSuccess: <ResultType>(payload: ResultType) => void;
  handleError: (error: Error) => void;
};
