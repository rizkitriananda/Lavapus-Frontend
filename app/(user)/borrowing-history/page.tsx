// Borrowing History Page
const BorrowingHistoryPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
      <h1 className="text-3xl font-bold mb-2">Riwayat Peminjaman</h1>
      <p className="text-gray-600 mb-8">
        Bergabunglah, diskusikan, dan temukan rekomendasi buku terbaik.
      </p>

      <div className="space-y-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded"></div>
              <div>
                <h3 className="font-bold">Home Sweet Loan</h3>
                <p className="text-sm text-gray-600">Almira Bastari</p>
                <span className="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                  Sedang Dipinjam
                </span>
              </div>
            </div>
            <div className="text-right">
              <button className="text-gray-400 hover:text-gray-600">•••</button>
              <div className="mt-2 space-x-2">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200">
                  Lihat Detail
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700">
                  Kembalikan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowingHistoryPage;
