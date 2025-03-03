import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContentCardProps {}

const ContentCard: React.FC<ContentCardProps> = () => {
  return (
    <Card className="text-white w-5/6 lg:w-4/6 align-middle m-auto  backdrop-blur-sm bg-gradient-to-r from-orange-400/40 to-orange-600/40 border border-white/20 shadow-lg my-8">
      <CardHeader className="flex justify-center items-center pt-4 select-none">
        <CardTitle>گروه گردانندگان شبکه اینترنت ایران (IRNOG)</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-start text-base/10 text-right select-none px-10 ">
        گردانندگان شبکه اینترنت ایران یک گروه تخصصی با ساز و کار شفاف و مبتنی بر
        جذب حداکثری تمام ذینفعان میباشد.هدف گروه گرد انندگان شبکه اینترنت ایران
        ارایه پیشنهادات کارشناسانه برای بهبود شرایط استفاده از اینترنت توسط
        ایرانیان و همچنین یافتن راه کارهای مناسب برای افزایش نفوذ و بهره وری از
        اینترنت توسط کاربران ایرانی می باشد. هدف دیگر گروه گردانندگان شبکه
        افزایش وتسهیل مشارکت اعضا در سایر گروه ها و سازمانهای سیاست گذار و تصمیم
        گیرنده اینترنت میباشد. گروه گرد انندگان شبکه اینترنت ایران مسئولیت،
        وظیفه و کارکرد اجرایی نداشته و صرفا یک نهاد مشورتی و پیشنهاد دهنده برای
        راه برد اینترنت می باشدو در صورت نیاز به انجام کارهای اجرایی، جهت تحقق
        امور مشورتی و راه بردی گروه هماهنگی مرکزی با تخصص منابع مورد نیاز و
        نظارت بر پیشرفت امور، این کارها را به انجام می رساند. -زبان کاری گروه
        گرد انندگان شبکه اینترنت ایران زبان فارسی است و کلیه ی مکاتبات به زبان
        فارسی انجام می شوند. در صورت لزوم و صلاحدید گروه هماهنگی مرکزی، مستناد
        منتخب به زبان های دیگری ترجمه می شوند.
      </CardContent>
    </Card>
  );
};

export default ContentCard;
