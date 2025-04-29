import { ResumeFormSchemaType } from './resume-form-schema';

export interface Resume extends ResumeFormSchemaType {
  id: string;
  created_at: string;
}

export interface Education {
  id: string;
  name: string;
  organization?: string;
  type?: 'course' | 'university';
  year?: string;
}

export interface Experience {
  id: string;
  position: string;
  organization: string;
  start_date: string;
  end_date: string;
  city?: number;
  description?: string;
}
