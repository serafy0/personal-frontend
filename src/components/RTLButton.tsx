import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { SetStateAction } from "react";
import { Leaf, Dental } from "tabler-icons-react";

function RTLbutton(rtl: boolean, updateRtl: any) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  //  useEffect(() => {
  //    setRtl
  //  }, [props]);

  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={() => updateRtl}
      title="Toggle color scheme"
    >
      {rtl ? <Leaf size={18} /> : <Dental size={18} />}
    </ActionIcon>
  );
}

export default RTLbutton;
