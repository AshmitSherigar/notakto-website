import type { BaseModalProps } from "@/shared/types/BaseModal.types";
import type { BoardNumber, BoardSize } from "@/shared/types/game.types";

export interface BoardConfigModalProps extends BaseModalProps {
	currentBoards: BoardNumber;
	currentSize: BoardSize;
	onConfirm: (num: BoardNumber, size: BoardSize) => void;
	onCancel: () => void;
}
