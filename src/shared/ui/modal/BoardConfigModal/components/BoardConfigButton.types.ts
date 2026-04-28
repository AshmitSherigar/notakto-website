import type { BaseButtonProps } from "@/shared/types/BaseButton.types";

export interface BoardConfigButtonProps extends BaseButtonProps {
	label: string | number;
	isActive: boolean;
}
