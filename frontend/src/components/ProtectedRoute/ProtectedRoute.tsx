"use client";

import { useUserParams } from "@/hooks";
import { refreshUser } from "@/services/api/getRoutes";
import Children from "@/types/Children";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }: Children) {
  const router = useRouter();
  const { handleVerifyUser } = useUserParams();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    async function verifyUserAuth() {
      const res = await handleVerifyUser();
      if(res) setAuthorized(true);
    }
    verifyUserAuth();
  }, [router]);

  if (!authorized) return <p>Carregando...</p>;
  return <>{children}</>;
}
