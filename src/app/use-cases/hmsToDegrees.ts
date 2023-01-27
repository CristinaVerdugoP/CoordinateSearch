function hmsToDegrees(hrs: number, min: number, sec: number) {
  return hrs + min / 60 + sec / 3600;
}

export { hmsToDegrees };
