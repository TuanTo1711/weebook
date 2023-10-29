import { Anchor, Breadcrumbs } from "@mantine/core";
import Hero from "~/components/hero";

const items = [
  { title: "Mantine", href: "#" },
  { title: "Mantine hooks", href: "#" },
  { title: "use-id", href: "#" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

export default function Home() {
  return (
    <>
      <Breadcrumbs separator="→">{items}</Breadcrumbs>
      <Hero />
    </>
  );
}
