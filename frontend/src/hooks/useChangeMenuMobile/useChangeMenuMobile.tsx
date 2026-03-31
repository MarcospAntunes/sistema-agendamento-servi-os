import { ChangeMenuMobileContext } from "@/contexts";
import { useContext } from "react";

export default function useChangeMenuMobile() {
  const { open, setOpen } = useContext(ChangeMenuMobileContext);

  const handleOpen = () => {
    setOpen(!open);
  };

  return { open, handleOpen };
}
