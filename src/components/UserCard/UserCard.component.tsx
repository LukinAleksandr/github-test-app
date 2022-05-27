import { useNavigate } from "react-router-dom";
import { useGetUserReposQuery } from "../../redux";
import {
  UserCardBottom,
  UserCardImg,
  UserCardText,
  UserCardStyles,
  UserCardTop,
} from "./UserCard.styles";
import { IUserCard } from "./UserCard.types";

export const UserCard = ({ avatar_url, login, id }: IUserCard) => {
  const { data: repos } = useGetUserReposQuery({
    q: `user:${login}`,
  });

  const nav = useNavigate();

  const clickHandle = () => {
    nav(`/users/${id}`);
  };

  return (
    <UserCardStyles onClick={clickHandle} padding="8px">
      <UserCardTop>
        <UserCardImg src={avatar_url} />
      </UserCardTop>
      <UserCardBottom>
        <UserCardText variant="H2">{login}</UserCardText>
        <UserCardText variant="Body1">
          Repos: {repos ? repos?.total_count : 0}
        </UserCardText>
      </UserCardBottom>
    </UserCardStyles>
  );
};
