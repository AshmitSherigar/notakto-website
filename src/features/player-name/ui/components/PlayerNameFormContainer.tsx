import type { PlayerNameFormProps } from "@/features/player-name/ui/components/PlayerNameFormContainer.types";

export default function PlayerNameFormContainer({
	children,
}: PlayerNameFormProps) {
	return <form className="mb-6 gap-4 flex flex-col">{children}</form>;
}
