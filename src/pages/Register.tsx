
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UserPlus } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nama minimal 2 karakter" }),
  email: z.string().email({ message: "Masukkan email yang valid" }),
  password: z.string().min(8, { message: "Password minimal 8 karakter" }),
  confirmPassword: z.string().min(8, { message: "Konfirmasi password minimal 8 karakter" }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Password tidak sama",
  path: ["confirmPassword"]
});

const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Pendaftaran berhasil!",
      description: "Akun Anda telah dibuat",
    });
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col items-center">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="h-14 w-14 rounded-full bg-sayur-green flex items-center justify-center">
                <UserPlus className="h-7 w-7 text-white" />
              </div>
            </div>
            <h1 className="mt-4 text-3xl font-bold">Daftar Akun Baru</h1>
            <p className="mt-2 text-gray-600">
              Nikmati sayuran segar langsung dari petani pulau
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Lengkap</FormLabel>
                    <FormControl>
                      <Input placeholder="Nama Lengkap" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="email@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="********"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Konfirmasi Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="********"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="rounded text-sayur-green focus:ring-sayur-green" required />
                <label htmlFor="terms" className="text-sm">
                  Saya setuju dengan{" "}
                  <a href="#" className="text-sayur-blue hover:underline">
                    Syarat dan Ketentuan
                  </a>{" "}
                  serta{" "}
                  <a href="#" className="text-sayur-blue hover:underline">
                    Kebijakan Privasi
                  </a>
                </label>
              </div>

              <Button type="submit" className="w-full bg-sayur-green hover:bg-sayur-green-dark">
                Daftar
              </Button>
            </form>
          </Form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Sudah memiliki akun?{" "}
              <Link to="/masuk" className="text-sayur-blue hover:underline font-medium">
                Masuk
              </Link>
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Atau daftar dengan</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" type="button" className="border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="mr-2">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </Button>
            <Button variant="outline" type="button" className="border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="mr-2 fill-[#1877F2]">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
