import { useEffect, useRef, useState } from 'react';
import { Html5Qrcode, Html5QrcodeScannerState } from 'html5-qrcode';

interface QRScannerProps {
  onScan: (result: string) => void;
  onError?: (error: string) => void;
}

export function QRScanner({ onScan, onError }: QRScannerProps) {
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasCamera, setHasCamera] = useState(true);

  useEffect(() => {
    return () => {
      if (scannerRef.current) {
        const state = scannerRef.current.getState();
        if (state === Html5QrcodeScannerState.SCANNING) {
          scannerRef.current.stop().catch(console.error);
        }
      }
    };
  }, []);

  const startScanning = async () => {
    setError(null);

    if (!containerRef.current) return;

    try {
      const devices = await Html5Qrcode.getCameras();
      if (devices.length === 0) {
        setHasCamera(false);
        setError('No camera found on this device');
        return;
      }

      scannerRef.current = new Html5Qrcode('qr-reader');

      await scannerRef.current.start(
        { facingMode: 'environment' },
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
          aspectRatio: 1.0,
        },
        (decodedText) => {
          onScan(decodedText);
          stopScanning();
        },
        () => {
          // QR code not found in this frame - ignore
        }
      );

      setIsScanning(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to start camera';
      setError(message);
      onError?.(message);
    }
  };

  const stopScanning = async () => {
    if (scannerRef.current) {
      try {
        const state = scannerRef.current.getState();
        if (state === Html5QrcodeScannerState.SCANNING) {
          await scannerRef.current.stop();
        }
      } catch (err) {
        console.error('Error stopping scanner:', err);
      }
    }
    setIsScanning(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="card">
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Scan Part QR Code
          </h2>
          <p className="text-gray-600 text-sm">
            Point your camera at the QR code on the aircraft part
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
            <p className="text-sm">{error}</p>
          </div>
        )}

        <div 
          ref={containerRef}
          className="relative bg-gray-100 rounded-lg overflow-hidden mb-4"
          style={{ minHeight: '300px' }}
        >
          <div id="qr-reader" className="w-full" />

          {!isScanning && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
              <svg 
                className="w-24 h-24 text-gray-400 mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5}
                  d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                />
              </svg>
              <p className="text-gray-500">Camera preview will appear here</p>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          {!isScanning ? (
            <button
              onClick={startScanning}
              disabled={!hasCamera}
              className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Start Scanning
            </button>
          ) : (
            <button
              onClick={stopScanning}
              className="btn-secondary flex-1 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Stop Scanning
            </button>
          )}
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          Or enter part number manually below
        </p>
      </div>
    </div>
  );
}
