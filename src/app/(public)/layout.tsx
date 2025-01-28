import "@/app/globals.css";
import { ReactNode } from "react";

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <>
      public page layout here
      {children}
    </>
  );
};

export default RootLayout;
