// redux/auth.js
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import type { UserInfo } from "~/types";

const saveUser = (user: UserInfo) => {
  Cookies.set("user", JSON.stringify(user));
};

const getUserInfo = () => {
  const user = Cookies.get("user");

  return user ? (JSON.parse(user) as UserInfo) : undefined;
};

const deleteUser = () => {
  Cookies.remove("user");
};

interface AuthState {
  user?: UserInfo;
  loading: boolean;
  error?: string | null;
}

const initialState: AuthState = {
  user: getUserInfo(),
  loading: true,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload as UserInfo;
      void saveUser(state.user);
    },
    logout: (state) => {
      state.user = undefined;
      deleteUser();
    },
  },
});

export const { logout, setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
