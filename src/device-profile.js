export function getDeviceProfile() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return {
      isPhone: false,
      isReaderTablet: false,
      isCoarsePointer: false,
      classes: 'device-desktop',
    };
  }

  const ua = navigator.userAgent || '';
  const brands = (navigator.userAgentData?.brands || []).map((brand) => brand.brand).join(' ');
  const width = window.innerWidth || document.documentElement?.clientWidth || 0;
  const height = window.innerHeight || document.documentElement?.clientHeight || 0;
  const shortest = Math.min(width, height);
  const longest = Math.max(width, height);
  const isCoarsePointer = window.matchMedia?.('(pointer: coarse)')?.matches || false;
  const isPhone = shortest <= 520 && isCoarsePointer;
  const isReaderTablet = /boox|onyx|e-?ink/i.test(`${ua} ${brands}`) || (shortest >= 560 && longest >= 850 && isCoarsePointer);
  const classes = [
    isPhone ? 'device-phone' : '',
    isReaderTablet ? 'device-reader-tablet' : '',
    isCoarsePointer ? 'device-touch' : 'device-desktop',
  ].filter(Boolean).join(' ');

  return {
    isPhone,
    isReaderTablet,
    isCoarsePointer,
    classes,
  };
}
