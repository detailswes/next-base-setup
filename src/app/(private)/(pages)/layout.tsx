import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      sidebar
      topnav

      private page layout here --------------------------------
      {children}
    </>
  );
}
