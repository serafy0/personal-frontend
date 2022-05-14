import { Box, Title, Container, SimpleGrid } from "@mantine/core";
import ProjectBox from "../ProjectBox/ProjectBox";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation("project");

  return (
    <Container pb={10}>
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
  );
}

export default Projects;
