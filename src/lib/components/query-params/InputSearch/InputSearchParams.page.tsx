import {
  useRef
} from "react";

import {
  useUrlSearchParams
} from "../../../hooks";
import {
  InputSearch,
  InputSearchProps
} from "../../InputSearch";

export function InputSearchParams({
  className,
  ...props
}: Readonly<InputSearchProps>) {

  const [searchParams, setSearchParams] = useUrlSearchParams<'search' | 'page'>();
  const timeoutRef = useRef<number>();

  const handleSearch = (value: string) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setSearchParams({
        search: value,
        page: undefined
      });
    }, 300);
  };

  return (
    <InputSearch
      defaultValue={searchParams.search}
      onChangeText={handleSearch}
      {...props}
    />
  );
}
