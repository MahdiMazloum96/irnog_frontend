import { useRouter } from "next/navigation";
import { FC } from "react";

interface MenubarItemsProps {
  setOpen: (open: boolean) => void;
}

const menubarItemsArray = [
  { name: "تهیه بلیط", link: "/buyTicket" },
  { name: "هماهنگی برای ارائه", link: "/cfp" },
  { name: "شیوه نامه", link: "/rules" },
  { name: "همایش ها", link: "/ticket" },
  { name: "راه های ارتباطی ایرناگ", link: "/ticket" },
];

const MenubarItems: FC<MenubarItemsProps> = ({ setOpen }) => {
  const router = useRouter();
  const handleClick = (link: string) => {
    setOpen(false);
    router.push(link);
  };
  return (
    <>
      {menubarItemsArray.map((item, index) => (
        <div
          key={index}
          className={`mx-2 uppercase text-white hover:text-secondary cursor-pointer ${
            index === 0 ? "text-secondary!  hover:text-white!  " : ""
          }`}
          onClick={() => handleClick(item.link)}
        >
          {item.name}
        </div>
      ))}
    </>
  );
};

export default MenubarItems;
