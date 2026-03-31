import { Dispatch, SetStateAction } from "react";

type ChangeMenuMobileContextTypes = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default ChangeMenuMobileContextTypes;