import clsx from "clsx";
import type { LeaderboardEntry } from "@/features/get-leaderboard/api/schema";

interface LeaderboardRowProps extends LeaderboardEntry {
	isCurrentUser?: boolean;
}

export function LeaderboardRow({
	rank,
	username,
	xp,
	isCurrentUser = false,
}: LeaderboardRowProps) {
	return (
		<tr
			className={clsx(
				"border-b border-cream/10 text-[8px] md:text-sm",

				isCurrentUser && "bg-accent/15 text-accent",

				!isCurrentUser && rank === 1 && "text-accent",
				!isCurrentUser && rank === 2 && "text-[#C9D1D9]",
				!isCurrentUser && rank === 3 && "text-[#CD7F32]",
				!isCurrentUser && rank > 3 && "text-cream",
			)}>
			<td className="py-2 sm:py-3 px-1 sm:px-3 text-left whitespace-nowrap">
				#{rank}
			</td>

			<td className="py-2 sm:py-3 px-0.5 sm:px-2 text-left truncate">
				{username}
				{isCurrentUser && " (YOU)"}
			</td>

			<td className="py-2 sm:py-3 px-2 sm:px-3 text-right whitespace-nowrap">
				{xp.toLocaleString()} XP
			</td>
		</tr>
	);
}
