import create from "zustand";
import { persist } from "zustand/middleware";
import jwtDecode from "jwt-decode";

export function isTokenValid() {
  try {
    const decoded = jwtDecode(token);
    // Verificar si el token ha expirado
    if (decoded.exp < Date.now() / 1000) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    return false;
  }
}

export const useAuthStore = create(
  persist(
    (set) => ({
      token: "",
      isAuthenticated: true,
      user: {},
      setToken: (token) => set((state) => ({ token: token })),
      login: () => {},
      logout: () => {},
    }),
    {
      name: "auth",
      globalStorage: () => localStorage,
    }
  )
);
