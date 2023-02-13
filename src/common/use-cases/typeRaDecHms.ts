export type raDecHms = {
  raHms: (ra: number) => string;
  decHms: (dec: number) => string;
};

export type hmsToDegreesResult = number;

export type Ra = {
  hrs: number;
  min: number;
  sec: number;
};
export type Dec = {
  hrs: number;
  min: number;
  sec: number;
};

export type hmsRaDec = {
  rahms: number;
  dechms: number;
};
interface raDecHms2 {
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
export type { raDecHms2 };
