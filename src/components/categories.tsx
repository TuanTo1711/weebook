"use client";
import { useCallback, useState } from "react";

import {
  ActionIcon,
  Divider,
  NavLink,
  Popover,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { TbLayout2 } from "react-icons/tb";

import { useRouter } from "next/navigation";
import slugify from "slugify";
import { api } from "~/trpc/react";
import { type Category } from "~/types";

const Categories = () => {
  const { data: categories } = api.category.getAll.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });
  const [active, setActive] = useState(0);
  const router = useRouter();

  const renderSubmenu = useCallback(
    (parentSlug: string, children?: Category) => {
      const menuItems = children?.children;
      const childrenSlug = slugify(children?.name ?? "", {
        lower: true,
        locale: "vi",
      });

      return (
        <Stack gap={"xs"} className="basic-full" h={"100%"}>
          {menuItems?.slice(0, 4)?.map((menuItem, index) => {
            const childSlug = slugify(menuItem.name, {
              lower: true,
            });
            return (
              <Text
                className="cursor-pointer no-underline"
                onClick={() =>
                  router.push(`/${parentSlug}/${childrenSlug}/${childSlug}`)
                }
                key={index}
                lineClamp={1}
                fz={"sm"}
                pl={"sm"}
              >
                {menuItem.name}
              </Text>
            );
          })}
        </Stack>
      );
    },
    [router],
  );

  const renderMenu = useCallback(
    (parent?: Category) => {
      const menuItems = parent?.children;
      const parentSlug = slugify(parent?.name ?? "", {
        lower: true,
        locale: "vi",
      });

      return (
        <SimpleGrid cols={4} verticalSpacing="sm" w={"100%"}>
          {menuItems?.slice(0, 8)?.map((menuItem, index) => {
            const childSlug = slugify(menuItem.name, {
              lower: true,
            });
            return (
              <Stack key={index} justify="space-between" h={"100%"} gap={"xs"}>
                <Text
                  lineClamp={1}
                  fw={700}
                  size="md"
                  className="h-1/3 cursor-pointer no-underline"
                  onClick={() => router.push(`/${parentSlug}/${childSlug}`)}
                >
                  {menuItem.name}
                </Text>
                {menuItem?.children?.length !== 0 &&
                  renderSubmenu(parentSlug, menuItem)}
                <Text
                  onClick={() => router.push(`/${parentSlug}/${childSlug}`)}
                  c="primary"
                  className="cursor-pointer no-underline"
                >
                  Xem tất cả
                </Text>
              </Stack>
            );
          })}
        </SimpleGrid>
      );
    },
    [renderSubmenu, router],
  );

  return (
    <Popover
      shadow="lg"
      withArrow
      arrowPosition="center"
      arrowSize={12}
      position="bottom-start"
      offset={{ mainAxis: 15, crossAxis: -165 }}
      width="75%"
    >
      <Popover.Target>
        <ActionIcon
          radius={"md"}
          variant="transparent"
          color="dark"
          size="lg"
          aria-label="catalog"
        >
          <TbLayout2 size={"100%"} />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown className="flex flex-row gap-x-4 py-6">
        <Stack className="basis-1/4">
          <Title order={2}>Danh mục sản phẩm</Title>
          <Stack gap={0}>
            {categories?.map((category, index) => {
              return (
                <NavLink
                  onClick={() =>
                    router.push(slugify(category.name, { lower: true }))
                  }
                  active={index === active}
                  onMouseEnter={() => setActive(index)}
                  key={index}
                  label={category.name}
                  childrenOffset={28}
                />
              );
            })}
          </Stack>
        </Stack>
        <Divider orientation="vertical" />
        <Stack className="basis-3/4">
          <Text fw={700} c="dimmed" size="xl">
            {categories?.at(active)?.name}
          </Text>
          {categories && renderMenu(categories?.at(active))}
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

export default Categories;
