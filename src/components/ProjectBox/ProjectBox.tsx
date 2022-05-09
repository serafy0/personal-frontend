import {
  Box,
  Image,
  Card,
  Text,
  Title,
  Container,
  SimpleGrid,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "react-i18next";

function ProjectBox() {
  const matches = useMediaQuery("(min-width: 755px)");
  const { t } = useTranslation("projectBox");

  return (
    <Box>
      <Card
        shadow="sm"
        p="lg"
        style={{ marginTop: 0, paddingTop: 1 }}
        component="a"
        href="https://github.com/serafy0"
        target="_blank"
      >
        {!matches && (
          <Container p={4}>
            <Title>{t("virtualLibiray")}</Title>
          </Container>
        )}

        <Card.Section>
          <SimpleGrid cols={matches ? 2 : 1} spacing={0}>
            {matches && (
              <Container p={5} mt={15}>
                <Title>{t("virtualLibiray")}</Title>

                <Text>{t("Loremipsum")}</Text>
              </Container>
            )}

            <Image
              src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              height={160}
              alt="project"
              withPlaceholder
            />
          </SimpleGrid>
        </Card.Section>
      </Card>
    </Box>
  );
}

export default ProjectBox;
