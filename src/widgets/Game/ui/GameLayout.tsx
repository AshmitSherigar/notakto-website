import type { GameLayoutProps } from "@/widgets/Game/ui/GameLayout.types";

export default function GameLayout({ children }: GameLayoutProps) {
	return (
		<div className="flex flex-col h-[calc(100dvh-3.5rem)] md:h-dvh bg-bg0 relative overflow-y-auto">
			{children}
		</div>
	);
}
