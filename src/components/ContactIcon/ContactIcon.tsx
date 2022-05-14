import { ActionIcon, useMantineTheme } from "@mantine/core";

interface ContactIconProps {
  link: string;
  title: string;
  Icon: JSX.Element;
}

function ContactIcon(props: ContactIconProps) {
  const { colorScheme } = useMantineTheme();

  return (
    <ActionIcon
      component="a"
      color={colorScheme === "dark" ? "green" : "dark"}
      target="_blank"
      href={props.link}
      variant="outline"
      size="xl"
      title={props.title}
    >
      {props.Icon}
    </ActionIcon>
  );
}

export default ContactIcon;
