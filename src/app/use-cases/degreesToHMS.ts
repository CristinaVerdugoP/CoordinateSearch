function raDecToHMS(ra: number, dec: number) {
  if (dec) {
    const sign = dec / Math.abs(dec);
    dec = Math.abs(dec);
    const hrs = Math.floor(dec);
    const min = Math.abs(Math.floor((dec - hrs) * 60));
    const seg = (Math.abs((dec - hrs) * 60) - min) * 60;
    return [sign, hrs, min, seg];
  }
  if (ra) {
    ra = Math.abs(ra);
    const raH = Math.floor(ra / 15);
    const raM = Math.floor((ra / 15 - raH) * 60);
    const raS = ((ra / 15 - raH) * 60 - raM) * 60;
    return [raH, raM, raS];
  }
}

export { raDecToHMS };
