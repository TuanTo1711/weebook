"use client";

import { ActionIcon, Popover, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IoMdNotifications } from "react-icons/io";

const Notifications = () => {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <>
      <Popover
        opened={opened}
        width={200}
        position="bottom"
        withArrow
        shadow="md"
      >
        <Popover.Target>
          <ActionIcon
            onMouseEnter={open}
            onMouseLeave={close}
            radius={"md"}
            variant="default"
            size="lg"
            aria-label="Notification"
          >
            <IoMdNotifications stroke={"1.5"} size={"60%"} />
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="xs">
            This is uncontrolled popover, it is opened when button is clicked
          </Text>
        </Popover.Dropdown>
      </Popover>
    </>
  );
};

export default Notifications;
