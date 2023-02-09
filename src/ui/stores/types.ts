type CoordinatesInfo = {
  targetName: string | null;
  ra: number | null;
  dec: number | null;
  radius: number | null;
};

export type SearchInput = {
  coordinates: CoordinatesInfo;
};
