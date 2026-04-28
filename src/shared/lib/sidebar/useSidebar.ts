import { create } from "zustand";
import type SidebarStore from "@/shared/lib/sidebar/useSidebar.type";

export const useSidebar = create<SidebarStore>()((set) => ({
	isCollapsed: false,
	toggle: () => set((s) => ({ isCollapsed: !s.isCollapsed })),
	setCollapsed: (v) => set({ isCollapsed: v }),
}));
