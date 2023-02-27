export type HmsRaDec = {
  raHms: string;
  decHms: string;
};

interface HmsHandleSucces {
  resultRa: string;
  resultDec: string;
}

export type hmsdegree = {
  hms: (hms: number) => string;
};
interface RaDecHms {
  ra: {
    hrs: number;
    min: number;
    sec: number;
  };
  dec: {
    hrs: number;
    min: number;
    sec: number;
  };
}
export type { RaDecHms, HmsHandleSucces };
