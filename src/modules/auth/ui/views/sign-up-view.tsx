"use client";

import { z } from "zod";
import axios from "axios";
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

import { registerSchema } from "../../schemas";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

export const SignUpView = () => {
  const router = useRouter();


  const form = useForm<z.infer<typeof registerSchema>>({
    mode: "all",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {

    try {
      await axios.post("/api/auth/signup", values);
      // console.log("response: ", response);
      toast.success("User created successfully");
      router.push("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
      toast.error("Failed to sign up");
    }

  };

  // const username = form.watch("username");
  // const usernameErrors = form.formState.errors.username;

  // const showPreview = username && !usernameErrors;

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
                <Link prefetch href={"/sign-in"}>
                  Sign In
                </Link>
              </Button>
            </div>
            <h1 className=" text-4xl font-semibold">Be a part of Silken Knot</h1>
            <FormField
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-base">Username</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  {/* <FormDescription className={cn(" hidden", showPreview && "block")}>
                    Your store will be available at &nbsp;
                    <strong>{username}</strong>.shop.com
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-base">Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  {/* <FormDescription className={cn(" hidden", showPreview && "block")}>
                    Your store will be available at &nbsp;
                    <strong>{username}</strong>.shop.com
                  </FormDescription> */}
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
                  {/* <FormDescription className={cn(" hidden", showPreview && "block")}>
                    Your store will be available at &nbsp;
                    <strong>{username}</strong>.shop.com
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              // disabled={register.isPending}
              type="submit"
              size={"lg"}
              variant={"elevated"}
              className=" bg-black text-white hover:bg-pink-400 hover:text-primary border border-black"
            >
              Create Account
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
