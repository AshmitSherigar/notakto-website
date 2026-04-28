import { create } from "zustand";

export interface XPStore {
	XP: number;
	setXP: (newXP: number) => void;
	optimisticAddXP: (amount: number) => void;
}

export const useXP = create<XPStore>((set, get) => ({
	XP: 0,
	setXP: (newXP: number) => set({ XP: newXP }),
	optimisticAddXP: (amount: number) => set({ XP: get().XP + amount }),
}));
