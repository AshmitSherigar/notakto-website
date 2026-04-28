import type { BoardSize, BoardState } from "@/shared/types/game.types";

export default interface BoardSelectorProps {
	boards: BoardState[];
	boardSize: BoardSize;
	selectedBoard: number;
	onSelectBoard: (index: number) => void;
}
