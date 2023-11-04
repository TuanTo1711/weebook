"use client";

import { ActionIcon, Avatar, Menu, Text } from "@mantine/core";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { useRouter } from "next/navigation";
import { guest, logged } from "~/config/menu";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { logout } from "~/redux/feature/authSlice";

const UserMenu = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const user = auth.user;

  const handleItemSeleted = useCallback(
    (url: string | undefined) => {
      if (!url) {
        dispatch(logout());
        return;
      }

      router.push(url);
    },
    [router, dispatch],
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
          <Avatar
            src={user.avatarUrl}
            alt="it's me"
            className="cursor-pointer"
          />
        ) : (
          <ActionIcon
            variant="filled"
            radius={"lg"}
            size={"lg"}
            color={"secondary"}
          >
            <AiOutlineMenu size={"60%"} />
          </ActionIcon>
        )}
      </Menu.Target>

      <Menu.Dropdown className="w-fit">{items}</Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
