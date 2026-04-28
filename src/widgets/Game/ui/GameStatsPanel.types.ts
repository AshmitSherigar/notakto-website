import type MoveLogEntry from "@/shared/types/MoveLogEntry.types";

interface StatItem {
	label: string;
	value: string | number;
}

export default interface GameStatsPanelProps {
	stats: StatItem[];
	moveLog: MoveLogEntry[];
	boardSize: number;
}
