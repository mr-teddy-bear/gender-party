export const deviceSizes = {
  mobile: 370,
  tablet: 768,
  laptop: 1199,
  largeLaptop: 1680,
};

export const device = {
  mobile: `(max-width: ${deviceSizes.mobile}px)`,
  tablet: `(max-width: ${deviceSizes.tablet - 1}px)`,
  laptop: `(max-width: ${deviceSizes.laptop}px)`,
  maxlargeLaptop: `(max-width: ${deviceSizes.largeLaptop - 1}px)`,
  minLaptop: `(min-width: ${deviceSizes.laptop + 1}px)`,
  minTablet: `(min-width: ${deviceSizes.tablet + 1}px)`,
  minlargeLaptop: `(min-width: ${deviceSizes.largeLaptop}px)`,
};
