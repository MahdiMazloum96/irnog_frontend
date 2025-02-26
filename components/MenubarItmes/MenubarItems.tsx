import { FC } from "react";

interface MenubarItemsProps {}

const menubarItemsArray = [
  "تهیه بلیط ",
  "هماهنگی برای ارائه",
  "شیوه نامه",
  "همایش ها",
  "راه های ارتباطی ایرناگ",
];

const MenubarItems: FC<MenubarItemsProps> = () => {
  return (
    <>
      {menubarItemsArray.map((item, index) => (
        <div
          key={index}
          className={`mx-2 uppercase text-white hover:text-secondary cursor-pointer ${
            index === 0 ? "text-secondary!  hover:text-white!  " : ""
          }`}
        >
          {item}
        </div>
      ))}
    </>
  );
};

export default MenubarItems;
