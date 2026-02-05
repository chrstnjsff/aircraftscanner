import { Link } from 'react-router-dom';
import { AircraftPart } from '../types';
import { categories } from '../data/parts';

interface PartCardProps {
  part: AircraftPart;
}

export function PartCard({ part }: PartCardProps) {
  const category = categories.find(c => c.id === part.category);

  return (
    <Link to={`/part/${part.id}`} className="block">
      <div className="card group cursor-pointer">
        <div className="relative mb-4">
          <img
            src={`${import.meta.env.BASE_URL}parts/${part.image}`}
            alt={part.name}
            className="part-image group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}parts/placeholder.svg`;
            }}
          />
          <span className="absolute top-2 right-2 bg-aircraft-blue text-white text-xs px-2 py-1 rounded-full">
            {category?.icon} {category?.name}
          </span>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800 group-hover:text-aircraft-blue transition-colors">
            {part.name}
          </h3>
          <p className="text-sm text-aircraft-orange font-mono mb-2">
            {part.partNumber}
          </p>
          <p className="text-gray-600 text-sm line-clamp-2">
            {part.description}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            {part.location.split(',')[0]}
          </span>
          <span className="text-xs text-gray-400 group-hover:text-aircraft-blue transition-colors">
            View details →
          </span>
        </div>
      </div>
    </Link>
  );
}
