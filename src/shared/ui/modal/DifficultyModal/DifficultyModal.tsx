"use client";

import { DifficultyActionButton } from "@/shared/ui/modal/DifficultyModal/components/DifficultyActionButton";
import DifficultyContainer from "@/shared/ui/modal/DifficultyModal/components/DifficultyContainer";
import DifficultyTitle from "@/shared/ui/modal/DifficultyModal/components/DifficultyTitle";
import type {
	DifficultyLevel,
	DifficultyModalProps,
} from "@/shared/ui/modal/DifficultyModal/DifficultyModal.types";
import ModalOverlay from "@/shared/ui/overlay/ModalOverlay";

const DifficultyModal = ({
	visible,
	onSelect,
	onClose,
}: DifficultyModalProps) => {
	if (!visible) return null;
	const DifficultyLevels: DifficultyLevel[] = [1, 2, 3, 4, 5];
	return (
		<ModalOverlay>
			<DifficultyContainer>
				<DifficultyTitle text="Select Difficulty"></DifficultyTitle>

				{DifficultyLevels.map((level) => (
					<DifficultyActionButton
						variant="level"
						key={level}
						onClick={() => onSelect(level)}>
						Level {level}
					</DifficultyActionButton>
				))}

				<DifficultyActionButton variant="cancel" onClick={onClose}>
					Cancel
				</DifficultyActionButton>
			</DifficultyContainer>
		</ModalOverlay>
	);
};

export default DifficultyModal;
