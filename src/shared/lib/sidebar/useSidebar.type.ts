export default interface SidebarStore {
	isCollapsed: boolean;
	toggle: () => void;
	setCollapsed: (v: boolean) => void;
}
