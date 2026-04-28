import type { SoundConfigControlsProps } from "@/features/sound-config/ui/components/SoundConfigControl.type";

export default function SoundConfigControls({
	children,
}: SoundConfigControlsProps) {
	return (
		<div className="mt-6 flex flex-wrap gap-3 justify-center">{children}</div>
	);
}
