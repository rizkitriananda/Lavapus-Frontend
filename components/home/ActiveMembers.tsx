import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import type { User } from "@/types";

export const ActiveMembers: React.FC = () => {
  // Mock data
  const members: User[] = [
    {
      id: 1,
      name: "Ahmad",
      email: "",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ahmad",
      booksRead: 23,
      createdAt: "",
    },
    {
      id: 2,
      name: "Dewi",
      email: "",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dewi",
      booksRead: 18,
      createdAt: "",
    },
    {
      id: 3,
      name: "Reza",
      email: "",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=reza",
      booksRead: 15,
      createdAt: "",
    },
    {
      id: 4,
      name: "Maya",
      email: "",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maya",
      booksRead: 12,
      createdAt: "",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Anggota Aktif</h3>
      <div className="space-y-4">
        {members.map((member) => (
          <div key={member.id} className="flex items-center gap-3">
            <Avatar.Root className="w-12 h-12 rounded-full overflow-hidden">
              <Avatar.Image src={member.avatar} alt={member.name} />
              <Avatar.Fallback className="bg-blue-600 text-white flex items-center justify-center w-full h-full">
                {member.name.charAt(0)}
              </Avatar.Fallback>
            </Avatar.Root>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{member.name}</p>
              <p className="text-sm text-gray-600">
                {member.booksRead} buku dibaca
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
