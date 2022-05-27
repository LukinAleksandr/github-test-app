import { ChangeEvent, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import useDebounce from "../../../hooks/useDebounce.hook";
import { useGetUserByIdQuery, useGetUserReposQuery } from "../../../redux";
import { UserView } from "../UserView";
import { IParams } from "./UserContainer.types";

export const UserContainer = () => {
  const { id } = useParams() as any;
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState<IParams>({});
  const debouncedCallback = useDebounce(params, 1000);
  const { data: user } = useGetUserByIdQuery(id);

  const { data: repos } = useGetUserReposQuery(debouncedCallback, {
    skip: user === undefined,
  });

  const search = searchParams.get("q");

  const searchHandle = (ev: ChangeEvent<HTMLInputElement>) => {
    const params: IParams = {};
    if (ev.target.value?.length) params.q = ev.target.value;

    setSearchParams({
      q: ev.target.value,
    });
  };

  useEffect(() => {
    if (user) {
      const params: IParams = {
        q: `${search?.length ? `${search} in:name` : ""} user:${user?.login}`,
      };

      setParams(params);
    }
  }, [search, user]);

  return (
    <UserView
      repos={repos}
      user={user}
      searchHandle={searchHandle}
      defaultSearchValue={search ? search : ""}
      loading={false}
    />
  );
};
