import { useEffect, useState } from 'react';

export function useResponsiveSM() {
  return useMediaQuery('(min-width: 640px)');
}

export function useResponsiveMD() {
  return useMediaQuery('(min-width: 768px)');
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
