import { MapPin } from "lucide-react";
const NearbyLibraries = () => {
  const libraries = [
    { id: 1, name: "Perpustakaan Kota", distance: "1.2 km", books: 5420 },
    {
      id: 2,
      name: "Perpustakaan Universitas",
      distance: "2.8 km",
      books: 12340,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        Perpustakaan Terdekat
      </h3>
      <div className="space-y-4">
        {libraries.map((lib) => (
          <div
            key={lib.id}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <p className="font-medium text-gray-900">{lib.name}</p>
              <p className="text-sm text-gray-600">
                {lib.distance} • {lib.books.toLocaleString()} buku
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyLibraries;
