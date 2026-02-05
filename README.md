# Aircraft Parts Scanner

A web application for aircraft mechanics that displays detailed aircraft parts information when scanning QR codes, improving maintenance workflow efficiency.

## Features

- **QR Code Scanning**: Scan QR codes on aircraft parts to instantly view detailed information
- **Comprehensive Parts Database**: 15+ detailed aircraft parts with specifications, maintenance info, and safety warnings
- **Part Categories**: Browse parts by category (Engine, Wing, Landing Gear, Avionics, etc.)
- **Search Functionality**: Search parts by name, part number, or description
- **Responsive Design**: Works on mobile devices for use in the hangar
- **Offline-Ready**: Static site that can work without constant internet connection

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast builds
- **Tailwind CSS** for styling
- **html5-qrcode** for QR code scanning
- **React Router** for navigation
- **GitHub Actions** for CI/CD
- **GitHub Pages** for hosting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/chrstnjsff/aircraftscanner.git
cd aircraftscanner

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

### Scanning QR Codes

1. Navigate to the Scanner page
2. Click "Start Scanning"
3. Point your camera at a QR code containing a part ID
4. View the detailed part information

### Demo Part IDs

For testing, you can use these part IDs:
- `ENG-001` - CFM56-7B Turbofan Engine
- `LDG-001` - Main Landing Gear Strut
- `AVI-001` - Flight Management Computer
- `WNG-001` - Main Wing Spar
- `HYD-001` - Engine-Driven Hydraulic Pump

### Generating QR Codes

To create QR codes for your parts, generate QR codes containing the part ID (e.g., `ENG-001`). Any QR code generator can be used.

## Part Categories

- Engine
- Fuselage
- Wing
- Landing Gear
- Cockpit
- Avionics
- Hydraulics
- Electrical
- Fuel System
- Control Surfaces

## Deployment

The application automatically deploys to GitHub Pages when pushing to the `main` branch.

**Live URL**: https://chrstnjsff.github.io/aircraftscanner/

## Project Structure

```
aircraftscanner/
├── src/
│   ├── components/     # React components
│   ├── data/          # Parts database
│   ├── pages/         # Page components
│   ├── types/         # TypeScript types
│   ├── App.tsx        # Main app component
│   └── main.tsx       # Entry point
├── public/
│   └── parts/         # Part images (SVG)
├── .github/
│   └── workflows/     # CI/CD configuration
└── package.json
```

## Adding New Parts

Edit `src/data/parts.ts` to add new parts following the `AircraftPart` interface:

```typescript
{
  id: 'UNIQUE-ID',
  partNumber: 'PART-NUMBER',
  name: 'Part Name',
  category: 'engine', // or other category
  description: 'Description...',
  // ... other fields
}
```

## Safety Notice

This application is for informational purposes. Always refer to official maintenance manuals and documentation for actual aircraft maintenance procedures.

## License

MIT
