/** biome-ignore-all assist/source/organizeImports: <explanation> */
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type MoveLogEntry from "@/shared/types/MoveLogEntry.types";
import Board from "@/shared/ui/board/Board";
import { useGlobalModal } from "@/shared/lib/globalModalStore/useGlobalModalStore";
import { useSound } from "@/shared/lib/sounds/useSound";
import { playMoveSound, playWinSound } from "@/shared/lib/sounds/sounds";
import { isBoardDead } from "@/shared/lib/game/logic";
import BoardPreviewGrid from "@/widgets/Game/ui/BoardPreviewGrid";
import BoardSelector from "@/widgets/Game/ui/BoardSelector";
import GameActionBar from "@/widgets/Game/ui/GameActionBar";
import GameCenterColumn from "@/widgets/Game/ui/GameCenterColumn";
import GameContentArea from "@/widgets/Game/ui/GameContentArea";
import GameLeftPanel from "@/widgets/Game/ui/GameLeftPanel";
import GameStatsPanel from "@/widgets/Game/ui/GameStatsPanel";
import GameLayout from "@/widgets/Game/ui/GameLayout";
import type {
	BoardNumber,
	BoardSize,
	BoardState,
} from "@/shared/types/game.types";
import BoardDisplay from "@/widgets/Game/ui/BoardDisplay";
import { useShortcut } from "@/shared/lib/shortcut/useShortcut";
import GameTopBar, { GameStatusBar } from "@/widgets/Game/ui/GameTopBar";
import WinnerModal from "@/features/winner/ui/WinnerModal";
import PlayerNamesModal from "@/features/player-name/ui/PlayerNameModal";
import ConfirmationModal from "@/shared/ui/modal/ConfirmationModal/ConfirmationModal";
import BoardConfigModal from "@/shared/ui/modal/BoardConfigModal/BoardConfigModal";

const VsPlayerPage = () => {
	console.log("THIS IS VS PLAYER PAGE!");
	const [boards, setBoards] = useState<BoardState[]>([]);
	const [boardSize, setBoardSize] = useState<BoardSize>(3);
	const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1);
	const [player1Name, setPlayer1Name] = useState<string>("Player 1");
	const [player2Name, setPlayer2Name] = useState<string>("Player 2");
	const [winner, setWinner] = useState<string>("");
	const [numberOfBoards, setNumberOfBoards] = useState<BoardNumber>(3);
	const [gameStarted, setGameStarted] = useState<boolean>(false);
	const [initialSetupDone, setInitialSetupDone] = useState<boolean>(false);
	const [hasMoveHappened, setHasMoveHappened] = useState(false);
	const [selectedBoard, setSelectedBoard] = useState(0);
	const [showPreview, setShowPreview] = useState(false);
	const [moveLog, setMoveLog] = useState<MoveLogEntry[]>([]);
	const startTimeRef = useRef<number>(Date.now());
	const [elapsed, setElapsed] = useState(0);

	const { activeModal, openModal, closeModal } = useGlobalModal();

	const { sfxMute } = useSound();
	const router = useRouter();

	// biome-ignore lint/correctness/useExhaustiveDependencies: intentionally run only on mount
	useEffect(() => {
		openModal("names");
	}, []);

	// Elapsed time tracker
	useEffect(() => {
		if (!gameStarted) return;
		const interval = setInterval(() => {
			setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
		}, 1000);
		return () => clearInterval(interval);
	}, [gameStarted]);

	const formatTime = (seconds: number) => {
		const m = Math.floor(seconds / 60);
		const s = seconds % 60;
		return `${m}:${s.toString().padStart(2, "0")}`;
	};

	useShortcut(
		{
			escape: () => {
				if ((!initialSetupDone && !gameStarted) || activeModal === "winner")
					return;
				if (activeModal) return closeModal();
			},
			m: () => {
				if (!initialSetupDone || activeModal === "winner") return;
				activeModal === "exitConfirmation"
					? closeModal()
					: openModal("exitConfirmation");
			},
			r: () => {
				if (!initialSetupDone || !hasMoveHappened || activeModal === "winner")
					return;
				activeModal === "resetConfirmation"
					? closeModal()
					: openModal("resetConfirmation");
			},
			n: () => {
				if (!initialSetupDone || activeModal === "winner") return;
				activeModal === "names" ? closeModal() : openModal("names");
			},
			c: () => {
				if (!initialSetupDone || activeModal === "winner") return;
				activeModal === "boardConfig" ? closeModal() : openModal("boardConfig");
			},
			s: () => {
				if (!initialSetupDone || activeModal === "winner") return;
				activeModal === "soundConfig" ? closeModal() : openModal("soundConfig");
			},
			q: () => {
				if (!initialSetupDone || activeModal === "winner") return;
				activeModal === "shortcut" ? closeModal() : openModal("shortcut");
			},
		},
		false,
	);

	const makeMoveHandler = (boardIndex: number, cellIndex: number) => {
		setShowPreview(false);
		if (!hasMoveHappened) {
			setHasMoveHappened(true);
		}
		if (
			boards[boardIndex][cellIndex] !== "" ||
			isBoardDead(boards[boardIndex], boardSize)
		)
			return;

		const newBoards = boards.map((board, idx) =>
			idx === boardIndex
				? [...board.slice(0, cellIndex), "X", ...board.slice(cellIndex + 1)]
				: [...board],
		);
		playMoveSound(sfxMute);
		setBoards(newBoards);

		// Log the move
		setMoveLog((prev) => [
			...prev,
			{ player: currentPlayer, board: boardIndex, cell: cellIndex },
		]);

		if (newBoards.every((board) => isBoardDead(board, boardSize))) {
			const loser = currentPlayer;
			const winnerNum = loser === 1 ? 2 : 1;
			const winnerName = winnerNum === 1 ? player1Name : player2Name;
			setWinner(winnerName);
			openModal("winner");
			playWinSound(sfxMute);
			return;
		}

		setCurrentPlayer((prev) => (prev === 1 ? 2 : 1));
	};

	const resetGame = (num: BoardNumber, size: BoardSize) => {
		const initialBoards = Array(num)
			.fill(null)
			.map(() => Array(size * size).fill(""));
		setBoards(initialBoards);
		setCurrentPlayer(1);
		closeModal();
		setHasMoveHappened(false);
		setSelectedBoard(0);
		setMoveLog([]);
		startTimeRef.current = Date.now();
		setElapsed(0);
	};

	const handleBoardConfigChange = (num: BoardNumber, size: BoardSize) => {
		setNumberOfBoards(num);
		setBoardSize(size as BoardSize);
		closeModal();
		resetGame(num, size);
	};

	const p1MoveCount = moveLog.filter((m) => m.player === 1).length;
	const p2MoveCount = moveLog.filter((m) => m.player === 2).length;
	const aliveCount = boards.filter((b) => !isBoardDead(b, boardSize)).length;

	// Build per-board cell ownership maps from moveLog
	const cellOwnersByBoard: Record<number, Record<number, 1 | 2>> = {};
	for (const entry of moveLog) {
		if (!cellOwnersByBoard[entry.board]) {
			cellOwnersByBoard[entry.board] = {};
		}
		cellOwnersByBoard[entry.board][entry.cell] = entry.player;
	}

	const lastMove = moveLog.length > 0 ? moveLog[moveLog.length - 1] : null;

	return (
		<GameLayout>
			<GameTopBar
				player1={{
					name: player1Name,
					moveCount: p1MoveCount,
				}}
				player2={{
					name: player2Name,
					moveCount: p2MoveCount,
				}}
				currentPlayer={currentPlayer}
				boards={boards}
				boardSize={boardSize}
				gameOver={activeModal === "winner"}
				mode="vsPlayer"
			/>

			<GameContentArea>
				<GameLeftPanel>
					<BoardSelector
						boards={boards}
						boardSize={boardSize}
						selectedBoard={selectedBoard}
						onSelectBoard={setSelectedBoard}
					/>
				</GameLeftPanel>

				<GameCenterColumn
					mobileBoardSelector={
						!showPreview ? (
							<BoardSelector
								boards={boards}
								boardSize={boardSize}
								selectedBoard={selectedBoard}
								onSelectBoard={setSelectedBoard}
							/>
						) : undefined
					}>
					<GameStatusBar
						currentPlayer={currentPlayer}
						moveCount={moveLog.length}
						gameOver={activeModal === "winner"}
						mode="vsPlayer"
						player1Name={player1Name}
						player2Name={player2Name}
					/>
					{showPreview ? (
						<BoardPreviewGrid
							boards={boards}
							boardSize={boardSize}
							moveLog={moveLog}
							onSelectBoard={(index) => {
								setSelectedBoard(index);
								setShowPreview(false);
							}}
						/>
					) : (
						<BoardDisplay
							visible={boards.length > 0 && !!boards[selectedBoard]}>
							{boards[selectedBoard] && (
								<Board
									boardIndex={selectedBoard}
									boardState={boards[selectedBoard]}
									makeMove={makeMoveHandler}
									isDead={isBoardDead(boards[selectedBoard], boardSize)}
									boardSize={boardSize}
									cellOwners={cellOwnersByBoard[selectedBoard]}
									lastMoveCell={
										lastMove?.board === selectedBoard
											? lastMove.cell
											: undefined
									}
								/>
							)}
						</BoardDisplay>
					)}
				</GameCenterColumn>

				<GameStatsPanel
					stats={[
						{ label: "TOTAL MOVES", value: moveLog.length },
						{ label: "BOARDS ALIVE", value: aliveCount },
						{ label: "TIME", value: formatTime(elapsed) },
					]}
					moveLog={moveLog}
					boardSize={boardSize}
				/>
			</GameContentArea>

			{/* Action bar */}
			<GameActionBar
				actions={[
					...(boards.length > 1
						? [
								{
									label: showPreview ? "BACK" : "PREVIEW ALL",
									onClick: () => setShowPreview((prev) => !prev),
									variant: "primary" as const,
								},
							]
						: []),
					{
						label: "RESIGN",
						onClick: () => openModal("exitConfirmation"),
						variant: "danger",
					},
				]}
			/>

			{/* Modals */}
			<PlayerNamesModal
				visible={activeModal === "names"}
				onSubmit={(name1: string, name2: string) => {
					setPlayer1Name(name1 || "Player 1");
					setPlayer2Name(name2 || "Player 2");
					closeModal();
					resetGame(numberOfBoards, boardSize);
					setInitialSetupDone(true);
					setGameStarted(true);
				}}
				onClose={initialSetupDone ? closeModal : undefined}
				initialNames={[player1Name, player2Name]}
				key={player1Name + player2Name}
			/>
			<WinnerModal
				visible={activeModal === "winner"}
				winner={winner}
				onPlayAgain={() => {
					closeModal();
					resetGame(numberOfBoards, boardSize);
				}}
				onMenu={() => {
					closeModal();
					router.push("/");
				}}
			/>
			<BoardConfigModal
				visible={activeModal === "boardConfig"}
				currentBoards={numberOfBoards}
				currentSize={boardSize}
				onConfirm={handleBoardConfigChange}
				onCancel={closeModal}
			/>
			<ConfirmationModal
				visible={activeModal === "resetConfirmation"}
				title="Reset Game?"
				message="Are you sure you want to reset the current game?"
				onConfirm={() => {
					resetGame(numberOfBoards, boardSize);
					closeModal();
				}}
				onCancel={closeModal}
				confirmText="Yes, Reset"
			/>
			<ConfirmationModal
				visible={activeModal === "exitConfirmation"}
				title="Exit to Menu?"
				message="Are you sure you want to exit? Your current game will be lost."
				onConfirm={() => {
					router.push("/");
				}}
				onCancel={closeModal}
				confirmText="Yes, Exit"
			/>
		</GameLayout>
	);
};

export default VsPlayerPage;
