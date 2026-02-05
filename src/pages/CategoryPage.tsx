import { useParams, Link } from 'react-router-dom';
import { PartCard } from '../components/PartCard';
import { categories, getPartsByCategory } from '../data/parts';

export function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find(c => c.id === categoryId);
  const parts = categoryId ? getPartsByCategory(categoryId) : [];

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h1>
        <Link to="/categories" className="text-aircraft-blue hover:underline">
          View all categories
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/categories" className="text-aircraft-blue hover:underline text-sm flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Categories
        </Link>
      </div>

      <div className="text-center mb-8">
        <span className="text-5xl mb-4 inline-block">{category.icon}</span>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {category.name}
        </h1>
        <p className="text-gray-600">
          {category.description}
        </p>
      </div>

      {parts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No parts in this category yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {parts.map(part => (
            <PartCard key={part.id} part={part} />
          ))}
        </div>
      )}
    </div>
  );
}
