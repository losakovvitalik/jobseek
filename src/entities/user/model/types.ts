export interface User {
  name: string;
  last_name: string;
  middle_name?: string;
  email: string;
  telegram?: string;
  phone?: string;
  birthday?: string;
  search_status?: 'active' | 'considering' | 'inactive';
  languages: UserLanguage[];
  city?: {
    id: number;
    name: string;
  };
  photo?: {
    url: string;
  };
  gender: {
    value: 'female' | 'male';
    label: string;
  };
}

export interface UserLanguage {
  id: number;
  label: string;
  level: UserLanguageLevel;
}

export interface UserLanguageLevel {
  id: number;
  label: string;
}
