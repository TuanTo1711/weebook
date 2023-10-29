"use client";

import {
  ActionIcon,
  Anchor,
  Button,
  Divider,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <form className="space-y-6">
      <TextInput
        variant="filled"
        radius={"md"}
        label="Tên tài khoản"
        placeholder="Nhập tên tài khoản của bạn"
      />

      <Stack gap={0}>
        <Group justify="space-between" mb={5}>
          <Text component="label" htmlFor="password" size="sm" fw={500}>
            Mật khẩu
          </Text>

          <Anchor component={Link} href="/recovery" pt={2} fw={500} fz="xs">
            Forgot your password?
          </Anchor>
        </Group>
        <PasswordInput
          id="password"
          variant="filled"
          placeholder="Nhập mật khẩu của bạn"
        />
      </Stack>

      <Button fullWidth variant="filled" color="secondary">
        Vào
      </Button>
      <Divider label="Hoặc tiếp tục với" labelPosition="center" />
      <Group align="center" justify="center" gap={"lg"}>
        <ActionIcon variant="default" size={"xl"}>
          <FcGoogle size={25} />
        </ActionIcon>
        <ActionIcon variant="default" size={"xl"}>
          <AiFillGithub size={25} />
        </ActionIcon>
      </Group>
    </form>
  );
};

export default SignIn;
