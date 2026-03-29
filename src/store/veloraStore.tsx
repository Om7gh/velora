import { create } from "zustand";

type Store = {
  progress: number;
  setProgress: () => void;
};

const useStore = create<Store>()((set) => ({
  progress: 0,
  setProgress: () =>
    set((state) => ({
      progress: state.progress + 1,
    })),
}));

export default useStore;
