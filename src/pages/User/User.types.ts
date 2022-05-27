import { ChangeEvent } from "react";
import { IRepos } from "../../interfaces/repos.interfaces";
import { IUser } from "../../interfaces/user.interfaces";

export interface UserPageProps {
  user?: IUser;
  repos?: IRepos;
  loading: boolean;
  searchHandle: (ev: ChangeEvent<HTMLInputElement>) => void;
  defaultSearchValue: string;
}
