export type CategoryKey =
  | 'todos'
  | 'casamentos'
  | 'pre-casamento'
  | '15-anos'
  | 'gestantes'
  | 'estudio'
  | 'infantil'
  | 'formaturas'
  | 'institucional';

export interface PhotoItem {
  id: string;
  title: string;
  category: CategoryKey;
  categoryLabel: string;
  location: string;
  year: string;
  image: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  caption: string;
  details?: {
    gear?: string;
    lighting?: string;
    setting?: string;
  };
}

export interface StoryChapter {
  title: string;
  description: string;
  image: string;
  moment: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  event: string;
  text: string;
  rating: number;
  source: 'Google Reviews' | 'Casamentos.com.br';
  date: string;
}

export interface BudgetInquiry {
  name: string;
  eventType: string;
  date: string;
  location: string;
  guestCount?: string;
  notes?: string;
}

export interface ClientGalleryPhoto {
  id: string;
  title: string;
  image: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  moment: string;
}

export interface ClientGallery {
  id: string;
  accessCode: string;
  clientName: string;
  eventTitle: string;
  eventDate: string;
  location: string;
  maxAlbumSelection: number;
  coverImage: string;
  photos: ClientGalleryPhoto[];
}
