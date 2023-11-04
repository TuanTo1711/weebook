"use client";

import { Card, Divider, Skeleton } from "@mantine/core";
import { type FC } from "react";

const ProductSkeleton: FC = () => {
  return (
    <Card withBorder className="space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="bg-default-300 h-[150px] w-[250px] rounded-lg"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-full rounded-lg">
          <div className="bg-default-200 h-3 w-3/5 rounded-lg"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="bg-default-200 h-3 w-4/5 rounded-lg"></div>
        </Skeleton>
      </div>
      <Divider />
      <div className="flex justify-between gap-1">
        <Skeleton className="w-2/5 rounded-lg">
          <div className="bg-default-200 h-3 w-2/5 rounded-lg"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="bg-default-200 h-3 w-2/5 rounded-lg"></div>
        </Skeleton>
        <Skeleton className="w-3/5 rounded-lg">
          <div className="bg-default-300 h-3 w-3/5 rounded-lg"></div>
        </Skeleton>
      </div>
    </Card>
  );
};

export default ProductSkeleton;
