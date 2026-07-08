export interface Skill {
  name: string;
  percentage: number;
  category: 'Frontend' | 'Mobile' | 'Languages' | 'Backend' | 'Networking' | 'Databases' | 'Tools';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  type: 'Mobile' | 'Web';
  features: string[];
  isTeamProject?: boolean;
  liveUrl?: string;
  videoUrl?: string;
}
