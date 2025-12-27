import { useState, useCallback, useEffect } from 'react';
import { filterCards } from './filterCards';

export type UseSearchResult<T> = {
  query: string;
  setQuery: (q: string) => void;
  filtered: T[];
  handleSearch: () => void;
  reset: () => void;
};

export function useSearch<T = any>(initialCards: T[] = []): UseSearchResult<T> {
  const [query, setQueryState] = useState('');
  const [filtered, setFiltered] = useState(initialCards as T[]);

  useEffect(() => {
    setFiltered(initialCards as T[]);
  }, [initialCards]);

  useEffect(() => {
    if (!query.trim()) {
      setFiltered(initialCards as T[]);
      return;
    }
    setFiltered(filterCards(initialCards as any[], query) as T[]);
  }, [query, initialCards]);

  const handleSearch = useCallback(() => {
    setFiltered(filterCards(initialCards as any[], query) as T[]);
  }, [initialCards, query]);

  const reset = useCallback(() => {
    setQueryState('');
    setFiltered(initialCards as T[]);
  }, [initialCards]);

  const setQuery = (q: string) => setQueryState(q);

  return { query, setQuery, filtered, handleSearch, reset };
}

export default useSearch;
