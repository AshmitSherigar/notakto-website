import type { ReactNode } from "react";

export interface PixelBorderProps {
	children: ReactNode;
	variant?: "default" | "primary" | "accent";
	className?: string;
}
