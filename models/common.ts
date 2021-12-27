export interface Album {
  id: number;
  attributes: {
    Title: string;
    Artist: string;
    RecordLabel: string;
    ReleaseYear: string;
    Media: string;
    Design: string;
    Description: string;
    AlbumImage: ImageDetails;
  };
}

export interface ImageDetails {
  data: {
    attributes: {
      url: string;
      alternativeText: string;
    };
  };
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
