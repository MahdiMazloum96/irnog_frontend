import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContentCardProps {}

const ContentCard: React.FC<ContentCardProps> = () => {
  return (
    <Card className="text-white w-5/6 lg:w-4/6 align-middle m-auto  backdrop-blur-sm bg-gradient-to-r from-primary/40 to-secondary/40 border border-white/20 shadow-lg my-8">
      <CardHeader className="flex justify-center items-center text-center pt-4 select-none ">
        <CardTitle className="leading-relaxed">
          گروه گردانندگان شبکه اینترنت ایران
        </CardTitle>
      </CardHeader>
      <CardContent
        className="flex justify-start lg:text-base/10 select-none text-sm text-justify"
        dir="rtl"
      >
        گردانندگان شبکه اینترنت ایران یک گروه تخصصی با سازوکار شفاف و مبتنی بر
        جذب حداکثری تمام ذینفعان می‌باشد. هدف گروه گردانندگان شبکه اینترنت
        ایران، ارائه پیشنهادات کارشناسانه برای بهبود شرایط استفاده از اینترنت
        توسط ایرانیان و همچنین یافتن راهکارهای مناسب برای افزایش نفوذ و بهره‌وری
        اینترنت توسط کاربران ایرانی است. هدف دیگر گروه گردانندگان شبکه، افزایش و
        تسهیل مشارکت اعضا در سایر گروه‌ها و سازمان‌های سیاست‌گذار و تصمیم‌گیرنده
        اینترنت می‌باشد. گروه گردانندگان شبکه اینترنت ایران مسئولیت، وظیفه و
        کارکرد اجرایی نداشته و صرفاً یک نهاد مشورتی و پیشنهاددهنده برای راهبرد
        اینترنت است. در صورت نیاز به انجام کارهای اجرایی، جهت تحقق امور مشورتی و
        راهبردی، گروه هماهنگی مرکزی با تخصیص منابع مورد نیاز و نظارت بر پیشرفت
        امور، این کارها را به انجام می‌رساند. زبان کاری گروه گردانندگان شبکه
        اینترنت ایران، فارسی است و کلیه مکاتبات به زبان فارسی انجام می‌شوند. در
        صورت لزوم و صلاحدید گروه هماهنگی مرکزی، مستندات منتخب به زبان‌های دیگر
        ترجمه خواهند شد
      </CardContent>
    </Card>
  );
};

export default ContentCard;
