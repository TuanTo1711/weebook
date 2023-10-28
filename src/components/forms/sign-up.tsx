"use client";

import {
    Anchor,
    Button,
    Group,
    PasswordInput,
    PinInput,
    Stack,
    Stepper,
    Text,
    TextInput,
    Title,
} from "@mantine/core";
import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiUserPin } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { LuMailOpen } from "react-icons/lu";

const SignUp = () => {
  const [active, setActive] = useState<number>(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  return (
    <Stepper
      size="md"
      active={active}
      onStepClick={setActive}
      allowNextStepsSelect={false}
      completedIcon={<AiOutlineCheckCircle size={25} />}
    >
      {/* Create form */}
      <Stepper.Step
        icon={<BiUserPin size={22} />}
        allowStepSelect={false}
        label="Bước 1"
        description="Tạo tài khoản"
      >
        <form className="flex flex-col gap-y-6">
          <Group grow gap={"lg"}>
            <TextInput label="Họ" placeholder="Nhập họ tài khoản của bạn" />
            <TextInput label="Tên" placeholder="Nhập tên tài khoản của bạn" />
          </Group>

          <TextInput
            label="Tên tài khoản"
            placeholder="Nhập tên tài khoản của bạn"
          />

          <TextInput
            label="Địa chỉ email"
            placeholder="Nhập địa chỉ email của bạn  của bạn"
          />

          <Group grow gap={"lg"}>
            <PasswordInput
              label="Mật khẩu"
              placeholder="Nhập mật khẩu của bạn"
            />
            <PasswordInput
              label="Xác nhận mật khẩu"
              placeholder="Nhập lại mật khẩu của bạn"
            />
          </Group>

          <Button onClick={nextStep} color="secondary" fullWidth>
            Tạo tài khoản
          </Button>
        </form>
      </Stepper.Step>
      <Stepper.Step
        icon={<LuMailOpen size={22} />}
        allowStepSelect={false}
        label="Bước 2"
        description="Xác minh email"
      >
        <form className="flex flex-col space-y-4">
          <Stack gap={"0"} align="center">
            <Title order={3} ta={"center"}>
              Nhập mã xác minh
            </Title>
            <Text size="xs" c={"dimmed"}>
              Kiểm tra email của bạn...
            </Text>
          </Stack>
          <PinInput
            oneTimeCode
            type={"number"}
            inputMode="numeric"
            className="self-center"
          />
          <Text ta={"center"} size="xs">
            Chưa nhận được mã? <Anchor>Gửi lại</Anchor>
          </Text>
          <Button onClick={nextStep} color="secondary">
            Xác nhận
          </Button>
        </form>
      </Stepper.Step>
      <Stepper.Step
        icon={<BsShieldCheck size={22} />}
        allowStepSelect={false}
        label="Bước 3"
        description="Hoàn tất đăng ký"
      >
        <Title order={3} ta={"center"}>
          Thông tin cá nhân
        </Title>
        {/* All Info */}
        <Group grow>
          <Button color="primary" onClick={nextStep}>
            Về trang đăng nhập
          </Button>
          <Button color="secondary" onClick={nextStep}>
            Về trang chủ
          </Button>
        </Group>
      </Stepper.Step>
    </Stepper>
  );
};

export default SignUp;
