export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  booksRead?: number;
  createdAt: string;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  isbn?: string;
  cover?: string;
  category: string;
  description?: string;
  publisher?: string;
  publishedYear?: number;
  available: boolean;
  totalCopies?: number;
  availableCopies?: number;
  rating?: number;
  reviewCount?: number;
}

export interface BorrowingHistory {
  id: number;
  bookId: number;
  book: Book;
  userId: number;
  borrowDate: string;
  returnDate?: string;
  dueDate: string;
  status: "borrowed" | "returned" | "overdue";
  fine?: number;
}

export interface Post {
  id: number;
  userId: number;
  user: User;
  content: string;
  imageUrl?: string;
  likes: number;
  commentsCount: number;
  isLiked?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: number;
  postId: number;
  userId: number;
  user: User;
  content: string;
  createdAt: string;
}

export interface Notification {
  id: number;
  userId: number;
  type: "borrow" | "return" | "overdue" | "comment" | "like";
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  relatedId?: number;
}

export interface Library {
  id: number;
  name: string;
  address: string;
  distance?: string;
  phone?: string;
  totalBooks: number;
  latitude?: number;
  longitude?: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}
