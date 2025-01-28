import "@/app/globals.css";
import { RootLayoutType } from "@/types/props";

const RootLayout = ({ children }: RootLayoutType) => {
  return (
    <>
      sidebar topnav private page layout here --------------------------------
      {children}
    </>
  );
};

export default RootLayout;
