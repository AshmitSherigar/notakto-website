import type { DifficultyLevel } from "@/shared/ui/modal/DifficultyModal/DifficultyModal.types";

export type BoardState = Array<string>;
export type BoardSize = 2 | 3 | 4 | 5;
export type BoardNumber = 1 | 2 | 3 | 4 | 5;

export interface NewGameResponse {
	success: true;
	sessionId: string;
	uid: string;
	boards: number[];
	isAiMove?: boolean[];
	winner: boolean;
	boardSize: BoardSize;
	numberOfBoards: BoardNumber;
	difficulty: DifficultyLevel;
	gameover: boolean;
	createdAt: string;
}
