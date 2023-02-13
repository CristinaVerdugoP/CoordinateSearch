function hmsParse(hms: string) {
  const splitHms = hms.split(/:|\s+/).map((x) => +x);
  const hrs = splitHms[0];
  const min = splitHms[1];
  const sec = splitHms[2];
  return [hrs, min, sec];
}
export { hmsParse };
