import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface BaseButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
}
