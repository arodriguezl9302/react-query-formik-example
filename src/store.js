import create from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      token: "",
      isAuthenticated: true,
      user: {},
      setToken: (token) => set((state) => ({ token: token })),
      login: () => {},
      logout: (token) => set((state) => ({ token: "" })),
    }),
    {
      name: "auth",
      globalStorage: () => localStorage,
    }
  )
);
