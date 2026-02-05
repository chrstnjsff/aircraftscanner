export interface AircraftPart {
  id: string;
  partNumber: string;
  name: string;
  category: PartCategory;
  description: string;
  location: string;
  manufacturer: string;
  specifications: PartSpecifications;
  maintenanceInfo: MaintenanceInfo;
  safetyWarnings: string[];
  image: string;
  relatedParts: string[];
}

export interface PartSpecifications {
  weight?: string;
  dimensions?: string;
  material?: string;
  operatingTemp?: string;
  pressure?: string;
  voltage?: string;
  lifespan?: string;
  [key: string]: string | undefined;
}

export interface MaintenanceInfo {
  inspectionInterval: string;
  replacementInterval?: string;
  lastInspection?: string;
  nextInspection?: string;
  maintenanceNotes: string[];
  requiredTools: string[];
}

export type PartCategory = 
  | 'engine'
  | 'fuselage'
  | 'wing'
  | 'landing-gear'
  | 'cockpit'
  | 'avionics'
  | 'hydraulics'
  | 'electrical'
  | 'fuel-system'
  | 'control-surfaces';

export interface CategoryInfo {
  id: PartCategory;
  name: string;
  description: string;
  icon: string;
}
