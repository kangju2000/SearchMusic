export type artist = {
  extenal_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export type album = {
  album_type: string;
  artist: artist[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: 'album';
  uri: string;
};

export type image = {
  height: number;
  url: string;
  width: number;
};

export type getSearchProps = {
  q: string;
  type: 'artist' | 'track';
};

export interface SearchArtists {
  artists: {
    href: string;
    items: artist[];
    limit: number;
    next: string;
    offset: number;
    total: number;
  };
}

export interface SearchTracks {
  tracks: {
    href: string;
    items: album[];
  };
}
