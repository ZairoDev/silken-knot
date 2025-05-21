import {
  Sheet,
  SheetTitle,
  SheetHeader,
  SheetContent,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "motion/react";
import Link from "next/link";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className=" p-0 transition-none">
        <SheetHeader className=" p-4 border-b">
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: open ? 1 : 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            <SheetTitle>Menu</SheetTitle>
          </motion.div>
        </SheetHeader>
        <ScrollArea className=" flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => onOpenChange(false)}
              className=" w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
            >
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.children}
              </motion.p>
            </Link>
          ))}

          <div className=" border-t">
            <Link
              href={"/sign-in"}
              onClick={() => onOpenChange(false)}
              className=" w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
            >
              Log In
            </Link>
            <Link
              href={"/sign-up"}
              onClick={() => onOpenChange(false)}
              className=" w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
            >
              Start Selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
