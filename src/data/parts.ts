import { AircraftPart, CategoryInfo } from '../types';

export const categories: CategoryInfo[] = [
  {
    id: 'engine',
    name: 'Engine',
    description: 'Propulsion system components including turbines, compressors, and combustion chambers',
    icon: '⚙️'
  },
  {
    id: 'fuselage',
    name: 'Fuselage',
    description: 'Main body structure including frames, stringers, and skin panels',
    icon: '🛩️'
  },
  {
    id: 'wing',
    name: 'Wing',
    description: 'Wing structure and components including spars, ribs, and skin',
    icon: '🪽'
  },
  {
    id: 'landing-gear',
    name: 'Landing Gear',
    description: 'Wheels, struts, brakes, and retraction mechanisms',
    icon: '🛞'
  },
  {
    id: 'cockpit',
    name: 'Cockpit',
    description: 'Flight deck instruments, controls, and displays',
    icon: '🎛️'
  },
  {
    id: 'avionics',
    name: 'Avionics',
    description: 'Navigation, communication, and flight management systems',
    icon: '📡'
  },
  {
    id: 'hydraulics',
    name: 'Hydraulics',
    description: 'Hydraulic pumps, actuators, lines, and reservoirs',
    icon: '💧'
  },
  {
    id: 'electrical',
    name: 'Electrical',
    description: 'Generators, batteries, wiring, and circuit breakers',
    icon: '⚡'
  },
  {
    id: 'fuel-system',
    name: 'Fuel System',
    description: 'Fuel tanks, pumps, lines, and fuel management components',
    icon: '⛽'
  },
  {
    id: 'control-surfaces',
    name: 'Control Surfaces',
    description: 'Ailerons, elevators, rudder, flaps, and slats',
    icon: '✈️'
  }
];

export const aircraftParts: AircraftPart[] = [
  {
    id: 'ENG-001',
    partNumber: 'CFM56-7B-001',
    name: 'CFM56-7B Turbofan Engine',
    category: 'engine',
    description: 'High-bypass turbofan engine designed for Boeing 737NG series. Features advanced aerodynamics for improved fuel efficiency and reduced emissions. The CFM56-7B is the exclusive engine for the Boeing 737NG family and has accumulated over 350 million flight hours.',
    location: 'Wing-mounted engine pylon, port and starboard positions',
    manufacturer: 'CFM International',
    specifications: {
      weight: '5,216 lbs (2,366 kg)',
      dimensions: 'Length: 98.7 in, Fan diameter: 61 in',
      material: 'Titanium alloy, Nickel superalloy',
      operatingTemp: 'Max TIT: 1,350°C',
      thrust: '19,500 - 27,300 lbf',
      bypassRatio: '5.1:1',
      lifespan: '20,000+ flight cycles'
    },
    maintenanceInfo: {
      inspectionInterval: 'Every 500 flight hours',
      replacementInterval: 'Hot section: 15,000 cycles',
      maintenanceNotes: [
        'Perform borescope inspection of HPT blades',
        'Check oil consumption trends',
        'Inspect fan blade leading edges for FOD damage',
        'Verify EGT margins within limits'
      ],
      requiredTools: [
        'Borescope kit',
        'Torque wrench set',
        'Oil analysis kit',
        'Blade blending tools'
      ]
    },
    safetyWarnings: [
      'Engine must be at ambient temperature before maintenance',
      'Ensure fuel shutoff valve is closed and tagged',
      'Use hearing protection - noise levels exceed 140dB during operation',
      'Beware of residual rotation after shutdown'
    ],
    image: 'engine-turbofan.svg',
    relatedParts: ['ENG-002', 'FUE-001', 'ELE-002']
  },
  {
    id: 'ENG-002',
    partNumber: 'ENG-NACELLE-001',
    name: 'Engine Nacelle Assembly',
    category: 'engine',
    description: 'Aerodynamic housing that surrounds the engine, providing streamlined airflow and acoustic treatment. Includes thrust reverser mechanisms, inlet cowl, and fan cowl doors for maintenance access.',
    location: 'Surrounding engine assembly on wing pylons',
    manufacturer: 'Spirit AeroSystems',
    specifications: {
      weight: '2,800 lbs (1,270 kg)',
      dimensions: 'Length: 156 in, Diameter: 72 in',
      material: 'Carbon fiber composite, Aluminum alloy',
      operatingTemp: '-65°F to +180°F ambient'
    },
    maintenanceInfo: {
      inspectionInterval: 'Every 300 flight hours',
      maintenanceNotes: [
        'Inspect acoustic panels for delamination',
        'Check thrust reverser actuation system',
        'Verify cowl latch security',
        'Inspect for lightning strike damage'
      ],
      requiredTools: [
        'Composite repair kit',
        'NDT inspection equipment',
        'Cowl handling sling'
      ]
    },
    safetyWarnings: [
      'Support cowl doors properly when open',
      'Check for trapped personnel before closing',
      'Wear safety glasses - composite particles are hazardous'
    ],
    image: 'engine-nacelle.svg',
    relatedParts: ['ENG-001', 'HYD-002']
  },
  {
    id: 'WNG-001',
    partNumber: 'WNG-SPAR-MAIN-001',
    name: 'Main Wing Spar',
    category: 'wing',
    description: 'Primary structural member running spanwise through the wing. Carries the main bending and shear loads from aerodynamic forces. The front and rear spars form the primary wing box structure.',
    location: 'Internal wing structure, full span',
    manufacturer: 'Boeing Commercial Airplanes',
    specifications: {
      weight: '1,850 lbs per spar',
      dimensions: 'Span: 52 ft, Height: 24 in at root',
      material: '7075-T6 Aluminum alloy',
      lifespan: 'Designed for 90,000 flight cycles'
    },
    maintenanceInfo: {
      inspectionInterval: 'Every 6,000 flight hours',
      maintenanceNotes: [
        'Eddy current inspection of spar caps',
        'Visual inspection for corrosion',
        'Check fastener hole conditions',
        'Ultrasonic thickness measurement'
      ],
      requiredTools: [
        'Eddy current equipment',
        'Ultrasonic thickness gauge',
        'Dye penetrant kit',
        'Borescope'
      ]
    },
    safetyWarnings: [
      'Structural component - report any cracks immediately',
      'Do not exceed repair limits per SRM',
      'Ensure proper support before fuel tank entry'
    ],
    image: 'wing-spar.svg',
    relatedParts: ['WNG-002', 'WNG-003', 'FUE-002']
  },
  {
    id: 'WNG-002',
    partNumber: 'WNG-FLAP-001',
    name: 'Trailing Edge Flap Assembly',
    category: 'control-surfaces',
    description: 'High-lift device mounted on the trailing edge of the wing. Extends during takeoff and landing to increase wing area and camber, generating additional lift at lower speeds. Double-slotted design for maximum effectiveness.',
    location: 'Wing trailing edge, inboard and outboard sections',
    manufacturer: 'Boeing Commercial Airplanes',
    specifications: {
      weight: '380 lbs per flap segment',
      dimensions: 'Chord: 48 in, Span: 96 in per segment',
      material: 'Aluminum alloy honeycomb core, Composite skins',
      deflection: '0° to 40° extension'
    },
    maintenanceInfo: {
      inspectionInterval: 'Every 750 flight hours',
      maintenanceNotes: [
        'Check flap track rollers for wear',
        'Inspect actuator attach points',
        'Verify symmetric deployment',
        'Check seals and fairings'
      ],
      requiredTools: [
        'Flap rigging gauge',
        'Actuator test set',
        'Wear measurement tools'
      ]
    },
    safetyWarnings: [
      'Flap area is a crush hazard during operation',
      'Deactivate hydraulic system before work',
      'Install safety locks before inspection'
    ],
    image: 'wing-flap.svg',
    relatedParts: ['WNG-001', 'HYD-001', 'CTL-001']
  },
  {
    id: 'LDG-001',
    partNumber: 'LDG-MLG-STRUT-001',
    name: 'Main Landing Gear Strut',
    category: 'landing-gear',
    description: 'Oleo-pneumatic shock absorber strut for the main landing gear. Absorbs landing loads and provides smooth taxi ride. Contains nitrogen charge and hydraulic fluid for damping. Supports aircraft weight during ground operations.',
    location: 'Main landing gear bay, wing-body junction',
    manufacturer: 'Safran Landing Systems',
    specifications: {
      weight: '1,450 lbs',
      dimensions: 'Extended length: 68 in, Stroke: 18 in',
      material: '300M Steel, Chrome plating',
      pressure: 'Nitrogen: 1,800 psi (extended)',
      lifespan: '60,000 landings'
    },
    maintenanceInfo: {
      inspectionInterval: 'Every 400 landings',
      replacementInterval: '12 years or 60,000 landings',
      maintenanceNotes: [
        'Check strut extension and servicing',
        'Inspect chrome surface for corrosion',
        'Verify nitrogen pressure',
        'Check for hydraulic leaks'
      ],
      requiredTools: [
        'Strut servicing adapter',
        'Nitrogen charging kit',
        'Pressure gauge',
        'Hydraulic fluid test kit'
      ]
    },
    safetyWarnings: [
      'High pressure component - follow pressure release procedures',
      'Support aircraft on jacks before strut servicing',
      'Chrome surface is fragile - protect from impacts'
    ],
    image: 'landing-gear-strut.svg',
    relatedParts: ['LDG-002', 'LDG-003', 'HYD-001']
  },
  {
    id: 'LDG-002',
    partNumber: 'LDG-WHEEL-001',
    name: 'Main Wheel Assembly',
    category: 'landing-gear',
    description: 'Forged aluminum wheel assembly designed for commercial aircraft operations. Features thermal plugs for overheat protection, split rim design for tire changes, and precision-machined bearing surfaces.',
    location: 'Main landing gear axle, two per strut',
    manufacturer: 'Collins Aerospace',
    specifications: {
      weight: '115 lbs (wheel only)',
      dimensions: '46 x 16 in rim size',
      material: '2014-T6 Forged aluminum',
      pressure: 'Tire pressure: 200 psi',
      lifespan: '2,000 landings per tire'
    },
    maintenanceInfo: {
      inspectionInterval: 'Daily preflight / Every 100 landings detailed',
      maintenanceNotes: [
        'Check tire wear and tread depth',
        'Inspect for flat spots and cuts',
        'Verify thermal plug condition',
        'Check wheel bearings for play'
      ],
      requiredTools: [
        'Tire pressure gauge',
        'Tread depth gauge',
        'Wheel bearing puller',
        'Tire bead breaker'
      ]
    },
    safetyWarnings: [
      'Tire is pressurized - use deflation cage for removal',
      'Check for hot brakes before approach',
      'Thermal plugs indicate overheat - do not approach hot wheel'
    ],
    image: 'landing-gear-wheel.svg',
    relatedParts: ['LDG-001', 'LDG-003']
  },
  {
    id: 'LDG-003',
    partNumber: 'LDG-BRAKE-001',
    name: 'Carbon Brake Assembly',
    category: 'landing-gear',
    description: 'Multi-disc carbon brake pack providing high-energy stopping capability. Features carbon-carbon friction material for weight savings and consistent performance. Includes wear indicators and anti-skid integration.',
    location: 'Main wheel assembly, four per aircraft',
    manufacturer: 'Honeywell Aerospace',
    specifications: {
      weight: '95 lbs per brake',
      dimensions: '18.5 in diameter x 8 in depth',
      material: 'Carbon-carbon composite',
      operatingTemp: 'Max: 1,500°C during RTO',
      lifespan: '2,500 landings typical'
    },
    maintenanceInfo: {
      inspectionInterval: 'Every 50 landings',
      maintenanceNotes: [
        'Check brake wear indicator pins',
        'Inspect heat stack for damage',
        'Verify hydraulic pressure and response',
        'Check anti-skid valve operation'
      ],
      requiredTools: [
        'Brake wear gauge',
        'Hydraulic test stand',
        'Heat sink handling tools'
      ]
    },
    safetyWarnings: [
      'Brakes may be extremely hot after landing',
      'Carbon dust is a respiratory hazard - use PPE',
      'Hydraulic pressure in lines - bleed before disconnect'
    ],
    image: 'landing-gear-brake.svg',
    relatedParts: ['LDG-002', 'HYD-001']
  },
  {
    id: 'HYD-001',
    partNumber: 'HYD-PUMP-EDP-001',
    name: 'Engine-Driven Hydraulic Pump',
    category: 'hydraulics',
    description: 'Variable-displacement axial piston pump driven by the engine accessory gearbox. Provides primary hydraulic power for flight controls, landing gear, and brakes. Maintains 3,000 psi system pressure.',
    location: 'Engine accessory gearbox, one per engine',
    manufacturer: 'Parker Aerospace',
    specifications: {
      weight: '28 lbs',
      dimensions: '12 x 6 x 8 in',
      material: 'Aluminum housing, Steel internals',
      pressure: '3,000 psi nominal output',
      flowRate: '26 GPM at 3,000 RPM'
    },
    maintenanceInfo: {
      inspectionInterval: 'Every 1,000 flight hours',
      replacementInterval: 'On condition / 8,000 hours',
      maintenanceNotes: [
        'Check case drain flow for wear indication',
        'Inspect drive coupling condition',
        'Verify output pressure',
        'Sample fluid for contamination'
      ],
      requiredTools: [
        'Flow meter',
        'Pressure gauge set',
        'Fluid sample kit',
        'Coupling alignment tools'
      ]
    },
    safetyWarnings: [
      'High pressure system - 3,000 psi',
      'Depressurize system before disconnection',
      'Skydrol is corrosive - use proper PPE',
      'Ensure engine is secured before work'
    ],
    image: 'hydraulic-pump.svg',
    relatedParts: ['HYD-002', 'ENG-001', 'LDG-001']
  },
  {
    id: 'AVI-001',
    partNumber: 'AVI-FMC-001',
    name: 'Flight Management Computer',
    category: 'avionics',
    description: 'Primary navigation computer that manages flight planning, navigation, and performance calculations. Integrates GPS, VOR, DME, and IRS data for precise position determination. Controls autothrottle and autopilot for optimal flight profiles.',
    location: 'Avionics bay, E&E compartment',
    manufacturer: 'Honeywell Aerospace',
    specifications: {
      weight: '22 lbs',
      dimensions: '7.5 x 12.5 x 15 in (MCU form factor)',
      material: 'Aluminum housing, Gold-plated connectors',
      voltage: '115V AC, 28V DC backup',
      mtbf: '15,000 hours'
    },
    maintenanceInfo: {
      inspectionInterval: 'Every 2,000 flight hours',
      maintenanceNotes: [
        'Verify navigation database currency',
        'Perform BITE self-test',
        'Check cooling airflow',
        'Verify GPS antenna connections'
      ],
      requiredTools: [
        'ARINC test set',
        'Navigation database loader',
        'Multimeter',
        'Connector cleaning kit'
      ]
    },
    safetyWarnings: [
      'ESD sensitive equipment - use grounding straps',
      'Verify power off before removal',
      'Handle with care - precision instrument'
    ],
    image: 'avionics-fmc.svg',
    relatedParts: ['AVI-002', 'AVI-003', 'ELE-001']
  },
  {
    id: 'AVI-002',
    partNumber: 'AVI-RADAR-001',
    name: 'Weather Radar Antenna',
    category: 'avionics',
    description: 'X-band weather radar antenna providing 320° forward scanning capability. Detects precipitation, turbulence, and windshear. Features predictive windshear detection and ground mapping modes for terrain awareness.',
    location: 'Nose radome, forward pressure bulkhead',
    manufacturer: 'Collins Aerospace',
    specifications: {
      weight: '45 lbs (antenna + pedestal)',
      dimensions: '30 in diameter flat plate array',
      material: 'Aluminum waveguide, Composite radome',
      voltage: '115V AC 400Hz',
      range: '320 nm maximum range'
    },
    maintenanceInfo: {
      inspectionInterval: 'Every 1,500 flight hours',
      maintenanceNotes: [
        'Check radome for erosion and damage',
        'Verify antenna alignment',
        'Test transmitter power output',
        'Inspect waveguide connections'
      ],
      requiredTools: [
        'Radar test set',
        'Power meter',
        'Alignment tools',
        'Radome repair kit'
      ]
    },
    safetyWarnings: [
      'RF radiation hazard - do not operate on ground with people forward',
      'High voltage present - follow lockout procedures',
      'Radome is structural - inspect carefully after bird strikes'
    ],
    image: 'avionics-radar.svg',
    relatedParts: ['AVI-001', 'ELE-001']
  },
  {
    id: 'ELE-001',
    partNumber: 'ELE-GEN-001',
    name: 'Integrated Drive Generator (IDG)',
    category: 'electrical',
    description: 'Combined constant-speed drive and AC generator unit. Converts variable engine speed to constant 400Hz electrical output. Provides 90 kVA of electrical power for aircraft systems. Self-contained oil cooling system.',
    location: 'Engine accessory gearbox, one per engine',
    manufacturer: 'Collins Aerospace',
    specifications: {
      weight: '125 lbs',
      dimensions: '20 x 12 x 14 in',
      material: 'Aluminum housing, Copper windings',
      voltage: '115/200V AC, 400Hz',
      power: '90 kVA continuous'
    },
    maintenanceInfo: {
      inspectionInterval: 'Every 750 flight hours',
      replacementInterval: 'On condition / 10,000 hours',
      maintenanceNotes: [
        'Check oil quantity and quality',
        'Monitor oil temperature trends',
        'Verify output voltage and frequency',
        'Check for unusual vibration'
      ],
      requiredTools: [
        'Load bank test set',
        'Frequency meter',
        'Oil sample kit',
        'Vibration analyzer'
      ]
    },
    safetyWarnings: [
      'High voltage - 200V AC output',
      'Contains pressurized oil - follow proper procedures',
      'IDG disconnect is one-time use - do not test unnecessarily'
    ],
    image: 'electrical-generator.svg',
    relatedParts: ['ELE-002', 'ENG-001', 'AVI-001']
  },
  {
    id: 'FUE-001',
    partNumber: 'FUE-PUMP-BOOST-001',
    name: 'Fuel Boost Pump',
    category: 'fuel-system',
    description: 'Centrifugal fuel pump located in the fuel tank providing positive fuel pressure to the engine. Ensures consistent fuel flow at all altitudes and attitudes. Features dual-element design for redundancy.',
    location: 'Center and wing fuel tanks, submerged',
    manufacturer: 'Crane Aerospace',
    specifications: {
      weight: '8.5 lbs',
      dimensions: '6 in diameter x 12 in length',
      material: 'Aluminum housing, Stainless impeller',
      voltage: '115V AC 400Hz',
      pressure: '25 psi output, 150 GPH flow'
    },
    maintenanceInfo: {
      inspectionInterval: 'Every 4,000 flight hours',
      maintenanceNotes: [
        'Check pump operation and pressure output',
        'Verify low pressure warning function',
        'Inspect fuel tank for contamination',
        'Check electrical connections'
      ],
      requiredTools: [
        'Fuel pressure gauge',
        'Megohmmeter',
        'Fuel tank entry equipment',
        'Explosion-proof lighting'
      ]
    },
    safetyWarnings: [
      'EXPLOSIVE ATMOSPHERE - follow fuel tank entry procedures',
      'Ensure proper ventilation before entry',
      'Use only approved tools in fuel tank',
      'Ground all equipment to prevent static discharge'
    ],
    image: 'fuel-pump.svg',
    relatedParts: ['FUE-002', 'ENG-001']
  },
  {
    id: 'CTL-001',
    partNumber: 'CTL-AILERON-001',
    name: 'Aileron Assembly',
    category: 'control-surfaces',
    description: 'Primary roll control surface mounted on the outboard trailing edge of each wing. Provides lateral control through differential deflection. Aerodynamically balanced to reduce pilot control forces.',
    location: 'Outboard wing trailing edge, port and starboard',
    manufacturer: 'Boeing Commercial Airplanes',
    specifications: {
      weight: '85 lbs per aileron',
      dimensions: 'Span: 72 in, Chord: 18 in',
      material: 'Aluminum honeycomb core, Composite skins',
      deflection: '+25° / -15° from neutral'
    },
    maintenanceInfo: {
      inspectionInterval: 'Every 500 flight hours',
      maintenanceNotes: [
        'Check hinge bearing condition',
        'Verify control cable tensions',
        'Inspect for delamination',
        'Check balance weights'
      ],
      requiredTools: [
        'Cable tensiometer',
        'Control surface balance jig',
        'NDT inspection equipment'
      ]
    },
    safetyWarnings: [
      'Control surface can move unexpectedly',
      'Lock controls before inspection',
      'Balance weights are critical - do not modify'
    ],
    image: 'control-aileron.svg',
    relatedParts: ['WNG-001', 'HYD-001']
  },
  {
    id: 'FUS-001',
    partNumber: 'FUS-FRAME-001',
    name: 'Fuselage Frame Section',
    category: 'fuselage',
    description: 'Circumferential structural frame providing shape and load distribution for the fuselage. Frames are spaced at regular intervals and support the skin panels. Critical for maintaining pressurization integrity.',
    location: 'Throughout fuselage at 20-inch intervals',
    manufacturer: 'Spirit AeroSystems',
    specifications: {
      weight: '18 lbs per frame',
      dimensions: 'Diameter: 148 in, Depth: 3 in',
      material: '2024-T3 Aluminum alloy',
      lifespan: '90,000 pressurization cycles'
    },
    maintenanceInfo: {
      inspectionInterval: 'Every 12,000 flight hours',
      maintenanceNotes: [
        'Inspect for fatigue cracks at stringer intersections',
        'Check for corrosion in bilge areas',
        'Verify fastener condition',
        'Ultrasonic inspection of high-stress areas'
      ],
      requiredTools: [
        'Eddy current probe',
        'Ultrasonic flaw detector',
        'Dye penetrant kit',
        'Corrosion treatment kit'
      ]
    },
    safetyWarnings: [
      'Structural damage must be reported immediately',
      'Do not drill or modify without engineering approval',
      'Corrosion must be treated per approved process'
    ],
    image: 'fuselage-frame.svg',
    relatedParts: ['FUS-002']
  },
  {
    id: 'CPT-001',
    partNumber: 'CPT-PFD-001',
    name: 'Primary Flight Display (PFD)',
    category: 'cockpit',
    description: 'LCD display presenting primary flight information including attitude, airspeed, altitude, vertical speed, and heading. Integrates flight director commands and autopilot modes. Critical instrument for all phases of flight.',
    location: 'Main instrument panel, pilot and co-pilot positions',
    manufacturer: 'Collins Aerospace',
    specifications: {
      weight: '15 lbs',
      dimensions: '6.4 x 6.4 in display area',
      material: 'Aluminum housing, LCD panel',
      voltage: '28V DC, 115V AC backup',
      resolution: '1024 x 768 pixels'
    },
    maintenanceInfo: {
      inspectionInterval: 'Every 1,000 flight hours',
      maintenanceNotes: [
        'Verify display brightness and contrast',
        'Check for pixel defects',
        'Test comparator functions',
        'Verify BITE self-test passes'
      ],
      requiredTools: [
        'Display test pattern generator',
        'Avionics test set',
        'Connector cleaning kit'
      ]
    },
    safetyWarnings: [
      'ESD sensitive - use proper grounding',
      'LCD contains hazardous materials if broken',
      'Verify power off before connector removal'
    ],
    image: 'cockpit-pfd.svg',
    relatedParts: ['AVI-001', 'ELE-001']
  }
];

export function getPartById(id: string): AircraftPart | undefined {
  return aircraftParts.find(part => part.id === id || part.partNumber === id);
}

export function getPartsByCategory(category: string): AircraftPart[] {
  return aircraftParts.filter(part => part.category === category);
}

export function searchParts(query: string): AircraftPart[] {
  const lowerQuery = query.toLowerCase();
  return aircraftParts.filter(part => 
    part.name.toLowerCase().includes(lowerQuery) ||
    part.partNumber.toLowerCase().includes(lowerQuery) ||
    part.description.toLowerCase().includes(lowerQuery) ||
    part.category.toLowerCase().includes(lowerQuery)
  );
}
