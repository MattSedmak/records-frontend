export interface Album {
  data: {
    id: number;
    attributes: {
      Title: string;
      Artist: string;
      RecordLabel: string;
      ReleaseYear: string;
      Media: string;
      Design: string;
      Description: string;
      Image: ImageDetails;
    };
  }[];
}

interface ImageDetails {
  url: string;
  alternativeText: string;
  width: number;
  height: number;
}

export interface Artist {
  data: {
    id: number;
    attributes: {
      Name: string;
    };
  }[];
}

export interface Decade {
  data: {
    id: number;
    attributes: {
      year: string;
    };
  }[];
}

export interface Designer {
  data: {
    id: number;
    attributes: {
      Name: string;
    };
  }[];
}
