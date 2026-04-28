import { create } from "zustand";

export interface CoinStore {
	coins: number;
	setCoins: (newCoins: number) => void;
	optimisticAddCoins: (amount: number) => void;
}
export const useCoins = create<CoinStore>((set, get) => ({
	coins: 0,
	setCoins: (newCoins: number) => set({ coins: newCoins }),
	optimisticAddCoins: (amount: number) => set({ coins: get().coins + amount }),
}));
