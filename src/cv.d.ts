export interface CV {
  analyticsCode: string;
  basics: Basics;
  skills: Array<Skill>;
  work?: Array<Work>;
  education?: Array<Education>;
  Certificates?: Array<Certificate>;
  publications?: Array<Publication>;
  languages: Array<Language>;
  labProgress?: Array<LabProgress>;
  interests?: Array<Interests>;
  references?: Array<Reference>;
  projects?: Array<Project>;
}

interface Basics {
  name: string;
  label: string;
  animated_main_label: string;
  animated_secondary_initial_label: string;
  animated_secondary_final_label: string;
  animated_secondary_third_label: string;
  image: string;
  email: string;
  phone?: string;
  url: URL;
  summary: string;
  theme: string;
  location: Location;
  profiles: Array<Profiles>;
}

interface Location {
  address: string;
  city: string;
  postalCode?: string;
  countryCode: string;
  region: string;
}

interface Profiles {
  icon: string;
  color: string;
  network: string;
  username: string;
  url: URL;
}

interface Work {
  name: string;
  position: string;
  url: URL;
  startDate: DateStr;
  endDate: DateStr | null;
  summary: string;
  highlights: Highlights;
  responsibilities?: Highlights;
  achievements?: Highlights;
  location?: string;
  location_type?: string;
  skills?: Record<string, string>;
}

type DateStr = `${string}-${string}-${string}`;

interface Skill {
  icon: string;
  name: string;
  level: string;
  keywords: Array<string>;
}

interface Certificate {
  name: string;
  date: DateStr | string;
  issuer: string;
  url: URL;
}

interface Publication {
  name: string;
  publisher: string;
  releaseDate: DateStr;
  url: URL;
  summary: string;
}

interface Education {
  institution: string;
  url: URL;
  area: string;
  studyType: string;
  startDate: DateStr;
  endDate: DateStr;
  score?: string;
  courses?: Array<string>;
}

interface Language {
  language: string;
  fluency: string;
  percent: number;
}

interface LabProgress {
  name: string;
  percent: number;
}

interface Project {
  name: string;
  isActive: boolean;
  description: string;
  highlights: Highlights;
  url?: URL;
  github?: URL;
  stack?: Record<string, string>;
}

interface Interests {
  name: string;
  keywords: Array<string>;
}

interface Reference {
  name: string;
  reference: string;
}

type Highlights = Array<string>;