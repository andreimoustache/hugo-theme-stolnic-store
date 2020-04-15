export const NumberRounder = {
  toTwoDecimals: (n: number) => {
    return Math.round((n + Number.EPSILON) * 100) / 100;
  },
};
