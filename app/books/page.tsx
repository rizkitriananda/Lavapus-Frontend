import BookCard from "@/components/books/BookCard";
import bukuHujanTereliye from "../../public/image/books/hujan_tereliye.jpg";
import bukuMatahariTereliye from "../../public/image/books/matahari_tereliye.jpg";
const BooksPage = () => {
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
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
      <h1 className="text-3xl font-bold mb-2">Daftar Buku</h1>
      <p className="text-gray-600 mb-8">
        Jelajahi ribuan buku digital dari berbagai genre
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
