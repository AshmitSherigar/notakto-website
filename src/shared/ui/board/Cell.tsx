"use client";

import type CellProps from "@/shared/types/Cell.types";
import CellButton from "@/shared/ui/board/CellButton";
import CellValueDisplay from "@/shared/ui/board/CellValueDisplay";

const Cell: React.FC<CellProps> = ({
	boardIndex,
	cellIndex,
	value,
	onPress,
	disabled,
	owner,
	isLastMove,
}) => {
	const handleClick = () => onPress(boardIndex, cellIndex);
	const isDisabled = disabled || !!value;

	return (
		<CellButton
			onClick={handleClick}
			disabled={isDisabled}
			isLastMove={isLastMove}
			owner={owner}>
			<CellValueDisplay value={value} owner={owner} />
		</CellButton>
	);
};

export default Cell;
