/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Dialog } from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Select from "@/components/admin/Select";
import { booksAPI } from "@/libs/api";
import toast from "react-hot-toast";

interface AddBookDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export const AddBookDialog: React.FC<AddBookDialogProps> = ({
  open,
  onOpenChange,
  onSuccess,
}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [available, setAvailable] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !author.trim() || !category.trim()) {
      toast.error("Lengkapi data buku");
      return;
    }
    try {
      setSubmitting(true);
      await booksAPI.create({ title, author, category, available });
      toast.success("Buku berhasil ditambahkan");
      onSuccess();
      onOpenChange(false);
      setTitle("");
      setAuthor("");
      setCategory("");
      setAvailable(true);
    } catch (error: any) {
      toast.error(error?.message || "Gagal menambahkan buku");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange} title="Tambah Buku">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Penulis"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Select
          options={[
            { value: "Fiksi", label: "Fiksi" },
            { value: "Non-Fiksi", label: "Non-Fiksi" },
            { value: "Teknologi", label: "Teknologi" },
            { value: "Sejarah", label: "Sejarah" },
          ]}
          value={category}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setCategory(e.target.value)
          }
        />
        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-700">Tersedia</label>
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
            className="w-4 h-4"
          />
        </div>
        <div className="flex justify-end gap-2 pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Batal
          </Button>
          <Button type="submit" disabled={submitting}>
            {submitting ? "Menyimpan..." : "Simpan"}
          </Button>
        </div>
      </form>
    </Dialog>
  );
};
