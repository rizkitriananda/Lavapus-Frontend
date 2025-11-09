import { Avatar } from "radix-ui";
import { Heart, MessageCircle, Share2 } from "lucide-react";
export interface Post {
  id: number;
  user: string;
  avatar: string;
  timestamp: string;
  content: string;
  likes: number;
  comments: number;
}

const PostCard = ({ post }: { post: Post }) => (
  <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
    <div className="flex items-start gap-3">
      <Avatar.Root className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
        <Avatar.Image src={post.avatar} />
        <Avatar.Fallback className="bg-blue-600 text-white flex items-center justify-center">
          {post.user.charAt(0)}
        </Avatar.Fallback>
      </Avatar.Root>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-gray-900">{post.user}</span>
          <span className="text-xs text-gray-500">{post.timestamp}</span>
        </div>
        <p className="text-gray-700 mb-3">{post.content}</p>

        <div className="flex items-center gap-4 text-sm text-gray-600">
          <button className="flex items-center gap-1 hover:text-red-600 transition-colors">
            <Heart className="w-4 h-4" />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span>{post.comments}</span>
          </button>
          <button className="flex items-center gap-1 hover:text-green-600 transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default PostCard;
