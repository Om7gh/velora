import { create } from "zustand";

type Store = {
  progress: number;
  setProgress: () => void;
  setPreviousProgress: () => void;
};

const useStore = create<Store>()((set) => ({
  progress: 0,
  setProgress: () =>
    set((state) => ({
      progress: state.progress + 1,
    })),
  setPreviousProgress: () =>
    set((state) => ({
      progress: state.progress > 0 ? state.progress - 1 : 0,
    })),
}));

export default useStore;
