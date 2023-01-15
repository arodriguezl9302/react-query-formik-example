import jwtDecode from "jwt-decode";
import { useAuthStore } from "./store";

export function isTokenValid() {
  const logout = useAuthStore((state) => state.logout);
  try {
    const decoded = jwtDecode(useAuthStore.getState().token);
    // Verificar si el token ha expirado
    if (decoded.exp < Date.now() / 1000) {
      logout();
      return false;
    } else {
      return true;
    }
  } catch (err) {
    return false;
  }
}
