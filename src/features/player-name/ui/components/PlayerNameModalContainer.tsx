/** biome-ignore-all lint/style/noRestrictedImports: <explanation> */
import type { PlayerNameContainerProps } from "./PlayerNameModal.type";

export default function PlayerNameModalContainer({
	children,
}: PlayerNameContainerProps) {
	return (
		<section className="bg-panel pixel-border w-[95%] md:w-[80%] max-w-md p-4 md:p-6 text-center">
			{children}
		</section>
	);
}
