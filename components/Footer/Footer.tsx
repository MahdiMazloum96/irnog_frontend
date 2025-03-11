import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <div>
      <div>کلیه حقوق این وب سایت متعلق به انجمن ایرناگ می‌باشد © 2017-2025</div>
      <div>
        sponser by <Link href="/dashboard">hoopadcloud.com</Link>
      </div>
    </div>
  );
};
export default Footer;
