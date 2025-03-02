"use client";
import { Card } from "@/components/ui/card";
import { FC } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Presentation } from "lucide-react";

const FormSchema = z.object({
  username: z.string().min(2, { message: "نام باید حداقل ۲ کاراکتر باشد" }),
  lastName: z
    .string()
    .min(2, { message: "نام خانوادگی باید حداقل ۲ کاراکتر باشد" }),
  phone: z.string().min(10, { message: "شماره تماس معتبر وارد کنید" }),
  email: z.string().email({ message: "ایمیل معتبر وارد کنید" }),
  company: z.string().optional(),
  PresentationSubject: z
    .string()
    .min(2, { message: "موضوع ارائه باید حداقل ۲ کاراکتر باشد" }),
  TFP: z.string().optional(),
  peresentationFile: z
    .instanceof(File, { message: "فایل معتبر انتخاب کنید" })
    .refine(
      (file) => file.size < 5 * 1024 * 1024,
      "فایل نباید بیشتر از 5MB باشد"
    ),

  description: z.string().optional(),
});

interface CfpPageProps {}
const CfpPage: FC<CfpPageProps> = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      lastName: "",
      phone: "",
      email: "",
      company: "",
      PresentationSubject: "",
      TFP: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success(`اطلاعات ارسال شد `);
  }

  return (
    <div className="h-screen">
      <Card className="  flex flex-col justify-center p-8 m-auto w-3/4 lg:w-2/5  min-h-auto align-middle md:mx-auto mx-4 mt-16  backdrop-blur-sm bg-gradient-to-r from-orange-400/40 to-orange-600/40 border border-white/20 shadow-[0px_15px_60px_#eb9b3e] rounded-lg">
        <h1 className="text-2xl text-white align-middle m-auto mt-5 select-none">
          هماهنگی برای ارائه
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-12 flex flex-col  my-5   lg:w-4/5 m-auto"
          >
            <div className=" flex flex-col lg:flex-row gap-12">
              {/** Last Name */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="نام خانوادگی"
                        {...field}
                        className="text-right"
                      />
                    </FormControl>
                    <FormMessage className="text-gray-300 text-right text-md" />
                  </FormItem>
                )}
              />
              {/** Username */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="نام"
                        {...field}
                        className="text-right"
                      />
                    </FormControl>
                    <FormMessage className="text-gray-300 text-right text-md" />
                  </FormItem>
                )}
              />
            </div>
            <div className=" flex flex-col lg:flex-row gap-12">
              {/** Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="ایمیل"
                        {...field}
                        className="text-right"
                      />
                    </FormControl>
                    <FormMessage className="text-gray-300 text-right text-md" />
                  </FormItem>
                )}
              />
              {/** Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="شماره تماس"
                        {...field}
                        className="text-right"
                      />
                    </FormControl>
                    <FormMessage className="text-gray-300 text-right text-md" />
                  </FormItem>
                )}
              />
            </div>
            <div className=" flex flex-col lg:flex-row gap-12">
              {/** Company (Optional) */}
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="نام شرکت (اختیاری)"
                        {...field}
                        className="text-right"
                      />
                    </FormControl>
                    <FormMessage className="text-white text-right text-md" />
                  </FormItem>
                )}
              />

              {/** Presentation subject*/}
              <FormField
                control={form.control}
                name="PresentationSubject"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="موضوع ارائه"
                        {...field}
                        className="text-right"
                      />
                    </FormControl>
                    <FormMessage className="text-white text-right text-md" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-row  gap-5  justify-center items-center  w-full ">
              {/** time for Presentation*/}
              <FormField
                control={form.control}
                name="TFP"
                render={({ field }) => (
                  <FormItem className="w-full ">
                    <FormControl>
                      <Input
                        placeholder="زمان مورد نیاز ارائه"
                        {...field}
                        className="text-right "
                      />
                    </FormControl>
                    <FormMessage className="text-white text-right text-md " />
                  </FormItem>
                )}
              />
              {/** Presentation File*/}
              <FormField
                control={form.control}
                name="peresentationFile"
                render={({ field: { onChange, ref, ...field } }) => (
                  <FormItem className="w-full ">
                    <FormControl>
                      <>
                        <Input
                          className="hidden"
                          id="file"
                          type="file"
                          onChange={(event) => {
                            const file = event.target.files?.[0];
                            if (file) {
                              onChange(file);
                            }
                          }}
                          ref={ref}
                        />
                        <label
                          htmlFor="file"
                          className=" bg-gray-200 px-4 py-2 rounded cursor-pointer text-gray-600 text-center h-28 w-full"
                        >
                          <Presentation size={24} />
                          <span className="text-sm">
                            فایل خود را بارگذاری کنید
                          </span>
                        </label>
                      </>
                    </FormControl>
                    <FormMessage className="text-white text-right text-md" />
                  </FormItem>
                )}
              />
            </div>
            {/** Description*/}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="textarea"
                      placeholder="توضیحات"
                      {...field}
                      className="text-right h-32"
                    />
                  </FormControl>
                  <FormMessage className="text-white text-right text-md" />
                </FormItem>
              )}
            />

            <Button
              className="w-4/5 bg-secondary text-white text-md align-middle mx-auto cursor-pointer hover:shadow-[0px_2px_3px_#FFFFFF] "
              type="submit"
            >
              ارسال
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};
export default CfpPage;
