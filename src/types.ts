export interface Project {
  id: string;
  title: string;
  category: 'game-direction' | 'realtime-3d' | 'biometric-ai' | 'virtual-production';
  categoryLabel: string;
  year: string;
  tagline: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  accentColor: string;
  featured: boolean;
}

export interface TelemetryData {
  heartRate: number;
  stressIndex: number;
  pupilDilation: number;
  reactionDelta: string;
  latencyMs: number;
  immersionScore: number;
}

export interface StudioLocation {
  city: string;
  country: string;
  district: string;
  timezone: string;
  coordinates: string;
  status: string;
}