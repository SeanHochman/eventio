import { useEffect, useCallback, RefObject } from 'react';

export const useClickOutside = (
  ref: RefObject<Element> | Element | null | undefined,
  onClickOutside: (e: Event) => void,
  { disabled }: { disabled: boolean } = { disabled: false }
) => {
  const handleClickOutside = useCallback(
    (event: Event) => {
      const currentRef = ref && ('current' in ref ? ref.current : ref);

      if (!currentRef?.contains(event.target as Node)) {
        onClickOutside(event);
      }
    },
    [ref, onClickOutside]
  );

  useEffect(() => {
    if (!ref || disabled) {
      return;
    }

    const eventType =
      'ontouchstart' in document.documentElement ? 'touchstart' : 'click';

    document.addEventListener(eventType, handleClickOutside);

    return () => {
      document.removeEventListener(eventType, handleClickOutside);
    };
  }, [handleClickOutside, ref, disabled]);
};
