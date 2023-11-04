"use client";

import {
  ActionIcon,
  Divider,
  Drawer,
  ScrollArea
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BsFillCartCheckFill } from "react-icons/bs";

const Cart = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <ActionIcon onClick={open} size={"lg"} radius={"md"} variant="default">
        <BsFillCartCheckFill stroke={"1.5"} size={"60%"} />
      </ActionIcon>
      <Drawer.Root
        size={"lg"}
        opened={opened}
        onClose={close}
        position="right"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        <Drawer.Overlay backgroundOpacity={0.5} blur={4} />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title className="w-full text-2xl font-semibold">
              Giỏ hàng
            </Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Divider />
          <Drawer.Body></Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
};

export default Cart;
