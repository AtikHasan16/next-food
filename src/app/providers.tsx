"use client";

import { HeroUIProvider } from "@heroui/react";
import { Toaster } from "sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "black",
            color: "skyblue",
            border: "1px solid skyblue",
          },
        }}
      ></Toaster>
      {children}
    </HeroUIProvider>
  );
};

export default Providers;
