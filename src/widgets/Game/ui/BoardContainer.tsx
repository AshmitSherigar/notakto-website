import type { BoardContainerProps } from "@/widgets/Game/ui/BoardContainer.types";

export default function BoardContainer({ children }: BoardContainerProps) {
	return (
		<div className="flex flex-wrap justify-center gap-4 p-4 w-full">
			{children}
		</div>
	);
}
