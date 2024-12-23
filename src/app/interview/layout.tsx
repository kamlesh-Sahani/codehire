"use client";
import { ReactNode } from "react";
import EditorProvider from "@/context/EditorContext";
const Layout = ({ children }: { children: ReactNode }) => {
  return <EditorProvider>{children}</EditorProvider>;
};

export default Layout;