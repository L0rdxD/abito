export type UseClearControlResult = {
  showClear: boolean;
  onClear: () => void;
};

export function useClearControl(
  query: string,
  reset: () => void,
  setQuery?: (q: string) => void
): UseClearControlResult {
  const showClear = Boolean(String(query || '').trim());

  const onClear = () => {
    if (setQuery) setQuery('');
    reset();
  };

  return { showClear, onClear };
}

export default useClearControl;
