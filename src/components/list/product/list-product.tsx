"use client";

import {
  Card,
  Center,
  Divider,
  Group,
  Pagination,
  SegmentedControl,
  SimpleGrid,
  VisuallyHidden,
  rem,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "qs";
import { useCallback, useState, type FC } from "react";
import { BsGrid3X3Gap } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import { api } from "~/trpc/react";
import { type PaginationParams } from "~/types";
import Sort from "../sort";
import { CarouselCard } from "./carousel-card";
import ProductSkeleton from "./product-skeleton";

type ListParams = {
  params: PaginationParams;
  category?: string;
};

const iconProps = {
  style: { width: rem(20), height: rem(20), display: "block" },
  stroke: "1.5",
};

const ListProduct: FC<ListParams> = ({ params, category }) => {
  const { data, isFetching, isError, error } = api.product.getAll.useQuery(
    { params, category },
    {
      refetchOnWindowFocus: false,
    },
  );
  const [orientation, setOrientation] = useState("vertical");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pathName = usePathname();
  const router = useRouter();
  const windowScroll = useWindowScroll();
  const search = Object.fromEntries(useSearchParams().entries());
  const handlePaginationChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      windowScroll[1]({ y: 0 });
      const newSearchParams = qs.stringify(
        {
          ...search,
          pageNumber: page,
        },
        { allowDots: true },
      );

      router.replace(`${pathName}?${newSearchParams}`);
    },
    [pathName, router, windowScroll, search],
  );

  const body = isFetching ? (
    <SimpleGrid
      cols={{ base: 2, sm: 2, md: 3, lg: orientation === "vertical" ? 4 : 1 }}
      spacing={{ base: 10, sm: "sm" }}
      verticalSpacing={{ base: "md", sm: "xl" }}
    >
      {Array.from({ length: Number.parseInt(params.pageSize ?? "48") })?.map(
        (_, key) => {
          return <ProductSkeleton key={key} />;
        },
      )}
    </SimpleGrid>
  ) : isError ? (
    <Card withBorder>
      <p>{JSON.stringify(error)}</p>
    </Card>
  ) : !data?.content || data?.content.length === 0 ? (
    <Card withBorder>
      <p>No results.</p>
    </Card>
  ) : (
    <SimpleGrid
      cols={{ base: 2, sm: 2, md: 3, lg: orientation === "vertical" ? 4 : 1 }}
      spacing={{ base: 10, sm: "sm" }}
      verticalSpacing={{ base: "md", sm: "xl" }}
    >
      {data.content.map((product) => (
        <CarouselCard
          product={product}
          key={product.id}
          orientation={orientation === "vertical" ? "vertical" : "horizontal"}
        />
      ))}
    </SimpleGrid>
  );

  return (
    <Card withBorder radius={"md"} className="space-y-4">
      <Group wrap="nowrap">
        <Sort
          sortBy={params.sortBy ?? "createdDate"}
          sortType={params.sortType ?? "desc"}
          pageSize={Number.parseInt(params.pageSize ?? "48")}
        />
        <div>
          <SegmentedControl
            color="secondary"
            className="items-center self-end"
            value={orientation}
            onChange={setOrientation}
            data={[
              {
                value: "vertical",
                label: (
                  <Center>
                    <BsGrid3X3Gap {...iconProps} />
                    <VisuallyHidden>Vertical</VisuallyHidden>
                  </Center>
                ),
              },
              {
                value: "horizontal",
                label: (
                  <Center>
                    <TfiMenuAlt {...iconProps} />
                    <VisuallyHidden>Horizontal</VisuallyHidden>
                  </Center>
                ),
              },
            ]}
          />
        </div>
      </Group>
      <Divider />
      {body}
      <Pagination
        color="secondary"
        className="self-center"
        value={currentPage}
        onChange={handlePaginationChange}
        total={data?.totalPages ?? 0}
        withEdges
      />
    </Card>
  );
};

export default ListProduct;
