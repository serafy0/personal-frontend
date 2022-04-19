import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Text,
  AppShell,
  Navbar,
  Header,
  Footer,
  MediaQuery,
  Burger,
  Button,
  Group,
  Global,
  Title,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import rtlPlugin from "stylis-plugin-rtl";
import ThemeButton from "./components/ThemeButton";
import * as React from "react";
import LanguageMenu from "./components/LanguageMenu";

function App() {
  // hook will return either 'dark' or 'light' on client
  // and always 'light' during ssr as window.matchMedia is not available
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const [rtl, setRtl] = useState(false);

  const [opened, setOpened] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        styles={{
          Text: (theme) => ({
            root: {
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.lime
                  : theme.colors.cyan,
            },
          }),
          Title: (theme) => ({
            root: {
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.green[4]
                  : theme.colors.blue,
            },
          }),
        }}
        theme={{
          colorScheme,
          dir: rtl ? "rtl" : "ltr",
          primaryColor: colorScheme === "dark" ? "grape" : "cyan",

          fontFamily: rtl
            ? "'Cairo', sans-serif"
            : "'Goudy Bookletter 1911', serif",

          headings: {
            fontFamily: rtl ? "'Amiri', serif" : "'Merriweather', serif",
          },
        }}
        emotionOptions={
          rtl
            ? // rtl cache
              { key: "mantine-rtl", stylisPlugins: [rtlPlugin] }
            : // ltr cache
              { key: "mantine" }
        }
      >
        <Global
          styles={(theme) => ({
            body: {
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.blue
                  : theme.colors.orange,
              fontSize: 15,
            },
          })}
        />

        <div dir={rtl ? "rtl" : "ltr"}>
          <AppShell
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
              },
            })}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            navbar={
              <Navbar
                p="md"
                hiddenBreakpoint="sm"
                hidden={!opened}
                width={{ sm: 200, lg: 300 }}
              >
                <Text>Application navbar</Text>
              </Navbar>
            }
            footer={
              <Footer height={60} p="md">
                <Text>Application footer</Text>
              </Footer>
            }
            header={
              <Header height={70} p="md">
                <Group>
                  <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      size="sm"
                      mr="xl"
                    />
                  </MediaQuery>
                  <Button
                    onClick={() =>
                      setRtl((rtl) => {
                        return !rtl;
                      })
                    }
                  >
                    <Text>{rtl ? "rtl" : "lrt"}</Text>
                  </Button>
                </Group>
              </Header>
            }
          >
            <Text>Resize app to see responsive navbar in action</Text>
            <Text> {t("welcome")}</Text>
            <Group>
              <ThemeButton />
              <Button
                onClick={() =>
                  setRtl((rtl) => {
                    return !rtl;
                  })
                }
              >
                {rtl ? "rtl" : "lrt"}
              </Button>
              <Button
                onClick={() => {
                  changeLanguage("ar");
                  setRtl((rtl) => (rtl ? rtl : !rtl));
                }}
              >
                ar
              </Button>
              <Button
                onClick={() => {
                  changeLanguage("en");
                  setRtl((rtl) => (rtl ? !rtl : rtl));
                }}
              >
                en
              </Button>
            </Group>
            <Title>{t("helloUser")}</Title>
            <Title order={1}>{t("helloUser")}</Title>
          </AppShell>
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
export default App;
