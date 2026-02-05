import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRScanner } from '../components/QRScanner';
import { SearchBar } from '../components/SearchBar';
import { getPartById } from '../data/parts';

export function ScannerPage() {
  const navigate = useNavigate();
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleScan = (result: string) => {
    setScanResult(result);
    setError(null);

    // Try to find the part by the scanned code
    const part = getPartById(result);
    if (part) {
      navigate(`/part/${part.id}`);
    } else {
      setError(`Part not found: ${result}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Aircraft Parts Scanner
        </h1>
        <p className="text-gray-600">
          Scan a QR code or search for a part to view detailed information
        </p>
      </div>

      <QRScanner onScan={handleScan} />

      {error && (
        <div className="max-w-md mx-auto mt-4">
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg">
            <p className="text-sm">{error}</p>
            <p className="text-xs mt-1 text-yellow-600">
              Scanned value: {scanResult}
            </p>
          </div>
        </div>
      )}

      <div className="mt-8">
        <SearchBar autoNavigate={true} />
      </div>

      {/* Quick access demo codes */}
      <div className="max-w-md mx-auto mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Demo: Try these part numbers</h3>
        <div className="flex flex-wrap gap-2">
          {['ENG-001', 'LDG-001', 'AVI-001', 'WNG-001', 'HYD-001'].map(code => (
            <button
              key={code}
              onClick={() => handleScan(code)}
              className="px-3 py-1 bg-white border border-gray-300 rounded text-sm font-mono hover:bg-aircraft-blue hover:text-white hover:border-aircraft-blue transition-colors"
            >
              {code}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
