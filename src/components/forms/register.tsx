"use client";

import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { toast } from "react-toastify";
import { api } from "~/trpc/react";
import { SignUpSchema, type SignUpRequest } from "~/types/validator";

const Register = ({
  nextStep,
  getEmail,
}: {
  nextStep: () => void;
  getEmail: (value: string) => void;
}) => {
  const { mutateAsync, isLoading } = api.auth.signUp.useMutation();

  const { onSubmit: submitStepOne, getInputProps } = useForm<SignUpRequest>({
    validate: zodResolver(SignUpSchema),
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirm: "",
    },
  });

  const handleSubmitStepOne = async (values: SignUpRequest) => {
    await toast.promise(mutateAsync(values), {
      pending: "Please wait...",
      success: "Register successfully 1",
      error: "Something went wrong",
    });
    getEmail(values.email);
    nextStep();
  };

  return (
    <form
      className="flex flex-col gap-y-4"
      onSubmit={submitStepOne((values) => void handleSubmitStepOne(values))}
    >
      <Group grow gap={"lg"}>
        <TextInput
          label="Họ"
          placeholder="Nhập họ tài khoản của bạn"
          {...getInputProps("firstName")}
        />
        <TextInput
          label="Tên"
          placeholder="Nhập tên tài khoản của bạn"
          {...getInputProps("lastName")}
        />
      </Group>

      <TextInput
        label="Tên tài khoản"
        placeholder="Nhập tên tài khoản của bạn"
        {...getInputProps("username")}
      />

      <TextInput
        label="Địa chỉ email"
        placeholder="Nhập địa chỉ email của bạn  của bạn"
        {...getInputProps("email")}
      />

      <Group grow gap={"lg"}>
        <PasswordInput
          label="Mật khẩu"
          placeholder="Nhập mật khẩu của bạn"
          {...getInputProps("password")}
        />
        <PasswordInput
          label="Xác nhận mật khẩu"
          placeholder="Nhập lại mật khẩu của bạn"
          {...getInputProps("confirm")}
        />
      </Group>

      <Button color="secondary" fullWidth type="submit" loading={isLoading}>
        Tạo tài khoản
      </Button>
    </form>
  );
};

export default Register;
