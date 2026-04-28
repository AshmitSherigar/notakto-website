import type { BaseButtonProps } from "@/shared/types/BaseButton.types";

export interface CellButtonProps extends BaseButtonProps {
	isLastMove?: boolean;
	owner?: 1 | 2;
}
