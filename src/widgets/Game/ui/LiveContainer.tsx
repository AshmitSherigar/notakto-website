import type { LiveContainerProps } from "@/widgets/Game/ui/LiveContainer.types";

export default function LiveContainer({ children }: LiveContainerProps) {
	return (
		<div className="flex-1 flex flex-col justify-center items-center px-4 overflow-y-auto min-h-0">
			{children}
		</div>
	);
}
