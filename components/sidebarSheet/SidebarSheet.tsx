import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import logo from "@/public/logo/Logo.png";
import MenubarItems from "../MenubarItmes/MenubarItems";

export function SidebarSheet() {
  return (
    <div className=" lg:hidden ">
      <Sheet>
        <SheetTrigger asChild>
          <FaBars className="text-white mr-3 size-8" />
        </SheetTrigger>
        <SheetContent className=" flex flex-col backdrop-blur-sm  bg-transparent [&>button]:hidden">
          <SheetHeader className="flex justify-between items-center">
            <Image
              src={logo}
              alt="Logo"
              width={80}
              height={50}
              className="bg-secondary rounded-full p-2"
            />
          </SheetHeader>
          <div className=" flex flex-col text-white justify-center items-end gap-10 pr-4 ">
            <MenubarItems />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
