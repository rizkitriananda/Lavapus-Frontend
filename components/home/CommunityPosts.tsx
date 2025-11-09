import { Button } from "../ui/Button";
import { Plus } from "lucide-react";
import PostCard from "../community/PostCard";
export interface Post {
  id: number;
  user: string;
  avatar: string;
  timestamp: string;
  content: string;
  likes: number;
  comments: number;
}

const CommunityPosts = () => {
  const posts: Post[] = [
    {
      id: 1,
      user: "Budi Santoso",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=budi",
      content:
        'Baru saja selesai membaca "Bumi Manusia"! Buku yang luar biasa mengagumkan. Sangat direkomendasikan untuk pecinta sastra Indonesia.',
      likes: 24,
      comments: 5,
      timestamp: "2 jam lalu",
    },
    {
      id: 2,
      user: "Siti Nurhaliza",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=siti",
      content:
        "Ada yang punya rekomendasi buku self-improvement terbaru? Lagi butuh motivasi nih 📚",
      likes: 18,
      comments: 12,
      timestamp: "4 jam lalu",
    },
  ];

  return (
    <section className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Postingan Komunitas
        </h2>
        <Button variant="primary" className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Buat Post</span>
        </Button>
      </div>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default CommunityPosts;
