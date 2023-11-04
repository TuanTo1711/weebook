"use client";

import {
  Anchor,
  Button,
  Stack,
  Text,
  TextInput,
  Title
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { toast } from "react-toastify";
import { api } from "~/trpc/react";
import { VerifyEmailSchema, type VerifyRequest } from "~/types/validator";

const VerifyEmail = ({
  email,
  nextStep: nextStep,
}: {
  email: string;
  nextStep: () => void;
}) => {
  const { mutateAsync, isLoading } = api.auth.verifyEmail.useMutation();
  const { onSubmit, getInputProps, errors } = useForm<VerifyRequest>({
    validate: zodResolver(VerifyEmailSchema),
    initialValues: {
      email: email,
      code: "",
    },
  });

  const handleSubmit = async (values: VerifyRequest) => {
    await toast.promise(mutateAsync(values), {
      pending: "Please wait...",
      success: "Register successfully 2",
      error: "Something went wrong",
    });
    nextStep();
  };

  return (
    <form
      className="flex flex-col space-y-4"
      onSubmit={onSubmit((values) => void handleSubmit(values))}
    >
      <Stack gap={"0"} align="center">
        <Title order={3} ta={"center"}>
          Nhập mã xác minh
        </Title>
        <Text size="xs" c={"dimmed"}>
          Kiểm tra email {email} của bạn...
        </Text>
      </Stack>
      <TextInput
        size="md"
        error={errors.code}
        type={"number"}
        className="self-center"
        {...getInputProps("code")}
      />
      <Text ta={"center"} size="xs">
        Chưa nhận được mã? <Anchor>Gửi lại</Anchor>
      </Text>
      <Button loading={isLoading} type="submit" color="secondary">
        Xác nhận
      </Button>
    </form>
  );
};

export default VerifyEmail;
