import {
  Anchor,
  Card,
  CardSection,
  Divider,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RecoveryForm } from "~/components/forms";

const RecoveryPage = () => {
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
        <CardSection>
          <Stack gap={"xs"}>
            <Text
              c={"secondary"}
              ta={"center"}
              className="h-full text-4xl font-semibold tracking-tight lg:text-5xl"
              variant="gradient"
              gradient={{
                from: "#FF1CF7",
                to: "#b249f8",
                deg: 180,
              }}
            >
              Khôi phục tài khoản
            </Text>
          </Stack>
        </CardSection>
        <Divider />
        <RecoveryForm />
        <Group grow>
          <Anchor component={Link} href={"/"}>
            <span className="flex items-center gap-x-1">
              <AiOutlineArrowLeft />
              <span>Trở về trang chủ?</span>
            </span>
          </Anchor>

          <Anchor component={Link} href={"/sign-in"}>
            <span className="flex items-center justify-end gap-x-1">
              <span>Đi tới đăng nhập</span>
              <AiOutlineArrowRight />
            </span>
          </Anchor>
        </Group>
      </Card>
    </section>
  );
};

export default RecoveryPage;
