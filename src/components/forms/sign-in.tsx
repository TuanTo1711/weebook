"use client";

import Link from "next/link";
import { useCallback } from "react";

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
import { useForm, zodResolver } from "@mantine/form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { SignInSchema, type SignInRequest } from "~/types/validator";
import { useAppDispatch } from "~/redux/hooks";
import { setCurrentUser } from "~/redux/feature/authSlice";
import { toast } from "react-toastify";

const SignIn = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { isLoading, mutateAsync } = api.auth.signIn.useMutation();

  const { getInputProps, onSubmit, errors } = useForm({
    validate: zodResolver(SignInSchema),
    initialValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = useCallback(
    async (values: SignInRequest) => {
      const data = await toast.promise(mutateAsync(values), {
        pending: "Please waiting...",
        success: "Login successful",
        error: "Login failed",
      });

      dispatch(setCurrentUser(data));
      router.push("/");
    },
    [router, mutateAsync, dispatch],
  );

  return (
    <form
      className="space-y-6"
      onSubmit={onSubmit((values) => void handleSubmit(values))}
    >
      <TextInput
        variant="filled"
        radius={"md"}
        label="Tên tài khoản"
        placeholder="Nhập tên tài khoản của bạn"
        error={errors.username}
        {...getInputProps("username")}
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
          error={errors.password}
          {...getInputProps("password")}
        />
      </Stack>

      <Button
        fullWidth
        variant="filled"
        color="secondary"
        type="submit"
        loading={isLoading}
      >
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
