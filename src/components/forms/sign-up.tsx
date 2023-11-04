"use client";

import { Button, Group, Stepper, Title } from "@mantine/core";
import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiUserPin } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { LuMailOpen } from "react-icons/lu";
import Register from "./register";
import VerifyEmail from "./verify-email";
import Link from "next/link";

const SignUp = () => {
  const [active, setActive] = useState<number>(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const [email, setEmail] = useState("");

  return (
    <Stepper
      classNames={{
        steps: "hidden sm:flex",
        content: "pt-0 sm:pt-4",
      }}
      size="md"
      active={active}
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
        <Register nextStep={nextStep} getEmail={setEmail} />
      </Stepper.Step>
      <Stepper.Step
        icon={<LuMailOpen size={22} />}
        allowStepSelect={false}
        label="Bước 2"
        description="Xác minh email"
      >
        <VerifyEmail email={email} nextStep={nextStep} />
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
          <Button color="primary" component={Link} href={"/sign-in"}>
            Về trang đăng nhập
          </Button>
          <Button color="secondary" component={Link} href={"/"}>
            Về trang chủ
          </Button>
        </Group>
      </Stepper.Step>
    </Stepper>
  );
};

export default SignUp;
