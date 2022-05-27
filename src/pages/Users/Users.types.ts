import { ChangeEvent } from "react";
import { IShortUser } from "../../interfaces/users.interfaces";

export interface UsersPageProps {
  users: IShortUser[];
  loading: boolean;
  total: number;
  searchHandle: (ev: ChangeEvent<HTMLInputElement>) => void;
  defaultSearchValue: string;
}
