import Children from "@/types/Children";
import { ChangeMenuMobileProvider } from "@/contexts";

export default function Providers({ children }: Children) {
  return (
    <ChangeMenuMobileProvider>
      {children}
    </ChangeMenuMobileProvider>
  )
}