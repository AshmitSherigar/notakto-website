import type { BaseModalProps } from "@/shared/types/BaseModal.types";

export default interface WinnerModalProps extends BaseModalProps {
	winner: string;
	onPlayAgain: () => void;
	onMenu: () => void;
}
