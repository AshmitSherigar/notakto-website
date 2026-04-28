import type { SoundConfigSectionProps } from "@/features/sound-config/ui/components/SoundConfigSection.type";

export default function SoundConfigSection({
	children,
}: SoundConfigSectionProps) {
	return (
		<div className="my-4 flex items-center justify-between">{children}</div>
	);
}
