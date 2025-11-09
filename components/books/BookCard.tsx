"use client";
import { BookOpen } from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";

type Book = {
  id: number;
  title: string;
  cover: string;
  author: string;
  category: string;
  available: boolean;
};

const BookCard = ({ book }: { book: Book }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group cursor-pointer">
    <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src={book.cover} fill alt="Picture of the author" />
      </div>
      {!book.available && (
        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
          Dipinjam
        </div>
      )}
    </div>
    <div className="p-4">
      <span className="text-xs text-blue-600 font-medium">{book.category}</span>
      <h3 className="font-semibold text-gray-900 mt-1 line-clamp-2">
        {book.title}
      </h3>
      <p className="text-sm text-gray-600 mt-1">{book.author}</p>
      <Button
        className="w-full mt-4"
        variant={book.available ? "primary" : "secondary"}
      >
        {book.available ? "Pinjam Buku" : "Tidak Tersedia"}
      </Button>
    </div>
  </div>
);

export default BookCard;
