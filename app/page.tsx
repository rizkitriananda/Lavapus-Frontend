"use client";
// Home Page Component

import BookCard from "@/components/books/BookCard";
import PostCard from "@/components/community/PostCard";
import heroObject from "@/public/image/items/hero_object.png";
import bukuHujanTereliye from "@/public/image/books/hujan_tereliye.jpg";
import bukuMatahariTereliye from "@/public/image/books/matahari_tereliye.jpg";
import cabang1 from "@/public/image/image_cabang_perpustakaan/image1.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/ui/Loader";

const HomePage = () => {
  const books = [
    {
      id: 1,
      title: "Matahari",
      author: "Tere Liye",
      cover: bukuMatahariTereliye,
      stock: 1,
      category: "Fiksi",
      available: true,
    },
    {
      id: 2,
      title: "Hujan",
      author: "Tere Liye",
      cover: bukuHujanTereliye,
      stock: 5,
      category: "Fiksi",
      available: true,
    },
    {
      id: 3,
      title: "Matahari",
      author: "Tere Liye",
      cover: bukuMatahariTereliye,
      stock: 1,
      category: "Fiksi",
      available: true,
    },
    {
      id: 4,
      title: "Hujan",
      author: "Tere Liye",
      cover: bukuHujanTereliye,
      stock: 5,
      category: "Fiksi",
      available: true,
    },
    {
      id: 5,
      title: "Matahari",
      author: "Tere Liye",
      cover: bukuMatahariTereliye,
      stock: 1,
      category: "Fiksi",
      available: true,
    },
    {
      id: 6,
      title: "Hujan",
      author: "Tere Liye",
      cover: bukuHujanTereliye,
      stock: 5,
      category: "Fiksi",
      available: true,
    },
  ];

  return (
    <div className="">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  pb-24 py-20">
        <motion.div
          className="bg-linear-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Selamat Datang di
              <br />
              LAVAPUS – Jelajahi Dunia
              <br />
              Buku Tanpa Batas!
            </h1>
            <p className="text-gray-600 mb-6">
              Temukan dan baca koleksi buku digital dengan mudah, kapan saja dan
              di mana saja.
            </p>
            <motion.button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Jelajahi Sekarang
            </motion.button>
          </div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src={heroObject}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </motion.div>
        </motion.div>

        {/* Book Recommendations */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Rekomendasi Buku Terbaru</h2>
            <button className="text-blue-600 font-medium hover:underline">
              Selengkapnya
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <AnimatePresence initial={false}>
              {books.map((book, idx) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                    delay: idx * 0.03,
                  }}
                >
                  <BookCard book={book} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Active Members */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Peringkat Anggota Teraktif
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Kelvin Stracke",
              "Byron Jackson",
              "Philip Marvin",
              "Lorene O",
            ].map((name, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg p-6 text-center shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 1 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: idx * 0.1,
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-medium mb-2">{name}</h3>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={i < 4 ? "text-yellow-400" : "text-gray-300"}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Community Posts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Komunitas</h2>
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PostCard
                post={{
                  id: 1,
                  user: "Charles Fadel",
                  avatar: "👤",
                  content:
                    '📚 Halo, Sobat Perpusvel! Buku favorit komunitas minggu ini adalah "Laut Bercerita"! 🎉',
                  likes: 32,
                  comments: 12,
                  timestamp: "3 menit yang lalu",
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.08 }}
            >
              <PostCard
                post={{
                  id: 2,
                  user: "Cameron Gulgowski",
                  avatar: "👤",
                  content:
                    "Di mana tempat favorit kamu untuk membaca? Apakah di kamar yang nyaman, kafe dengan kopi hangat, atau taman yang sejuk?",
                  likes: 32,
                  comments: 12,
                  timestamp: "3 menit yang lalu",
                }}
              />
            </motion.div>
          </div>
          <div className="text-center mt-6">
            <motion.div
              transition={{ duration: 0.3, delay: 0 }}
              whileTap={{ scale: 0.8 }}
            >
              {" "}
              <a href="/community">
                <Button>Lihat Komunitas</Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Nearby Libraries */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Temukan Cabang Perpusvel Terdekat
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Perpusvel Pusat",
              "Perpusvel Banjarsemara",
              "Perpusvel Cilegup",
            ].map((name, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  delay: idx * 0.06,
                }}
                whileHover={{ scale: 1.01 }}
              >
                <Image
                  src={cabang1}
                  width={500}
                  height={100}
                  alt="Picture of the author"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-2">{name}</h3>
                  <p className="text-sm text-gray-600">
                    📍 Jalan contoh, Kota Yogyakarta
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
