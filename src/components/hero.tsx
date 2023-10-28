"use client";

import { Grid, SimpleGrid, Skeleton, rem } from "@mantine/core";

const PRIMARY_COL_HEIGHT = rem(300);

const Hero = () => {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
      <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" />
      <Grid gutter="md">
        <Grid.Col>
          <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" />
        </Grid.Col>
        <Grid.Col span={6}>
          <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" />
        </Grid.Col>
        <Grid.Col span={6}>
          <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" />
        </Grid.Col>
      </Grid>
    </SimpleGrid>
  );
};

export default Hero;
