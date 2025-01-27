import "@/app/globals.css";
import { RootLayoutType } from "@/types/props";

export default function RootLayout({ children }: RootLayoutType) {
  return (
    <>
      sidebar topnav private page layout here --------------------------------
      {children}
    </>
  );
}
