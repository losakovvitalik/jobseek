export interface Education {
  id: string;
  name: string;
  organization?: string;
  type?: string;
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