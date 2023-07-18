import { create } from "zustand";

const useStore = create((set) => ({
  number: 0,
  username: "",
  password: "",
  increaseNumber: (by) => set((state) => ({ number: state.number + 1 })),
  removeNumber: () => set({ number: 0 }),
  // setUsername:(data)=>set((state)=>({username:data.username})),
  // setPassword:(data)=>set((state)=>({username:data.password})),
}));

export default useStore;
