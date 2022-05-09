import { Box, Title, Container, SimpleGrid } from "@mantine/core";
import ProjectBox from "../ProjectBox/ProjectBox";
import { useTranslation } from "react-i18next";

import locales from "./locales";

console.log(locales);

function Projects() {
  const { t } = useTranslation("project");

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <Container>
        <Title sx={{ marginBottom: 15 }}>{t("MyProjects")}</Title>
        <SimpleGrid
          breakpoints={[
            { maxWidth: 755, cols: 2, spacing: "sm" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}
        >
          <ProjectBox />
          <ProjectBox />
          <ProjectBox />
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Projects;
