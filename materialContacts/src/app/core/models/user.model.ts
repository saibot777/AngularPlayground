import {Note} from "./note-model";

export class User {
  id: number;
  birthDate: Date;
  name: string;
  avatar: string;
  bio: string;
  notes: Note[];
}
