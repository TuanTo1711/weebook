"use client";

import { useMemo, useRef, useState } from "react";
import { CloseButton, Input, Kbd, Popover } from "@mantine/core";
import { useHotkeys, useInputState } from "@mantine/hooks";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useInputState("");
  // const [debounced] = useDebouncedValue(value, 500);
  // const { data } = api.book.search.useQuery(debounced);
  const inputRef = useRef<HTMLInputElement>(null);
  useHotkeys([["mod+K", () => inputRef?.current?.focus()]]);

  const leftSection = useMemo(
    () => <AiOutlineSearch stroke={"1.5"} size={25} />,
    [],
  );

  const rightSection = useMemo(
    () => (
      <>
        <CloseButton
          aria-label="Clear input"
          onClick={() => setValue("")}
          style={{
            visibility: value ? "visible" : "hidden",
          }}
        />
        <Kbd>⌘ + K</Kbd>
      </>
    ),
    [value, setValue],
  );

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      width="target"
      withArrow
      shadow="lg"
      position="bottom-start"
      arrowSize={12}
      arrowPosition="side"
      arrowOffset={15}
    >
      <Popover.Target>
        <Input
          ref={inputRef}
          radius={"xl"}
          value={value}
          onChange={setValue}
          leftSection={leftSection}
          leftSectionWidth={"50"}
          rightSectionWidth={"100"}
          rightSectionPointerEvents="all"
          rightSection={rightSection}
          rightSectionProps={{
            className: "mx-1",
          }}
          onFocus={() => setOpened(true)}
          w={"100%"}
          placeholder="Seach..."
          variant="default"
          size="md"
        />
      </Popover.Target>
      <Popover.Dropdown>
        <div>Pop content</div>
      </Popover.Dropdown>
    </Popover>
  );
};

export default Search;
