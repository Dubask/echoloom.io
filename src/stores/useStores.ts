import { create } from "zustand";
import { persist } from "zustand/middleware";

type DefaultValue = string | null;

type setUserDataProps = {
  userId?: DefaultValue;
  token?: DefaultValue;
  email?: DefaultValue;
};
interface AuthState {
  userId: DefaultValue;
  token: DefaultValue;
  email: DefaultValue;
  setUserData: ({ userId, token, email }: setUserDataProps) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  userId: null,
  token: null,
  email: null,
  setUserData: ({ userId = null, token = null, email = null } = {}) => {
    set({
      userId,
      token,
      email,
    });
  },
  logout: () => {
    set({
      userId: null,
      token: null,
      email: null,
    });
  },
}));
