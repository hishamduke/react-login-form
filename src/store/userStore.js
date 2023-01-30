import { create } from "zustand";

export const userStore = create((set) => ({
  firstname: "",
  lastname: "",
  password: "",
  updateFirst: (firstname) => set({ firstname }),
  updateLast: (lastname) => set({ lastname }),
  updateUname: (username) => set({ username }),
}));
