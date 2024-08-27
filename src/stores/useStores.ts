import { StateCreator, create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

type Persist = (
  config: StateCreator<AuthState>,
  options: PersistOptions<AuthState>
) => StateCreator<AuthState>;

const useAuthStore = create<AuthState>(
  (persist as Persist)(
    (set) => ({
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
    }),
    {
      name: "auth-storage",
      getStorage: () => AsyncStorage,
    }
  )
);

export { useAuthStore };
