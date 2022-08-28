export const isClientSide = () => typeof window !== 'undefined';

export const noop = () => void 0;

export const sliceFirstLetter = (str: string) => str.slice(0, 1);
