import { useRouter } from "next/navigation";
import { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

interface MenubarItemsProps {
  setOpen?: (open: boolean) => void;
}

const menubarItemsArray = [
  { name: "تهیه بلیط", link: "/buyTicket" },
  { name: "هماهنگی برای ارائه", link: "/cfp" },
  { name: "شیوه نامه", link: "/rules" },
  { name: "راه های ارتباطی ایرناگ", link: "/" },
  { name: "همایش ها", link: "/" },
];

const eventItemsArray = [
  { name: "ایرناگ ۱", link: "/irnog/1" },
  { name: "ایرناگ ۲", link: "/irnog/2" },
  { name: "ایرناگ ۳", link: "/irnog/3" },
  { name: "ایرناگ ۴	", link: "/irnog/4" },
  { name: "ایرناگ ۵", link: "/irnog/5" },
  { name: "ایرناگ ۶", link: "/irnog/6" },
];

const MenubarItems: FC<MenubarItemsProps> = ({ setOpen }) => {
  const router = useRouter();

  const handleClick = (link: string) => {
    if (setOpen) {
      setOpen(false);
    }

    if (link === "/") {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 500);
      router.push(link);
    } else {
      router.push(link);
    }
  };
  const handleIrnogPageClick = (link: string) => {
    if (setOpen) {
      setOpen(false);
    }
    router.push(link);
  };
  return (
    <>
      {menubarItemsArray.map((item, index) => (
        <NavigationMenu key={index}>
          <NavigationMenuList>
            <NavigationMenuItem className="flex flex-row ">
              {item.name === "همایش ها" ? (
                <>
                  <NavigationMenuTrigger className="text-white ">
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-secondary text-primary w-24! text-center">
                    {eventItemsArray.map((item, index) => (
                      <div
                        className="border-b border-white p-1 cursor-pointer hover:text-white"
                        onClick={() => handleIrnogPageClick(item.link)}
                        key={index}
                      >
                        {item.name}
                      </div>
                    ))}
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink
                  className={`mx-2 uppercase text-white hover:text-secondary cursor-pointer ${
                    index === 0 ? "text-secondary hover:text-white" : ""
                  }`}
                  onClick={() => handleClick(item.link)}
                >
                  {item.name}
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ))}
    </>
  );
};

export default MenubarItems;
