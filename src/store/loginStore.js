import { create } from "zustand";

export const useLoginStore = create((set) => ({
  username: "",
  password: "",
  updateName: (username) => set({ username }),
  updatePwd: (password) => set({ password }),
}));
