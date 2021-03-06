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

export interface Review {
  review_id: number;
  facility_id: string;
  uid: string;
  rating: number;
  comment: string;
}

export interface Recarea {
  recarea_id: string;
  recarea_name: string;
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
  reviews: Array<Review>;
  recarea: Recarea;
}

export interface FacilityDetail {
  facility: Facility;
}

export interface Campground extends FacilityDetail {
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

export interface UrlParams {
  id: string;
}

export interface FacilityDetailUrlParams extends UrlParams {}