import { FC } from "react";
import MenubarItems from "../MenubarItmes/MenubarItems";

interface MenubarProps {}

const Menubar: FC<MenubarProps> = () => {
  return (
    <div className="hidden lg:flex lg:flex-row justify-center items-center border-2 border-white rounded-3xl px-4 py-2 gap-4 backdrop-blur-2xl mr-48">
      <MenubarItems />
    </div>
  );
};

export default Menubar;
