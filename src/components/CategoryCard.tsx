import { Link } from 'react-router-dom';
import { CategoryInfo } from '../types';
import { getPartsByCategory } from '../data/parts';

interface CategoryCardProps {
  category: CategoryInfo;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const partsCount = getPartsByCategory(category.id).length;

  return (
    <Link to={`/category/${category.id}`} className="block">
      <div className="card group cursor-pointer text-center">
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {category.icon}
        </div>
        <h3 className="font-semibold text-lg text-gray-800 group-hover:text-aircraft-blue transition-colors">
          {category.name}
        </h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {category.description}
        </p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-sm text-aircraft-orange font-semibold">
            {partsCount} {partsCount === 1 ? 'part' : 'parts'}
          </span>
        </div>
      </div>
    </Link>
  );
}
