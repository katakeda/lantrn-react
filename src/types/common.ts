export type DateRange = [Date | null, Date | null];

export interface Request<T> {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  body: any;
  handler: (results: Promise<any>) => T;
  errorHandler: (error: any) => void;
}

export interface Media {
  media_id: string;
  media_type: string;
  entity_id: string;
  entity_type: string;
  height: number;
  width: number;
  url: string;
  is_gallery: boolean;
}

export interface Facility {
  facility_id: string;
  facility_name: string;
  facility_type_description: string;
  facility_reservation_url: string;
  facility_map_url: string;
  facility_longitude: number;
  facility_latitude: number;
  reservable: boolean;
  enabled: boolean;
  medias: Array<Media>;
}

export interface Campground {
  facility: Facility;
  sites: Record<number, Array<Date>>;
}

export interface Results {
  campgrounds: Array<Campground>;
  status: boolean;
}

export interface User {
  id: number;
  uid: string;
}

export interface EmailPasswordCredentials {
  email: string;
  password: string;
}