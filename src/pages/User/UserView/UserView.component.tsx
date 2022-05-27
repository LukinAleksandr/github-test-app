import {
  UserStyled,
  UserStyledTop,
  UserStyledImage,
  UserStyledImg,
  UserStyledBio,
  UserStyledRow,
  UserStyledLabel,
  UserStyledValue,
  UserStyledDesc,
  UserStyledResultSearch,
  UserStyledHeader,
  UserStyledPanel,
  UserStyledSearch,
} from "./UserView.styles";
import { UserPageProps } from "../User.types";
import { format } from "date-fns";
import { ReposItem } from "../../../components/ReposItem";

export const UserView = ({
  user,
  repos,
  searchHandle,
  defaultSearchValue,
  loading,
}: UserPageProps) => {
  return (
    <UserStyled padding="30px 50px">
      <UserStyledTop>
        <UserStyledImage>
          <UserStyledImg src={user?.avatar_url} />
        </UserStyledImage>
        <UserStyledBio>
          <UserStyledRow>
            <UserStyledLabel variant="H2">User Name:</UserStyledLabel>
            <UserStyledValue variant="Body1">{user?.name}</UserStyledValue>
          </UserStyledRow>
          <UserStyledRow>
            <UserStyledLabel variant="H2">Email:</UserStyledLabel>
            <UserStyledValue variant="Body1">{user?.email}</UserStyledValue>
          </UserStyledRow>
          <UserStyledRow>
            <UserStyledLabel variant="H2">Location:</UserStyledLabel>
            <UserStyledValue variant="Body1">{user?.location}</UserStyledValue>
          </UserStyledRow>
          <UserStyledRow>
            <UserStyledLabel variant="H2">Join Date:</UserStyledLabel>
            <UserStyledValue variant="Body1">
              {user?.created_at &&
                format(new Date(user?.created_at), "dd/MM/yyy")}
            </UserStyledValue>
          </UserStyledRow>
          <UserStyledRow>
            <UserStyledLabel variant="H2">Followers:</UserStyledLabel>
            <UserStyledValue variant="Body1">{user?.followers}</UserStyledValue>
          </UserStyledRow>
          <UserStyledRow>
            <UserStyledLabel variant="H2">Following:</UserStyledLabel>
            <UserStyledValue variant="Body1">{user?.following}</UserStyledValue>
          </UserStyledRow>
        </UserStyledBio>
      </UserStyledTop>
      <UserStyledDesc variant="question">{user?.bio}</UserStyledDesc>
      <UserStyledDesc variant="question">{user?.blog}</UserStyledDesc>
      <UserStyledHeader>
        <UserStyledValue tag="h1" variant="H1Bold">
          Users
        </UserStyledValue>
        <UserStyledResultSearch tag="span" variant="Body1">
          {`(${repos?.total_count || 0} results)`}
        </UserStyledResultSearch>
      </UserStyledHeader>
      <UserStyledPanel>
        <UserStyledSearch
          onChange={searchHandle}
          value={defaultSearchValue}
          type="text"
          placeholder="Search"
        />
      </UserStyledPanel>
      {repos && repos.items.map((rep) => <ReposItem key={rep.id} {...rep} />)}
    </UserStyled>
  );
};
