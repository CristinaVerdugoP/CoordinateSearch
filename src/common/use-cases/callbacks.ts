export type Callbacks = {
  handleSuccess: <Type>(payload: Type) => void;
  handleError: (error: Error) => void;
};

export type ErrorStore = Error | null;
