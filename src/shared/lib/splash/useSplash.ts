import { create } from "zustand";
import { persist } from "zustand/middleware";
import type SplashStore from "@/shared/lib/splash/useSplash.type";

export const useSplash = create<SplashStore>()(
	persist(
		(set) => ({
			hasSeenSplash: false,
			setHasSeenSplash: (v) => set({ hasSeenSplash: v }),
		}),
		{ name: "splash-settings" },
	),
);
