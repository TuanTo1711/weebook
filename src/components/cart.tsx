"use client";

import { ActionIcon, Divider, Drawer, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BsFillCartCheckFill } from "react-icons/bs";

const Cart = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);
  return (
    <>
      <ActionIcon onClick={open} size={"lg"} radius={"md"} variant="default">
        <BsFillCartCheckFill stroke={"1.5"} size={"60%"} />
      </ActionIcon>
      <Drawer.Root
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
          <Drawer.Body>{content}</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
};

export default Cart;
