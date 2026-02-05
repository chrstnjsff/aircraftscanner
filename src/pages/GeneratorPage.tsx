import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import QRCode from 'qrcode';
import { aircraftParts, categories } from '../data/parts';
import { AircraftPart } from '../types';

interface QRLabel {
  part: AircraftPart;
  dataUrl: string;
}

export function GeneratorPage() {
  const [selectedParts, setSelectedParts] = useState<Set<string>>(new Set());
  const [qrLabels, setQrLabels] = useState<QRLabel[]>([]);
  const [generating, setGenerating] = useState(false);
  const [labelSize, setLabelSize] = useState<'small' | 'medium' | 'large'>('medium');
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'Aircraft Parts QR Labels',
  });

  const togglePart = (partId: string) => {
    const newSelected = new Set(selectedParts);
    if (newSelected.has(partId)) {
      newSelected.delete(partId);
    } else {
      newSelected.add(partId);
    }
    setSelectedParts(newSelected);
  };

  const selectAll = () => {
    setSelectedParts(new Set(aircraftParts.map(p => p.id)));
  };

  const selectNone = () => {
    setSelectedParts(new Set());
  };

  const selectCategory = (categoryId: string) => {
    const categoryParts = aircraftParts.filter(p => p.category === categoryId);
    const newSelected = new Set(selectedParts);
    categoryParts.forEach(p => newSelected.add(p.id));
    setSelectedParts(newSelected);
  };

  const generateQRCodes = async () => {
    setGenerating(true);
    const labels: QRLabel[] = [];

    for (const partId of selectedParts) {
      const part = aircraftParts.find(p => p.id === partId);
      if (part) {
        try {
          const dataUrl = await QRCode.toDataURL(part.id, {
            width: 200,
            margin: 1,
            color: {
              dark: '#1e3a5f',
              light: '#ffffff',
            },
          });
          labels.push({ part, dataUrl });
        } catch (err) {
          console.error('Error generating QR code:', err);
        }
      }
    }

    setQrLabels(labels);
    setGenerating(false);
  };

  const sizeClasses = {
    small: 'w-32 p-2',
    medium: 'w-48 p-3',
    large: 'w-64 p-4',
  };

  const qrSizes = {
    small: 'w-20 h-20',
    medium: 'w-32 h-32',
    large: 'w-44 h-44',
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          QR Code Generator
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Generate printable QR code labels for aircraft parts
        </p>
      </div>

      {qrLabels.length === 0 ? (
        <>
          {/* Part Selection */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Select Parts ({selectedParts.size} selected)
              </h2>
              <div className="flex gap-2">
                <button onClick={selectAll} className="text-sm text-aircraft-blue hover:underline">
                  Select All
                </button>
                <span className="text-gray-300">|</span>
                <button onClick={selectNone} className="text-sm text-aircraft-blue hover:underline">
                  Select None
                </button>
              </div>
            </div>

            {/* Category quick select */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => selectCategory(cat.id)}
                  className="px-3 py-1 text-sm bg-gray-100 hover:bg-aircraft-blue hover:text-white rounded-full transition-colors"
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>

            {/* Parts grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {aircraftParts.map(part => {
                const isSelected = selectedParts.has(part.id);
                const category = categories.find(c => c.id === part.category);
                return (
                  <button
                    key={part.id}
                    onClick={() => togglePart(part.id)}
                    className={`p-3 rounded-lg border-2 text-left transition-all ${
                      isSelected
                        ? 'border-aircraft-blue bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {}}
                        className="mt-1 accent-aircraft-blue"
                      />
                      <div>
                        <p className="font-medium text-gray-800 text-sm">{part.name}</p>
                        <p className="text-xs text-aircraft-orange font-mono">{part.partNumber}</p>
                        <p className="text-xs text-gray-500 mt-1">{category?.icon} {category?.name}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Label Size Selection */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Label Size</h2>
            <div className="flex gap-2 sm:gap-4">
              {(['small', 'medium', 'large'] as const).map(size => (
                <button
                  key={size}
                  onClick={() => setLabelSize(size)}
                  className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 rounded-lg border-2 capitalize transition-all text-sm sm:text-base ${
                    labelSize === size
                      ? 'border-aircraft-blue bg-blue-50 text-aircraft-blue'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <div className="text-center">
            <button
              onClick={generateQRCodes}
              disabled={selectedParts.size === 0 || generating}
              className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {generating ? 'Generating...' : `Generate ${selectedParts.size} QR Labels`}
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Generated Labels */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                Generated Labels ({qrLabels.length})
              </h2>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button
                  onClick={() => setQrLabels([])}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
                >
                  Back to Selection
                </button>
                <button
                  onClick={() => handlePrint()}
                  className="btn-primary flex items-center justify-center gap-2 text-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print Labels
                </button>
              </div>
            </div>

            {/* Preview */}
            <div ref={printRef} className="print:p-0">
              <div className="flex flex-wrap gap-4 justify-center print:gap-2">
                {qrLabels.map(({ part, dataUrl }) => {
                  const category = categories.find(c => c.id === part.category);
                  return (
                    <div
                      key={part.id}
                      className={`${sizeClasses[labelSize]} bg-white border-2 border-gray-300 rounded-lg text-center print:break-inside-avoid print:border-black`}
                    >
                      <img
                        src={dataUrl}
                        alt={`QR Code for ${part.id}`}
                        className={`${qrSizes[labelSize]} mx-auto`}
                      />
                      <p className="font-bold text-gray-800 text-xs mt-2 leading-tight">
                        {part.name}
                      </p>
                      <p className="font-mono text-aircraft-orange text-xs font-bold">
                        {part.partNumber}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {category?.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Print instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
            <p className="text-blue-800 text-sm">
              <strong>Tip:</strong> For best results, print on adhesive label paper. 
              The labels are designed to be cut and attached to aircraft parts.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
