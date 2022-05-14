import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Text,
  AppShell,
  Header,
  Footer,
  Group,
  Global,
  Title,
  SegmentedControl,
  Box,
  Container,
  Center,
  BackgroundImage,
  ActionIcon,
} from "@mantine/core";
import { useLocalStorage, useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import rtlPlugin from "stylis-plugin-rtl";
import ThemeButton from "./components/ThemeButton";
import { useEffect } from "react";

import Projects from "./components/Project/Projects";
import { heights } from "@mantine/core/lib/components/Badge/Badge.styles";
import {
  BrandGithub,
  BrandLinkedin,
  Ce,
  File,
  Mail,
  Phone,
} from "tabler-icons-react";

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
  const matches = useMediaQuery("(min-width: 755px)");

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    if (i18n.language === "ar") {
      setRtl(true);
    }
  }, [i18n, setRtl]);

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
                  ? theme.colors.lime[6]
                  : theme.colors.dark,
            },
          }),
          Title: (theme) => ({
            root: {
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.green[4]
                  : theme.colors.black,
            },
          }),
        }}
        theme={{
          colorScheme,
          dir: rtl ? "rtl" : "ltr",
          primaryColor: colorScheme === "dark" ? "green" : "blue",

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
        <div dir={rtl ? "rtl" : "ltr"}>
          <AppShell
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],

                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
              },
            })}
            fixed
            header={
              <Header height={70} p="md">
                <Group>
                  <ThemeButton />

                  <SegmentedControl
                    value={i18n.language}
                    data={[
                      { label: `${t("English")}`, value: "en" },
                      { label: `${t("Arabic")}`, value: "ar" },
                      { label: `${t("French")}`, value: "fr" },
                    ]}
                    onChange={(lang) => {
                      changeLanguage(lang);

                      if (lang === "ar") {
                        setRtl(true);
                      } else {
                        setRtl(false);
                      }
                    }}
                  />
                </Group>
              </Header>
            }
          >
            <Box
              sx={{
                height: "75vh",
                width: "90%",
                position: "relative",
                padding: 10,
                paddingTop: 200,
                textAlign: "center",
              }}
            >
              <Title
                sx={{
                  fontSize: matches ? 85 : 60,
                  paddingBottom: 2,
                }}
                order={1}
              >
                {t("Me")}
              </Title>
              <Title order={2}>{t("AboutMe")}</Title>
              <Group mt={15} position="center" spacing="xl">
                <ActionIcon
                  component="a"
                  color={colorScheme === "dark" ? "green" : "dark"}
                  target="_blank"
                  href="https://www.linkedin.com/in/mohamed-el-serafy-83205b160"
                  variant="outline"
                  size="xl"
                  title="LinkedIn"
                >
                  <BrandLinkedin />
                </ActionIcon>
                <ActionIcon
                  component="a"
                  color={colorScheme === "dark" ? "green" : "dark"}
                  target="_blank"
                  href="https://github.com/serafy0"
                  variant="outline"
                  size="xl"
                  title="Github"
                >
                  <BrandGithub />
                </ActionIcon>
                <ActionIcon
                  component="a"
                  color={colorScheme === "dark" ? "green" : "dark"}
                  target="_blank"
                  href="https://drive.google.com/file/d/1dr-TgjZx7-1pHH73ACBUhwgfpJGQH3nB/view?usp=sharing"
                  variant="outline"
                  size="xl"
                  title="Résumé"
                >
                  <File />
                </ActionIcon>
                <ActionIcon
                  component="a"
                  color={colorScheme === "dark" ? "green" : "dark"}
                  target="_blank"
                  href="tel:+202 555 0177"
                  variant="outline"
                  size="xl"
                  title="Phone"
                >
                  <Phone />
                </ActionIcon>
                <ActionIcon
                  component="a"
                  color={colorScheme === "dark" ? "green" : "dark"}
                  target="_blank"
                  href="mailto:elserafy02@gmail.com?subject=hey mohamed&body=hey Mohamed,%0D%0A%0D%0A I wanted to.. "
                  variant="outline"
                  size="xl"
                  title="Email"
                >
                  <Mail />
                </ActionIcon>
              </Group>
            </Box>
            <Projects />
          </AppShell>
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
export default App;
