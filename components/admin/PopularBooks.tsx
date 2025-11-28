import { BookOpen, TrendingUp, TrendingDown } from "lucide-react";

type Book = {
  title: string;
  borrowed: number;
  trend: string;
};

type PopularBooksProps = {
  books: Book[];
};

const PopularBooks = ({ books }: PopularBooksProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Buku Populer</h3>
      <div className="space-y-4">
        {books.map((book, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{book.title}</p>
                <p className="text-sm text-gray-500">
                  {book.borrowed} peminjaman
                </p>
              </div>
            </div>

            {book.trend === "up" ? (
              <TrendingUp className="w-5 h-5 text-green-600" />
            ) : (
              <TrendingDown className="w-5 h-5 text-red-600" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBooks;
