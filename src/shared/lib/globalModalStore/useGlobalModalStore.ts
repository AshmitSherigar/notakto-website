import { create } from "zustand";
import type GlobalModalStore from "@/shared/lib/globalModalStore/useGlobalModalStore.type";

export const useGlobalModal = create<GlobalModalStore>((set) => ({
	activeModal: null,
	openModal: (modal) => set({ activeModal: modal }),
	closeModal: () => set({ activeModal: null }),
}));
