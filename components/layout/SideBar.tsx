// import {
//   Home,
//   Library,
//   Clock,
//   MessageSquare,
//   Bell,
//   LogOut,
// } from "lucide-react";
// const SideBar = ({
//   isOpen,
//   onClose,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
// }) => {
//   const menuItems = [
//     { icon: Home, label: "Beranda", href: "/" },
//     { icon: Library, label: "Koleksi Buku", href: "/books" },
//     { icon: Clock, label: "Riwayat Peminjaman", href: "/borrowing-history" },
//     { icon: MessageSquare, label: "Komunitas", href: "/community" },
//     { icon: Bell, label: "Notifikasi", href: "/notifications" },
//   ];

//   return (
//     <>
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
//           onClick={onClose}
//         />
//       )}

//       <aside
//         className={`fixed lg:sticky top-0 left-0 h-screen bg-white shadow-lg z-50 transition-transform ease-in-out duration-300 ${
//           isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         } w-64`}
//       >
//         <div className="flex items-center justify-between p-4 border-b lg:hidden">
//           <span className="text-xl font-bold text-blue-600">Menu</span>
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-gray-100 rounded-lg"
//           >
//             <span className="w-6 h-6">X</span>
//           </button>
//         </div>

//         <nav className="p-4 space-y-2">
//           {menuItems.map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
//             >
//               <item.icon className="w-5 h-5" />
//               <span className="font-medium">{item.label}</span>
//             </a>
//           ))}

//           <div className="pt-4 border-t mt-4">
//             <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 text-red-600 w-full">
//               <LogOut className="w-5 h-5" />
//               <span className="font-medium">Keluar</span>
//             </button>
//           </div>
//         </nav>
//       </aside>
//     </>
//   );
// };
// export default SideBar;
