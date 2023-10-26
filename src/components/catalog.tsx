"use client";

import {
  ActionIcon,
  Anchor,
  Divider,
  NavLink,
  Popover,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconHome2, IconLayout2 } from "@tabler/icons-react";
import Link from "next/link";
import { useCallback, useState } from "react";
import { api } from "~/trpc/react";
import { type Category } from "~/types";

const Catalog = () => {
  const { data: categories } = api.category.getAll.useQuery();
  const [active, setActive] = useState(0);

  const renderSubmenu = useCallback((menuItems?: Category[]) => {
    return (
      <>
        <Stack gap={"xs"} className="basic-full" h={"100%"}>
          {menuItems?.slice(0, 4)?.map((menuItem, index) => (
            <Text
              component={Link}
              passHref
              href="/"
              key={index}
              lineClamp={1}
              fz={"sm"}
              pl={"sm"}
            >
              {menuItem.name}
            </Text>
          ))}
        </Stack>
        <Anchor href={"/"} c="primary" underline="hover">
          Xem tất cả
        </Anchor>
      </>
    );
  }, []);

  const renderMenu = useCallback(
    (menuItems?: Category[]) => {
      return (
        <>
          {menuItems?.slice(0, 8)?.map((menuItem, index) => (
            <Stack key={index} justify="space-between" h={"100%"} gap={"xs"}>
              <Text
                lineClamp={1}
                fw={700}
                size="md"
                className="h-1/3"
                component={Link}
                passHref
                href={menuItem.name}
              >
                {menuItem.name}
              </Text>
              {menuItem?.children?.length !== 0 &&
                renderSubmenu(menuItem?.children)}
            </Stack>
          ))}
        </>
      );
    },
    [renderSubmenu],
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
          variant="subtle"
          color="dark"
          size="xl"
          aria-label="catalog"
        >
          <IconLayout2 size={"sm"} />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown className="flex flex-row gap-x-4 py-6">
        <Stack className="basis-1/4">
          <Title order={2}>Danh mục sản phẩm</Title>
          <Stack>
            {categories?.map((category, index) => {
              return (
                <NavLink
                  active={index === active}
                  onMouseEnter={() => setActive(index)}
                  key={index}
                  label={category.name}
                  leftSection={<IconHome2 size="1rem" stroke={1.5} />}
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
          <SimpleGrid cols={4} verticalSpacing="sm" w={"100%"}>
            {renderMenu(categories?.at(active)?.children)}
          </SimpleGrid>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

export default Catalog;
