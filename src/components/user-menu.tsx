"use client";

import { ActionIcon, Avatar, Menu, Text } from "@mantine/core";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { useRouter } from "next/navigation";
import { guest, logged } from "~/config/menu";

const UserMenu = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;

  const handleItemSeleted = useCallback(
    async (url: string | undefined) => {
      if (!url) {
        await signOut({ redirect: false });
        return;
      }

      router.push(url);
    },
    [router],
  );

  const items = useMemo(() => {
    if (!user) {
      const menuItems = guest.items;
      return (
        <>
          <Menu.Label>{guest.label}</Menu.Label>
          {menuItems.map(({ key, value, description, url }) => (
            <Menu.Item key={key} component={Link} href={url}>
              <Text fz={"sm"}>{value}</Text>
              <Text fz={"xs"} c={"dimmed"}>
                {description}
              </Text>
            </Menu.Item>
          ))}
        </>
      );
    }

    return (
      <>
        {logged.map(({ key, url, value, description, icon: Icon }) => {
          return (
            <Menu.Item
              color={key === "logout" ? "red" : "default"}
              key={key}
              onClick={() => handleItemSeleted(url)}
              leftSection={<Icon size={20} />}
            >
              <Text fz={"sm"}>{value}</Text>
              <Text fz={"xs"} c={"dimmed"}>
                {description}
              </Text>
            </Menu.Item>
          );
        })}
      </>
    );
  }, [user, handleItemSeleted]);

  return (
    <Menu
      shadow="lg"
      width={200}
      withArrow
      position="bottom-end"
      transitionProps={{
        transition: "pop",
        duration: 200,
      }}
    >
      <Menu.Target>
        {user ? (
          <Avatar src={user.image} alt="it's me" className="cursor-pointer" />
        ) : (
          <ActionIcon
            variant="filled"
            radius={"lg"}
            size={"lg"}
            color={"secondary"}
          >
            <AiOutlineMenu size={"60%"}/>
          </ActionIcon>
        )}
      </Menu.Target>

      <Menu.Dropdown className="w-fit">{items}</Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
