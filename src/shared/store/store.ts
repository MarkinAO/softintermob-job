import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IStore {
  popup: boolean;
  togglePopup: () => void;
}

export const useStore = create<IStore>()(
  devtools((set) => ({
    popup: false,
    togglePopup: () => set((state) => ({ popup: !state.popup })),
  }))
);
