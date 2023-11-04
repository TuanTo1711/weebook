import {
  Breadcrumbs,
  Card,
  Divider,
  Flex,
  NavLink,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import clsx from "clsx";
import Link from "next/link";
import HierarchyCategory from "~/components/hierarchy-category";
import ListProduct from "~/components/list/product/list-product";
import { categories } from "~/config/mock";

export default function ProductsPage({
  params: { category },
  searchParams,
}: {
  searchParams: Record<string, number | string>;
  params: { category: string[] };
}) {
  const lastCategoryName = category[category.length - 1]!;
  // const initialsCategories = await api.category.getAll.query();
  const breadCrumbs = [
    { title: "Trang chủ", href: "/" },
    { title: "Tất cả sản phẩm", href: "/tat-ca-san-pham", active: true },
  ].map((item, index) => (
    <Text
      className={clsx(item.active && "text-blue-500")}
      component={Link}
      href={item.href}
      key={index}
    >
      {item.title}
    </Text>
  ));

  return (
    <Stack gap={"lg"}>
      <Breadcrumbs separator={"→"}>{breadCrumbs}</Breadcrumbs>
      <Flex gap={"lg"}>
        <Card
          withBorder
          className="hidden basis-1/4 flex-col rounded-lg sm:flex"
          p={"md"}
        >
          <Title order={3}>Nhóm sản phẩm</Title>
          <NavLink
            label="Tất Cả Nhóm Sản Phẩm"
            component={Link}
            opened
            href="/tat-ca-san-pham"
          >
            <HierarchyCategory
              categories={categories}
              lastPartUrl={lastCategoryName}
            />
          </NavLink>
          <Divider my={"md"} />
          <Title order={3}>Giá</Title>
        </Card>
        <Stack
          classNames={{
            root: "basis-full sm:basis-3/4",
          }}
        >
          <ListProduct
            category={
              lastCategoryName === "tat-ca-san-pham" ? "" : lastCategoryName
            }
            params={searchParams}
          />
        </Stack>
      </Flex>
    </Stack>
  );
}
