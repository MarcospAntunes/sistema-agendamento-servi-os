"use client"

import ChangeMenuMobileContextTypes from "./ChangeMenuMobileContext.type";
import Children from "@/types/Children";
import { useState, createContext } from "react";

const ChangeMenuMobileContext = createContext<ChangeMenuMobileContextTypes>({} as ChangeMenuMobileContextTypes);
ChangeMenuMobileContext.displayName = "MenuMobile";

function ChangeMenuMobileProvider({ children }: Children) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ChangeMenuMobileContext.Provider value={{open, setOpen}}>
      {children}
    </ChangeMenuMobileContext.Provider>
  );
}

export { ChangeMenuMobileContext, ChangeMenuMobileProvider };