"use client";

import { Carousel } from "@mantine/carousel";
import {
  Badge,
  Card,
  Divider,
  Group,
  Image,
  Stack,
  Text,
  rem
} from "@mantine/core";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";
import slugify from "slugify";
import { type ProductInfo } from "~/types";
import { calculateDiscountedPrice, formatPrice } from "~/utils";

interface CarouselCardProps {
  product: ProductInfo;
  orientation?: "vertical" | "horizontal";
}

export function CarouselCard({ product, orientation }: CarouselCardProps) {
  const slides = product.images.map((image) => (
    <Carousel.Slide key={image}>
      <Image
        height={220}
        loading="lazy"
        src={image}
        fallbackSrc={"https://via.placeholder.com/220x220"}
        alt={image}
        decoding="async"
        fit="contain"
      />
    </Carousel.Slide>
  ));

  if (orientation === "horizontal") {
    return (
      <Card
        radius="md"
        withBorder
        padding={0}
        pb={0}
        className="spac-x-4 flex-row"
        mah={225}
      >
        <Card.Section maw={220} miw={220}>
          <Carousel
            classNames={{
              indicators:
                "bottom-0 left-0 h-6 items-center bg-[linear-gradient(180deg,transparent_0,rgba(0,0,0,.8)_90%,rgba(0,0,0,.8))]",
              indicator: "w-2 h-1 data-[active]:w-4 transition-[width]",
            }}
            align="start"
            height={220}
            slideSize={"100%"}
            slideGap={{ base: 0, sm: "md" }}
            withControls={false}
            withIndicators={true}
          >
            {slides}
          </Carousel>
        </Card.Section>
        <Divider orientation="vertical" />
        <Card.Section w={"100%"}>
          <Stack p={"md"}>
            <Text
              component={Link}
              href={`/details/${slugify(product.name, {
                lower: true,
                locale: "vi",
              })}`}
              fz={"xl"}
              fw={600}
              lineClamp={2}
            >
              {product.name}
            </Text>
            <Group grow>
              <Stack gap={"xs"}>
                <Text fz={{ base: "sm", lg: "xl" }} fw={500} c={"red"}>
                  {formatPrice(
                    calculateDiscountedPrice(product.price, product.discount),
                  )}
                </Text>
                <Text td={"line-through"} fz="sm" span c={"dimmed"}>
                  {formatPrice(product.price)}
                </Text>
              </Stack>
              <Stack gap={"xs"} align="end" justify="flex-end" h={"100%"}>
                <Badge color="yellow" size="sm">
                  {product?.discount}
                </Badge>
                <Badge color="gray">{product?.chapter}</Badge>
              </Stack>
            </Group>
            <Group gap={2} wrap="nowrap" grow>
              <Group gap={2}>
                <AiOutlineStar style={{ width: rem(20), height: rem(20) }} />
                <Text fz="xs" fw={500}>
                  {product.reviews.length}
                </Text>
              </Group>
            </Group>
          </Stack>
        </Card.Section>
      </Card>
    );
  }

  return (
    <Card radius="md" withBorder padding={"sm"} className="space-y-4">
      <Card.Section>
        <Carousel
          withIndicators
          withControls={false}
          loop
          classNames={{
            indicators:
              "bottom-0 left-0 h-6 items-center bg-[linear-gradient(180deg,transparent_0,rgba(0,0,0,.8)_90%,rgba(0,0,0,.8))]",
            indicator: "w-2 h-1 data-[active]:w-4 transition-[width]",
          }}
        >
          {slides}
        </Carousel>
        <Divider />
      </Card.Section>
      <Card.Section px={"md"}>
        <Group justify="space-between" wrap="nowrap" gap={"xs"}>
          <Text
            component={Link}
            href={`/details/${slugify(product.name, {
              lower: true,
              locale: "vi",
            })}`}
            fz={"sm"}
            fw={400}
            lineClamp={2}
          >
            {product.name}
          </Text>

          <Group gap={2} wrap="nowrap">
            <AiOutlineStar style={{ width: rem(20), height: rem(20) }} />
            <Text fz="xs" fw={500}>
              {product.reviews.length}
            </Text>
          </Group>
        </Group>
      </Card.Section>

      <Card.Section px={"md"}>
        <Group justify="space-between" wrap="nowrap">
          <Stack gap={0}>
            <Text fz={{ base: "sm", lg: "xl" }} fw={700} c={"red"}>
              {formatPrice(
                calculateDiscountedPrice(product.price, product?.discount),
              )}
              đ
            </Text>
            <Text td={"line-through"} fz="sm" span c={"dimmed"}>
              {formatPrice(product.price)}đ
            </Text>
          </Stack>
          <Stack gap={"xs"} align="end" justify="flex-end" h={"100%"}>
            <Badge color="yellow" size="sm">
              {product?.discount}%
            </Badge>
            <Badge color="gray">{product.chapter}</Badge>
          </Stack>
        </Group>
      </Card.Section>
    </Card>
  );
}
