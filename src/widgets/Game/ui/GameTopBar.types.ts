import type { BoardState } from "@/shared/types/game.types";

interface PlayerPanel {
	name: string;
	moveCount: number;
}

export default interface GameTopBarProps {
	player1: PlayerPanel;
	player2: PlayerPanel;
	currentPlayer: 1 | 2;
	boards: BoardState[];
	boardSize: number;
	gameOver: boolean;
	mode: "vsComputer" | "vsPlayer" | "liveMatch";
}
