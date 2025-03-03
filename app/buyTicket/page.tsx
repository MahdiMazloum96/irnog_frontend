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

const FormSchema = z.object({
  username: z.string().min(2, { message: "نام باید حداقل ۲ کاراکتر باشد" }),
  lastName: z
    .string()
    .min(2, { message: "نام خانوادگی باید حداقل ۲ کاراکتر باشد" }),
  phone: z.string().min(10, { message: "شماره تماس معتبر وارد کنید" }),
  email: z.string().email({ message: "ایمیل معتبر وارد کنید" }),
  company: z.string().optional(),
});

interface BuyTicketProps {}
const BuyTicket: FC<BuyTicketProps> = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      lastName: "",
      phone: "",
      email: "",
      company: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success(`اطلاعات ارسال شد `);
  }

  return (
    <div className="h-screen">
      <Card className=" md:w-3/5 lg:w-2/5 p-8 h-auto align-middle md:mx-auto mx-4 mt-16  backdrop-blur-sm bg-gradient-to-r from-orange-400/40 to-orange-600/40 border border-white/20 shadow-[0px_15px_60px_#eb9b3e] rounded-lg">
        <h1 className="text-2xl text-white align-middle m-auto mt-5 select-none">
          تهیه بلیط
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-12  my-5"
          >
            <div className="flex flex-col md:flex-row md:gap-4 gap-10 w-full">
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
            </div>
            <div className="flex flex-col md:flex-row md:gap-4 gap-10 w-full">
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
            </div>
            {/** Company (Optional) */}
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
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

            <Button
              className="w-4/5 bg-secondary text-white text-md align-middle mx-auto cursor-pointer hover:shadow-[0px_2px_3px_#FFFFFF] flex "
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
export default BuyTicket;
