"use client";
import { ThemeProvider } from "./theme-provider";
import React, { useEffect, useState } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [isMount, setIsMount] = useState<boolean>(false);
  useEffect(() => {
    setIsMount(true);
  }, []);

  if(!isMount){
    return <>{children}</>
  }
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default Provider;
