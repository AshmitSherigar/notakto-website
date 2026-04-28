import type { BoardSize, BoardState } from "@/shared/types/game.types";
import type MoveLogEntry from "@/shared/types/MoveLogEntry.types";

export default interface BoardPreviewGridProps {
	boards: BoardState[];
	boardSize: BoardSize;
	onSelectBoard: (index: number) => void;
	moveLog: MoveLogEntry[];
}
