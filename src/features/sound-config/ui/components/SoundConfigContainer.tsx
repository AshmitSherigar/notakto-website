import type { SoundConfigContainerProps } from "@/features/sound-config/ui/components/SoundConfigContainer.type";

export default function SoundConfigContainer({
	children,
}: SoundConfigContainerProps) {
	return (
		<div className="bg-panel pixel-border p-6 w-[90%] max-w-xl space-y-6 text-center text-cream">
			{children}
		</div>
	);
}
