export interface Vacancy {
  id: string;
  title: string;
  description: string;
  skills: { label: string }[];
  price_from: number;
  price_to: number;
  experience: {
    label: string;
  };
  city: {
    label: string;
  };
}