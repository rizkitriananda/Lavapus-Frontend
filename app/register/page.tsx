/* eslint-disable @typescript-eslint/no-explicit-any */
// Auth Page Component
"use client";
import { useState } from "react";
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";

const RegisterPage = ({ onLogin }: any) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-400 to-blue-600 p-12 flex-col justify-center items-start text-white">
        <h1 className="text-5xl font-bold mb-4">
          Jelajahi Dunia
          <br />
          Pengetahuan, Satu Buku
          <br />
          di Setiap Halaman
        </h1>
        <p className="text-lg mb-8">
          Temukan koleksi buku terbaik, baca tanpa batas,
          <br />
          dan perluas wawasanmu kapan saja.
        </p>
        <img src="/api/placeholder/400/400" alt="Reading" className="mt-8" />
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2">
            {isLogin
              ? "Masuk Anggota Perpustakaan"
              : "Daftar Anggota Perpustakaan"}
          </h2>
          <p className="text-gray-600 mb-8">
            {isLogin
              ? "Masukkan Email dan Kata Sandi Anda."
              : "Lengkapi data Anda untuk akses koleksi buku."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none"
                />
              </div>
            )}

            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Kata Sandi"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-400"
              >
                {showPassword ? (
                  <EyeNoneIcon className="w-5 h-5" />
                ) : (
                  <EyeOpenIcon className="w-5 h-5" />
                )}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              {isLogin ? "Masuk" : "Daftar"}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            {isLogin ? "Belum Punya Akun?" : "Sudah Punya Akun?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 font-medium hover:underline"
            >
              {isLogin ? "Daftar" : "Masuk"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
