"use client";

import {
  Affix,
  Button,
  Transition,
  rem,
  useMantineColorScheme,
} from "@mantine/core";
import { useHotkeys, useWindowScroll } from "@mantine/hooks";
import { useMemo, type FC, type PropsWithChildren } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Provider } from "react-redux";
import { ToastContainer, type Theme } from "react-toastify";
import { store } from "~/redux";

const ClientProvider: FC<PropsWithChildren> = ({ children }) => {
  const [scroll, scrollTo] = useWindowScroll();
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const toastTheme: Theme = useMemo(() => {
    return colorScheme === "light" ? "light" : "dark";
  }, [colorScheme]);

  useHotkeys([
    ["mod+J", () => setColorScheme(colorScheme === "light" ? "dark" : "light")],
  ]);

  return (
    <>
      <Provider store={store}>{children}</Provider>
      <ToastContainer
        theme={toastTheme}
        limit={1}
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              variant="filled"
              color="primary"
              leftSection={
                <AiOutlineArrowUp style={{ width: rem(16), height: rem(16) }} />
              }
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              On Top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
};

export default ClientProvider;
