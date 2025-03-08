"use client";
import { ReactNode } from "react";
import EditorProvider from "@/context/EditorContext";
import SocketProvider from "@/context/socketContext";
const Layout = ({ children }: { children: ReactNode }) => {
  return<SocketProvider>
    <EditorProvider>{children}</EditorProvider>
  </SocketProvider>;
};

export default Layout;
