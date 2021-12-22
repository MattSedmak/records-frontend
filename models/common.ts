export interface Album {
  id: number;
  Title: string;
  Artist: string;
  RecordLabel: string;
  ReleaseYear: string;
  Media: string;
  Design: string;
  Description: string;
  Image: ImageDetails;
}

interface ImageDetails {
  url: string;
  alternativeText: string;
  width: number;
  height: number;
}

export interface Artist {
  id: number;
  Name: string;
}

export interface Decade {
  id: number;
  year: string;
}

export interface Designer {
  id: number;
  Name: string;
}
