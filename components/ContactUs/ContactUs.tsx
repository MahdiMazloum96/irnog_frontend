import { FC } from "react";
import { Card } from "../ui/card";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import { ContactContent } from "./ContactContent";
interface ContactUsProps {}
const ContactUs: FC<ContactUsProps> = () => {
  return (
    <Card className="w-4/5 bg-secondary align-middle m-auto my-16 overflow-hidden ">
      <h1 className="uppercase lg:text-6xl text-4xl text-white font-extrabold text-center">
        contact us
      </h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-5 my-10 mx-4">
        {ContactContent.map((content) => {
          return (
            <div className="text-white flex flex-col gap-8 items-center ">
              <div className="text-xl">{content.title}</div>
              <div className="text-right">{content.content}</div>
            </div>
          );
        })}
      </div>
      <div className="my-8">
        <SocialMediaIcons />
      </div>
    </Card>
  );
};
export default ContactUs;
