"use client";
import { useEffect } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";
import { firebaseReference } from "../../Config/Firebase";
import { useRouter } from "next/router";

export const SendRouteLogsProvider = ({ children }: any) => {
  const analytics = getAnalytics(firebaseReference);

  useEffect(() => {
    // Check if the router is available on the client side
    if (typeof window !== "undefined") {
      logEvent(analytics, "login", {
        page_path: "login",
      });
    }
  }, [analytics]);

  return children;
};
