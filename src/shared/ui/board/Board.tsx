import type { BoardProps } from "@/services/types";
import BoardGrid from "@/shared/ui/board/BoardGrid";
import Cell from "@/shared/ui/board/Cell";
import SingleBoardContainer from "@/shared/ui/board/SingleBoardContainer";

const Board: React.FC<BoardProps> = ({
	boardIndex,
	boardState,
	makeMove,
	isDead,
	boardSize,
	cellOwners,
	lastMoveCell,
}) => {
	return (
		<SingleBoardContainer isDead={isDead}>
			<BoardGrid boardSize={boardSize}>
				{[...boardState.entries()].map(([cellIndex, cell]) => (
					<Cell
						key={`${boardIndex}-${cellIndex}-${cell}`}
						boardIndex={boardIndex}
						cellIndex={cellIndex}
						value={cell}
						onPress={makeMove}
						disabled={isDead}
						boardSize={boardSize}
						owner={cellOwners?.[cellIndex]}
						isLastMove={cellIndex === lastMoveCell}
					/>
				))}
			</BoardGrid>
		</SingleBoardContainer>
	);
};

export default Board;
