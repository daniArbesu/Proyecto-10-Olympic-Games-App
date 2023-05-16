export interface Athlete {
  _id: string;
  bio: string;
  date_of_birth: string;
  height: number;
  name: string;
  photo_url?: string;
  surname: string;
  weight: number;
  games: Array<string | undefined>;
}
