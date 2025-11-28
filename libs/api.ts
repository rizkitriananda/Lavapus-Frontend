import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const booksAPI = {
  getAll: (params: { page?: number; search?: string }) =>
    api.get("/books", { params }),
  create: (data: unknown) => api.post("/books", data),
  delete: (id: number) => api.delete(`/books/${id}`),
  update: (id: number, data: unknown) => api.put(`/books/${id}`, data),
  getById: (id: number) => api.get(`/books/${id}`),
};

export const usersAPI = {
  getAll: (params: { page?: number; search?: string }) =>
    api.get("/users", { params }),
  create: (data: unknown) => api.post("/users", data),
  delete: (id: number) => api.delete(`/users/${id}`),
  update: (id: number, data: unknown) => api.put(`/users/${id}`, data),
  getById: (id: number) => api.get(`/users/${id}`),
};

export const borrowingsAPI = {
  getAll: (params: { page?: number; search?: string }) =>
    api.get("/borrowings", { params }),
  create: (data: unknown) => api.post("/borrowings", data),
  delete: (id: number) => api.delete(`/borrowings/${id}`),
  update: (id: number, data: unknown) => api.put(`/borrowings/${id}`, data),
  getById: (id: number) => api.get(`/borrowings/${id}`),
};

export const notificationsAPI = {
  getAll: (params: { page?: number; search?: string }) =>
    api.get("/notifications", { params }),
  markRead: (id: number) => api.patch(`/notifications/${id}`, { isRead: true }),
  delete: (id: number) => api.delete(`/notifications/${id}`),
};

export default api;
