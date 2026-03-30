export type SocialIcon = Record<string, string | any>;

// Agrega esto después de interface Language:
interface LabProgress {
  name: string;
  percent: number;
}

// Y modifica Language para agregar percent:
interface Language {
  language: string;
  fluency: string;
  percent: number;
}

// Y en la interface CV agrega:
export interface CV {
  // ... todo lo que ya tienes ...
  labProgress?: Array<LabProgress>;  // agrega esta línea
}