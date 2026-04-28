import { variantClass } from "@/shared/ui/pixel/PixelBorder.config";
import type { PixelBorderProps } from "@/shared/ui/pixel/PixelBorder.types";

export default function PixelBorder({
	children,
	variant = "default",
	className = "",
}: PixelBorderProps) {
	return (
		<div className={`bg-panel p-4 ${variantClass[variant]} ${className}`}>
			{children}
		</div>
	);
}
