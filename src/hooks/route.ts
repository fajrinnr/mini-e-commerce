import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function useCurrentURL() {
  const [currentUrl, setCurrentUrl] = useState<string>("");
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  return currentUrl;
}
