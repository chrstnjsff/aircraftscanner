import { useState } from 'react';
import { PartCard } from '../components/PartCard';
import { SearchBar } from '../components/SearchBar';
import { aircraftParts } from '../data/parts';
import { AircraftPart } from '../types';

export function PartsPage() {
  const [filteredParts, setFilteredParts] = useState<AircraftPart[]>(aircraftParts);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleSearch = (results: AircraftPart[]) => {
    setFilteredParts(results);
    setIsFiltered(true);
  };

  const clearFilter = () => {
    setFilteredParts(aircraftParts);
    setIsFiltered(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Aircraft Parts Database
        </h1>
        <p className="text-gray-600">
          Browse all available aircraft parts in the system
        </p>
      </div>

      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>

      {isFiltered && (
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            Showing {filteredParts.length} of {aircraftParts.length} parts
          </p>
          <button
            onClick={clearFilter}
            className="text-aircraft-blue hover:underline text-sm"
          >
            Clear filter
          </button>
        </div>
      )}

      {filteredParts.length === 0 ? (
        <div className="text-center py-12">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-gray-500">No parts found matching your search</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredParts.map(part => (
            <PartCard key={part.id} part={part} />
          ))}
        </div>
      )}
    </div>
  );
}
