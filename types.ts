export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'video' | 'text' | 'tool';
  completed: boolean;
  thumbnail?: string;
  progress?: number;
}

export interface Module {
  id: string;
  title: string;
  subtitle: string;
  progress: number;
  totalLessons: number;
  lessons: Lesson[];
  icon: string;
  colorClass: string;
  heroImage?: string;
}

export interface Post {
  id: string;
  user: {
    name: string;
    role: string;
    avatar: string;
  };
  type: 'success' | 'question' | 'networking';
  content: string;
  image?: string;
  likes: number;
  comments: number;
  time: string;
}

export interface Material {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'xlsx' | 'doc';
  size: string;
}