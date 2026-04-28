interface ActionButton {
	label: string;
	onClick: () => void;
	disabled?: boolean;
	variant?: "primary" | "default" | "danger";
}

export default interface GameActionBarProps {
	actions: ActionButton[];
}
