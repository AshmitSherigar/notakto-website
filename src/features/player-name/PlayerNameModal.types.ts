import type { BaseModalProps } from "@/shared/types/BaseModal.types";

export interface PlayerNamesModalProps extends BaseModalProps {
	onSubmit: (p1: string, p2: string) => void;
	initialNames?: [string, string];
}
