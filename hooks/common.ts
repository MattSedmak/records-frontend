import { useEffect, useState } from 'react';

export function useResponsiveSM() {
  return useMediaQuery('(min-width: 640px)');
}

export function useResponsiveMD() {
  return useMediaQuery('(min-width: 770px)');
}

export function useResponsiveLG() {
  return useMediaQuery('(min-width: 1024px)');
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    if (media.matches !== matches) setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

export const useOnClickOutside = (ref: any, handler: any) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
