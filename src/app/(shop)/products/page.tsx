import { Box, Divider, Flex, SimpleGrid } from "@mantine/core";
import { CarouselCard } from "~/components/carousel-card";

function ProductsPage() {
  return (
    <>
      <Flex gap={"md"}>
        <Box className="hidden basis-1/4 rounded-lg sm:block">
          {/* <Filter /> */}
          Filter is hear
        </Box>
        <Divider orientation="vertical" visibleFrom="lg" />
        <div className="flex flex-1 basis-full flex-col gap-y-6 sm:basis-3/4">
          <SimpleGrid
            cols={{ base: 2, sm: 2, md: 3, lg: 4 }}
            // spacing={{ base: 10, sm: "xl" }}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            {Array.from({ length: 12 }).map((item, key) => {
              return <CarouselCard key={key} />;
            })}
          </SimpleGrid>
        </div>
      </Flex>
    </>
  );
}

export default ProductsPage;
