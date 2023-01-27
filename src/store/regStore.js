import { create } from "zustand";

export const useRegStore = create((set) => ({
  firstname: "",
  lastname: "",
  username: "",
  password: "",
  updateFirst: (firstname) => set({ firstname }),
  updateLast: (lastname) => set({ lastname }),
  updateUname: (username) => set({ username }),

  updatePwd: (password) => set({ password }),
}));
