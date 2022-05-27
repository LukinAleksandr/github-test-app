import { useEffect, useState } from "react";
import { IParams } from "../pages/Users/UsersContainer/UserContainer.types";

function useDebounce(value: IParams, delay: number): IParams {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
