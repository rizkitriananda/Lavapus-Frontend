"use client";

import { useState } from "react";

export default function CreatePost() {
  const [content, setContent] = useState("");

  const handlePost = () => {
    if (!content.trim()) return;
    alert("Posting berhasil: " + content);
    setContent("");
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Tulis sesuatu..."
        className="w-full border rounded-md p-2 mb-2"
      />
      <button
        onClick={handlePost}
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Kirim
      </button>
    </div>
  );
}
