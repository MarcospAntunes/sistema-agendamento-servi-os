"use client"

import { useChangeMenuMobile } from "@/hooks";
import MenuMobileButtonStyled from "./MenuMobileButton.style";

export default function MenuMobileButton() {
  const { open, handleOpen } = useChangeMenuMobile();

  return (
    <MenuMobileButtonStyled $open={open} onClick={handleOpen}>
      <div></div>
      <div></div>
      <div></div>
    </MenuMobileButtonStyled>
  )
}