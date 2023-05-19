export interface Athlete {
  _id: string;
  bio: string;
  date_of_birth: string;
  height: number;
  name: string;
  photo_url?: string;
  surname: string;
  weight: number;
  games: Array<string | Game | undefined>;
}

export interface Game {
  _id: string;
  city: string;
  year: number;
  athletes: Array<string | Athlete | undefined>;
}

export interface UserData {
  email: string;
  password: string;
}
