import type { WinnerActionProps } from "@/features/winner/ui/components/WinnerAction.types";

export default function WinnerAction({ children }: WinnerActionProps) {
	return <menu className="flex justify-between gap-4 w-full">{children}</menu>;
}
