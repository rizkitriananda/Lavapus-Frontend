// Community Page
"use client";
import { useState } from "react";
import { Tabs } from "radix-ui";
import PostCard from "@/components/community/PostCard";
import CreatePost from "@/components/community/CreatePost";

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState("for-you");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
      <h1 className="text-3xl font-bold mb-2">Komunitas</h1>
      <p className="text-gray-600 mb-8">
        Bergabunglah, diskusikan, dan temukan rekomendasi buku terbaik.
      </p>

      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List className="flex border-b border-gray-200 mb-6">
          <Tabs.Trigger
            value="for-you"
            className="px-6 py-3 font-medium data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
          >
            Untuk Anda
          </Tabs.Trigger>
          <Tabs.Trigger
            value="my-community"
            className="px-6 py-3 font-medium data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
          >
            Komunitas Saya
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="for-you" className="space-y-4">
          <CreatePost />
          <PostCard
            post={{
              id: 1,
              user: "Charles Fadel",
              avatar: "👤",
              content:
                '📚 Halo, Sobat Perpusvel! Buku favorit komunitas minggu ini adalah "Laut Bercerita"!',
              likes: 32,
              comments: 12,
              timestamp: "3 menit yang lalu",
            }}
          />
        </Tabs.Content>

        <Tabs.Content value="my-community" className="space-y-4">
          <CreatePost />
          <PostCard
            post={{
              id: 2,
              user: "Cameron Gulgowski",
              avatar: "👤",
              content: "Di mana tempat favorit kamu untuk membaca?",
              likes: 32,
              comments: 12,
              timestamp: "3 menit yang lalu",
            }}
          />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default CommunityPage;
