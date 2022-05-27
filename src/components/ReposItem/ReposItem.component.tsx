import { ItemRepo } from "../../interfaces/repos.interfaces";
import {
  ReposItemStyled,
  ReposItemName,
  ReposItemCol,
  ReposItemText,
} from "./ReposItem.styles";

export const ReposItem = ({
  name,
  forks,
  stargazers_count,
  html_url,
}: ItemRepo) => {
  return (
    <ReposItemStyled href={html_url} target="_blank">
      <ReposItemName variant="H2">{name}</ReposItemName>
      <ReposItemCol>
        <ReposItemText variant="Body1">Fork: {forks}</ReposItemText>
        <ReposItemText variant="Body1">Start: {stargazers_count}</ReposItemText>
      </ReposItemCol>
    </ReposItemStyled>
  );
};
