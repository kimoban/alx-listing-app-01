export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  images?: string[];
  discount?: string;
  description?: string;
  amenities?: string[];
  reviews?: ReviewProps[];
}

export interface ReviewProps {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CardProps {
  title: string;
  description: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export interface HeaderProps {
  title: string;
  subtitle?: string;
  logoUrl?: string;

}

// Add more interfaces as needed
