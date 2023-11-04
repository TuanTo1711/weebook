"use client";

import { Select } from "@mantine/core";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "qs";
import { useCallback, type FC } from "react";
import {
  itemNumber as itemNumbers,
  sortType as sortTypes,
} from "~/config/sort";

interface SortProps {
  sortBy: string;
  sortType: string;
  pageSize: number;
}

const Sort: FC<SortProps> = ({ sortBy, sortType, pageSize }) => {
  const pathName = usePathname();
  const router = useRouter();
  const search = Object.fromEntries(useSearchParams().entries());
  // const [value, setValue] = useState<string | null>(sortBy + " " + sortType);

  const handleSelectionChange = useCallback(
    (value: string | null) => {
      const selected = value;

      const newSearchParams = qs.stringify(
        {
          ...search,
          pageSize: selected,
        },
        { allowDots: true },
      );

      router.replace(`${pathName}?${newSearchParams}`);
    },
    [pathName, router, search],
  );

  const handleSort = useCallback(
    (value: string | null) => {
      const selectedValue = value?.split(" ");
      const newSearchParams = qs.stringify(
        {
          ...search,
          sortBy: selectedValue?.[0],
          sortType: selectedValue?.[1],
        },
        { allowDots: true },
      );

      router.replace(`${pathName}?${newSearchParams}`);
    },
    [pathName, router, search],
  );

  return (
    <div className="flex w-full flex-row gap-4 md:flex-nowrap">
      <Select
        label="Sắp xếp theo"
        variant="filled"
        data={sortTypes}
        defaultValue={sortBy + " " + sortType}
        onChange={handleSort}
        allowDeselect={false}
        checkIconPosition="right"
      />
      <Select
        label="Số sản phẩm"
        variant="filled"
        data={itemNumbers}
        defaultValue={pageSize.toString()}
        onChange={handleSelectionChange}
        allowDeselect={false}
        checkIconPosition="right"
      />
    </div>
  );
};

export default Sort;
