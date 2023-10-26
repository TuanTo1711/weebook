"use client";

import { CloseButton, Input, Popover } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { useMemo, useState } from "react";

const Search = () => {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useInputState("");
  // const [debounced] = useDebouncedValue(value, 500);
  // const { data } = api.book.search.useQuery(debounced);

  const leftSection = useMemo(() => <IconSearch stroke={1.5} />, []);

  const rightSection = useMemo(
    () => (
      <CloseButton
        aria-label="Clear input"
        onClick={() => setValue("")}
        style={{ display: value ? undefined : "none" }}
      />
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
          value={value}
          onChange={setValue}
          leftSection={leftSection}
          rightSectionPointerEvents="all"
          rightSection={rightSection}
          onFocus={() => setOpened(true)}
          w={"100%"}
          placeholder="Seach..."
          variant="filled"
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
