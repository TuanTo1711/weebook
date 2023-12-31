import { Anchor, Card, Divider, Stack, Text } from "@mantine/core";
import type { Metadata } from "next";
import Link from "next/link";
import { SignUpForm } from "~/components/forms";

export const metadata: Metadata = {
  title: "Weebook - Register as new customer",
};

const SignUpPage = () => {
  return (
    <section className="container grid max-w-2xl flex-1 items-center gap-8">
      <Card
        radius={"lg"}
        shadow="lg"
        withBorder
        p={"xl"}
        px={"xl"}
        className="space-y-4"
      >
        <Stack gap={"xs"}>
          <Text
            c={"secondary"}
            ta={"center"}
            className="h-full text-4xl font-semibold tracking-tight lg:text-6xl"
            variant="gradient"
            gradient={{
              from: "#FF1CF7",
              to: "#b249f8",
              deg: 180,
            }}
          >
            Đăng ký
          </Text>
          <Text c={"dimmed"} size="sm" ta={"center"}>
            Đã có tài khoản?{" "}
            <Anchor component={Link} href="/sign-in">
              Đăng nhập
            </Anchor>
          </Text>
        </Stack>
        <Divider />
        <SignUpForm />
      </Card>
    </section>
  );
};

export default SignUpPage;
