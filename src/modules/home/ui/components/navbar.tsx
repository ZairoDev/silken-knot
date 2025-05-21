"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import { motion } from "motion/react";
import { MenuIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { NavbarSidebar } from "./navbar-sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      variant={"outline"}
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && " bg-black text-white hover:bg-black hover:text-white"
      )}
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("silkenknot-token");
    setIsLoggedIn(!!token);
  }, [])

  return (
    <nav className=" h-[70px] flex border-b justify-between font-medium bg-white border border-black">
      <Link href={"/"} className=" pl-6 flex items-center ">
        {"SilkenKnot".split("").map((char, index) => (
          <motion.p
            key={index}
            className={cn(
              " text-4xl lg:text-2xl xl:text-5xl font-semibold flex",
              poppins.className
            )}
            // initial={{ scale: 0.95 }}
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: index * 0.1 }}
          >
            {char}
          </motion.p>
        ))}
      </Link>

      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      <div className=" items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem key={item.href} href={item.href} isActive={pathname === item.href}>
            {item.children}
          </NavbarItem>
        ))}
      </div>

      {!isLoggedIn ? (
        <div>
          <Button
            asChild
            className=" border-l border-t-0 border-r-0 px-12 h-full rounded-none bg-black
        text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
          >
            <Link href={"/admin"}>Dashboard</Link>
          </Button>
        </div>
      ) : (
        <div className=" hidden lg:flex">
          <Button
            asChild
            variant={"secondary"}
            className=" border-l border-t-0 border-r-0 border-l-black px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
          >
            <Link href={"/sign-in"}>Log In</Link>
          </Button>
          {/* <Button
            asChild
            className=" border-l border-t-0 border-r-0 px-12 h-full rounded-none bg-black
        text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
          >
            <Link href={"/sign-up"}>Start Selling</Link>
          </Button> */}
        </div>
      )}

      <div className=" flex lg:hidden items-center justify-center">
        <Button
          variant={"ghost"}
          className=" size-12 border-transparent bg-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
