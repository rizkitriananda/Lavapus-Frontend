import React from "react";
import { Button } from "../ui/Button";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Selamat Datang di PerpusVel
      </h1>
      <p className="text-lg md:text-xl mb-6 opacity-90">
        Temukan ribuan buku digital dan bergabung dengan komunitas pembaca
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/books">
          <Button
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Jelajahi Buku
          </Button>
        </Link>
        <Link href="/community">
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600"
          >
            Gabung Komunitas
          </Button>
        </Link>
      </div>
    </div>
  );
};
