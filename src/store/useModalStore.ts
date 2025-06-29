import { create } from "zustand";

type ModalStore = {
  isOpen: boolean;
  artistId: string | null;
  openModal: (artistId: string) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  artistId: null,
  openModal: (artistId: string) => set({ isOpen: true, artistId }),
  closeModal: () => set({ isOpen: false, artistId: null }),
}));
