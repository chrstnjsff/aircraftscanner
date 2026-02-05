import { useParams, Link } from 'react-router-dom';
import { PartDetail } from '../components/PartDetail';
import { getPartById } from '../data/parts';

export function PartPage() {
  const { partId } = useParams<{ partId: string }>();
  const part = partId ? getPartById(partId) : undefined;

  if (!part) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Part Not Found</h1>
        <p className="text-gray-600 mb-4">
          The part with ID "{partId}" could not be found.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/" className="btn-primary">
            Scan Another Part
          </Link>
          <Link to="/parts" className="btn-secondary">
            Browse All Parts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/parts" className="text-aircraft-blue hover:underline text-sm flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Parts
        </Link>
      </div>

      <PartDetail part={part} />
    </div>
  );
}
