import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchParts, getPartById } from '../data/parts';
import { AircraftPart } from '../types';

interface SearchBarProps {
  onSearch?: (results: AircraftPart[]) => void;
  placeholder?: string;
  autoNavigate?: boolean;
}

export function SearchBar({ onSearch, placeholder = 'Search by part number or name...', autoNavigate = false }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<AircraftPart[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length >= 2) {
      const results = searchParts(query);
      setSuggestions(results.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // First try exact match
    const exactMatch = getPartById(query);
    if (exactMatch && autoNavigate) {
      navigate(`/part/${exactMatch.id}`);
      return;
    }

    // Otherwise search
    const results = searchParts(query);
    if (autoNavigate && results.length === 1) {
      navigate(`/part/${results[0].id}`);
    } else if (onSearch) {
      onSearch(results);
    }
    setShowSuggestions(false);
  };

  const handleSelectSuggestion = (part: AircraftPart) => {
    setQuery(part.partNumber);
    setShowSuggestions(false);
    if (autoNavigate) {
      navigate(`/part/${part.id}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          placeholder={placeholder}
          className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aircraft-blue focus:border-transparent outline-none transition-all"
        />
        <svg 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-primary py-2 px-4 text-sm"
        >
          Search
        </button>
      </div>

      {/* Suggestions dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          {suggestions.map(part => (
            <button
              key={part.id}
              type="button"
              onClick={() => handleSelectSuggestion(part)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-0"
            >
              <p className="font-medium text-gray-800">{part.name}</p>
              <p className="text-sm text-aircraft-orange font-mono">{part.partNumber}</p>
            </button>
          ))}
        </div>
      )}
    </form>
  );
}
