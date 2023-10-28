"use client";

import { type FC, type PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";
import { Affix, Button, MantineProvider, Transition, rem } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { AiOutlineArrowUp } from "react-icons/ai";

import { theme } from "~/config/theme";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <SessionProvider>
      <MantineProvider theme={theme}>
        {children}
        <Affix position={{ bottom: 20, right: 20 }}>
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <Button
                variant="filled"
                color="primary"
                leftSection={
                  <AiOutlineArrowUp
                    style={{ width: rem(16), height: rem(16) }}
                  />
                }
                style={transitionStyles}
                onClick={() => scrollTo({ y: 0 })}
              >
                On Top
              </Button>
            )}
          </Transition>
        </Affix>
      </MantineProvider>
    </SessionProvider>
  );
};

export default Providers;
