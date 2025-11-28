"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/layout/Footer";
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const hideChrome = pathname === "/login" || pathname === "/register";
  return (
    <div>
      {!hideChrome && <Navbar />}
      <main className={hideChrome ? "" : "py-20"}> {children}</main>
      {!hideChrome && <Footer />}
    </div>
  );
};

export default Layout;
