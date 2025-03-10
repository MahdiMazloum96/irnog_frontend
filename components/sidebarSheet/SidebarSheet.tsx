import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import logo from "@/public/logo/Logo.png";
import MenubarItems from "../MenubarItmes/MenubarItems";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SidebarSheet() {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const handleLogoClick = () => {
    setOpen(false);
    router.push("/");
  };

  return (
    <div className=" lg:hidden ">
      <Sheet open={open} onOpenChange={setOpen}>
        <FaBars
          className="text-white mr-3 size-8 cursor-pointer"
          onClick={() => setOpen(!open)}
        />

        <SheetContent className=" flex flex-col backdrop-blur-sm  bg-transparent [&>button]:hidden">
          <SheetHeader className="flex justify-between items-center">
            <SheetTitle>
              <Image
                src={logo}
                alt="Logo"
                width={80}
                height={50}
                className="bg-secondary rounded-full p-2 cursor-pointer"
                onClick={handleLogoClick}
              />
            </SheetTitle>
          </SheetHeader>
          <div className=" flex flex-col text-white justify-center items-end gap-10 pr-4 ">
            <MenubarItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
