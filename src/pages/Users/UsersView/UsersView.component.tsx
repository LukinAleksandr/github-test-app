import {
  Title,
  Panel,
  Search,
  UsersStyled,
  ResultSearch,
  WrapperTop,
  UsersList,
} from "./UsersView.styles";

import { Outlet } from "react-router-dom";
import { UsersPageProps } from "../Users.types";
import { UserCard } from "../../../components/UserCard";

export const UsersView = ({
  users,
  loading,
  searchHandle,
  total,
  defaultSearchValue,
}: UsersPageProps) => (
  <UsersStyled padding="30px 50px">
    <WrapperTop>
      <Title tag="h1" variant="H1Bold">
        Users
      </Title>
      <ResultSearch tag="span" variant="Body1">
        {`(${total} results)`}
      </ResultSearch>
    </WrapperTop>
    <Panel>
      <Search
        onChange={searchHandle}
        value={defaultSearchValue}
        type="text"
        placeholder="Search"
      />
    </Panel>
    <UsersList loading={loading}>
      {users.map((user) => (
        <UserCard {...user} key={user.id} />
      ))}
    </UsersList>

    <Outlet />
  </UsersStyled>
);
