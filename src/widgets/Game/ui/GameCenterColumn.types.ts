import type { ReactNode } from "react";

export default interface GameCenterColumnProps {
	children: ReactNode;
	/** Rendered above the board, visible only below lg breakpoint */
	mobileBoardSelector?: ReactNode;
}
