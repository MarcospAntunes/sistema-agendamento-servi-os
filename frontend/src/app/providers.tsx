import Children from "@/types/Children";
import { AlertProvider, ChangeMenuMobileProvider } from "@/contexts";
import { UserParamsProvider } from "@/contexts/UserParamsContext/UserParamsContext";

export default function Providers({ children }: Children) {
  return (
    <AlertProvider>
      <ChangeMenuMobileProvider>
        <UserParamsProvider>{children}</UserParamsProvider>
      </ChangeMenuMobileProvider>
    </AlertProvider>
  );
}
