import { ReactElement } from "react";

type CardTypes = {
  strongText: string;
  normalText: string;
  Icon: ReactElement;
  border?: "none" | "solid";
};

type CardStyledTypes = {
  $border?: "none" | "solid";
}

export type { CardTypes, CardStyledTypes };
