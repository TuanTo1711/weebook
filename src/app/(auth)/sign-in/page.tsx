import { Anchor, Card, Divider, Stack, Text } from "@mantine/core";
import { type Metadata } from "next";
import Link from "next/link";
import { SignInForm } from "~/components/forms";

export const metadata: Metadata = {
  title: "Weebook - Login into shop",
};

const SignInPage = () => {
  return (
    <section className="container grid max-w-lg flex-1 items-center gap-8 pb-8 pt-6 md:py-8">
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
            Đăng nhập
          </Text>
          <Text c={"dimmed"} size="sm" ta={"center"}>
            Chưa có tài khoản?{" "}
            <Anchor component={Link} href="/sign-up">
              Đăng ký
            </Anchor>
          </Text>
        </Stack>
        <Divider />
        <SignInForm />
      </Card>
    </section>
  );
};

export default SignInPage;
