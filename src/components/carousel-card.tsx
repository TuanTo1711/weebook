"use client";

import { Carousel } from "@mantine/carousel";
import { Badge, Card, Group, Image, Stack, Text, rem } from "@mantine/core";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";

const images = [
  "https://cdn0.fahasa.com/media/catalog/product/2/0/201023-4.jpg?_gl=1*1kmwle2*_ga*MTc1MzE5MDgyOC4xNjk3ODc1MzI1*_ga_460L9JMC2G*MTY5ODU5MDY2Mi44LjEuMTY5ODU5MzU4MS4yNS4wLjA.*_gcl_aw*R0NMLjE2OTgzMjMzMDUuQ2p3S0NBanduT2lwQmhCUUVpd0FDeUdMdXNxeEd4X04yNnk2Qk15SHFOQm1SbS0ycDNFc0JqTmZhMDRyV281TjdtWFNjMlNkNUxnbGR4b0MzUllRQXZEX0J3RQ..*_gcl_au*MTgyMDAwODQwMi4xNjk3ODc1MzI2",
  "https://cdn0.fahasa.com/media/catalog/product/t/h/thien_su_nha_ben_ban_gioi_han_tap_7.jpg?_gl=1*1kmwle2*_ga*MTc1MzE5MDgyOC4xNjk3ODc1MzI1*_ga_460L9JMC2G*MTY5ODU5MDY2Mi44LjEuMTY5ODU5MzU4MS4yNS4wLjA.*_gcl_aw*R0NMLjE2OTgzMjMzMDUuQ2p3S0NBanduT2lwQmhCUUVpd0FDeUdMdXNxeEd4X04yNnk2Qk15SHFOQm1SbS0ycDNFc0JqTmZhMDRyV281TjdtWFNjMlNkNUxnbGR4b0MzUllRQXZEX0J3RQ..*_gcl_au*MTgyMDAwODQwMi4xNjk3ODc1MzI2",
  "https://cdn0.fahasa.com/media/catalog/product/t/h/thien_su_nha_ben_bia_tap_7_4.jpg?_gl=1*1kmwle2*_ga*MTc1MzE5MDgyOC4xNjk3ODc1MzI1*_ga_460L9JMC2G*MTY5ODU5MDY2Mi44LjEuMTY5ODU5MzU4MS4yNS4wLjA.*_gcl_aw*R0NMLjE2OTgzMjMzMDUuQ2p3S0NBanduT2lwQmhCUUVpd0FDeUdMdXNxeEd4X04yNnk2Qk15SHFOQm1SbS0ycDNFc0JqTmZhMDRyV281TjdtWFNjMlNkNUxnbGR4b0MzUllRQXZEX0J3RQ..*_gcl_au*MTgyMDAwODQwMi4xNjk3ODc1MzI2",
];

export function CarouselCard() {
  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image
        height={220}
        radius={"md"}
        loading="lazy"
        src={image}
        fallbackSrc={"https://via.placeholder.com/220x220"}
        alt={image}
        decoding="async"
        fit="contain"
      />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder padding={0} pb={"sm"} className="space-y-4">
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{ indicator: "w-[4px] h-[4px]" }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Card.Section px={"md"}>
        <Group justify="space-between" wrap="nowrap" gap={"xs"}>
          <Text component={Link} href={"/"} fz={"sm"} fw={400} lineClamp={2}>
            Thiên Sứ Nhà Bên - Tập 7 - Bản Giới Hạn - Tặng Kèm Bookmark + Bìa Áo
            Đặc Biệt + Standee Pop-Up
          </Text>

          <Group gap={2} wrap="nowrap">
            <AiOutlineStar style={{ width: rem(16), height: rem(16) }} />
            <Text fz="xs" fw={500}>
              5
            </Text>
          </Group>
        </Group>
      </Card.Section>

      <Card.Section px={"md"}>
        <Group justify="space-between" wrap="nowrap">
          <Stack gap={0}>
            <Text fz={{ base: "sm", lg: "xl" }} fw={500} c={"red"}>
              95,000đ
            </Text>
            <Text td={"line-through"} fz="sm" span c={"dimmed"}>
              100,000 đ
            </Text>
          </Stack>
          <Stack gap={"xs"} align="end" justify="flex-end" h={"100%"}>
            <Badge color="yellow" size="sm">
              5%
            </Badge>
            <Badge color="gray">Tập 7</Badge>
          </Stack>
        </Group>
      </Card.Section>
    </Card>
  );
}
