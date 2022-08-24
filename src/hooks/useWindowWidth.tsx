import { useState, useEffect, useMemo } from 'react';

import { isClientSide } from '@common/utils/common';

const DESKTOP_WIDTH = 1024;

const getWidth = () => (isClientSide() ? window.innerWidth : DESKTOP_WIDTH);

export const useWindowWidth = () => {
  const [width, setWidth] = useState(getWidth());
  useEffect(() => {
    setWidth(getWidth());
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 200);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return useMemo(
    () => ({
      isDesktopWidth: width >= DESKTOP_WIDTH,
    }),
    [width]
  );
};
