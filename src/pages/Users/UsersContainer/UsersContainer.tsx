import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { UsersView } from "../UsersView";
import { useGetUsersQuery } from "../../../redux";
import { IParams } from "./UserContainer.types";
import useDebounce from "../../../hooks/useDebounce.hook";

export const UsersContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState<IParams>({});
  const debouncedCallback = useDebounce(params, 1000);
  const {
    data: users,
    isLoading,
    isFetching,
  } = useGetUsersQuery(debouncedCallback);

  const search = searchParams.get("q");

  const searchHandle = (ev: ChangeEvent<HTMLInputElement>) => {
    const params: IParams = {};
    if (ev.target.value?.length) params.q = ev.target.value;

    setSearchParams(
      {
        q: ev.target.value,
      },
      {
        replace: true,
      }
    );
  };

  useEffect(() => {
    const params: IParams = {};
    if (search?.length) params.q = search;

    setParams(params);
  }, [search]);

  return (
    <UsersView
      users={users ? users.items : []}
      searchHandle={searchHandle}
      defaultSearchValue={search ? search : ""}
      loading={isLoading || isFetching}
      total={users?.total_count || 0}
    />
  );
};
