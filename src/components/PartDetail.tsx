import { Link } from 'react-router-dom';
import { AircraftPart } from '../types';
import { categories, getPartById } from '../data/parts';

interface PartDetailProps {
  part: AircraftPart;
}

export function PartDetail({ part }: PartDetailProps) {
  const category = categories.find(c => c.id === part.category);
  const relatedParts = part.relatedParts
    .map(id => getPartById(id))
    .filter((p): p is AircraftPart => p !== undefined);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
        <div className="relative">
          <img
            src={`${import.meta.env.BASE_URL}parts/${part.image}`}
            alt={part.name}
            className="w-full h-64 object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}parts/placeholder.svg`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <span className="inline-block bg-aircraft-orange px-3 py-1 rounded-full text-sm mb-2">
              {category?.icon} {category?.name}
            </span>
            <h1 className="text-3xl font-bold">{part.name}</h1>
            <p className="text-white/80 font-mono">{part.partNumber}</p>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-700 leading-relaxed">{part.description}</p>
          
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">{part.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm">{part.manufacturer}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <svg className="w-6 h-6 text-aircraft-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          Specifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(part.specifications).map(([key, value]) => (
            value && (
              <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                <span className="font-medium text-gray-800">{value}</span>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Maintenance Info */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <svg className="w-6 h-6 text-aircraft-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Maintenance Information
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Inspection Interval</h3>
            <p className="text-aircraft-blue font-semibold">{part.maintenanceInfo.inspectionInterval}</p>
            {part.maintenanceInfo.replacementInterval && (
              <>
                <h3 className="font-medium text-gray-700 mb-2 mt-4">Replacement Interval</h3>
                <p className="text-aircraft-orange font-semibold">{part.maintenanceInfo.replacementInterval}</p>
              </>
            )}
          </div>
          
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Required Tools</h3>
            <ul className="space-y-1">
              {part.maintenanceInfo.requiredTools.map((tool, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-aircraft-blue rounded-full" />
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-medium text-gray-700 mb-2">Maintenance Notes</h3>
          <ul className="space-y-2">
            {part.maintenanceInfo.maintenanceNotes.map((note, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-aircraft-blue mt-0.5">•</span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Safety Warnings */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold text-red-800 mb-4 flex items-center gap-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Safety Warnings
        </h2>
        <ul className="space-y-3">
          {part.safetyWarnings.map((warning, index) => (
            <li key={index} className="flex items-start gap-3 text-red-700">
              <span className="font-bold">⚠</span>
              <span>{warning}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Related Parts */}
      {relatedParts.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Related Parts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedParts.map(relatedPart => (
              <Link
                key={relatedPart.id}
                to={`/part/${relatedPart.id}`}
                className="p-4 border border-gray-200 rounded-lg hover:border-aircraft-blue hover:bg-blue-50 transition-colors"
              >
                <p className="font-medium text-gray-800">{relatedPart.name}</p>
                <p className="text-sm text-aircraft-orange font-mono">{relatedPart.partNumber}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
