"use client";

import { z } from "zod";
import Link from "next/link";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";

import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";


import { loginSchema } from "../../schemas";
import axios from "axios";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

export const SignInView = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    mode: "all",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      await axios.post("/api/auth/signin", values);
      // console.log("response: ", response);
      toast.success("Logged in successfully");
      router.push("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
      toast.error("Failed to login");
    }
  };

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-5">
      <div className=" bg-[#F4F4F0] h-screen w-full lg:col-span-3 overflow-y-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col gap-8 p-4 lg:p-16"
          >
            <div className=" flex items-center justify-between mb-8">
              <Link href={"/"}>
                <span className={cn(" text-2xl font-semibold", poppins.className)}>
                  SilkenKnot
                </span>
              </Link>
              <Button
                asChild
                variant={"ghost"}
                size={"sm"}
                className=" text-base border-none underline"
              >
                <Link prefetch href={"/sign-up"}>
                  Sign Up
                </Link>
              </Button>
            </div>
            <h1 className=" text-4xl font-semibold">Welcome Back to Silken Knot</h1>

            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-base">Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-base">Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              // disabled={login.isPending}
              type="submit"
              size={"lg"}
              variant={"elevated"}
              className=" bg-black text-white hover:bg-pink-400 hover:text-primary"
            >
              Log In
            </Button>
          </form>
        </Form>
      </div>
      <div
        className=" h-screen w-full lg:col-span-2 hidden lg:block"
        style={{
          backgroundImage: "url('/form-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};
