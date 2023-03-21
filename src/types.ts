export interface ILocation {
  name: string;
  url: string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ILocation;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface IInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ServerResponse<T> {
  info: IInfo;
  results: T[];
}

export interface IUserProfile {
  id: string;
  name: string;
  email: string;
  locale: string;
  picture: string;
  family_name: string;
  given_name: string;
  verified_email: boolean;
}

export interface IUserData {
  access_token: string;
  authuser: string;
  expires_in: number;
  prompt: string;
  scope: string;
  token_type: string;
}
