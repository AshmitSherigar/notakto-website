import type { BaseButtonProps } from "@/shared/types/BaseButton.types";

export interface DifficultyActionProps extends BaseButtonProps {
	variant: "level" | "cancel";
}
