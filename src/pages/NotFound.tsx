
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Ship } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 mx-auto w-24 h-24 rounded-full bg-sayur-blue/10 flex items-center justify-center">
          <Ship className="h-12 w-12 text-sayur-blue animate-ship-sailing" />
        </div>
        <h1 className="text-5xl font-bold text-sayur-green mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! Sepertinya kapal Anda tersesat di lautan.
          Halaman yang Anda cari tidak ditemukan.
        </p>
        <Link to="/">
          <Button className="bg-sayur-green hover:bg-sayur-green-dark">
            Kembali ke Beranda
          </Button>
        </Link>
      </div>
      <div className="mt-12 relative">
        <div className="h-12 bg-sayur-blue-light/30 animate-wave rounded-full w-60 opacity-50"></div>
      </div>
    </div>
  );
};

export default NotFound;
