import type { BaseModalProps } from "@/shared/types/BaseModal.types";

export type DifficultyLevel = 1 | 2 | 3 | 4 | 5;

export interface DifficultyModalProps extends BaseModalProps {
	onSelect: (level: DifficultyLevel) => void;
}
