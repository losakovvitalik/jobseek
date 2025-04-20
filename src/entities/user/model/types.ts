export interface User {
  name: string;
  last_name: string;
  middle_name?: string;
  email: string;
  telegram?: string;
  phone?: string;
  birthday?: string;
  search_status?: 'active' | 'considering' | 'inactive';
  photo?: {
    url: string;
  };
  gender: {
    value: 'female' | 'male';
    label: string;
  };
}
