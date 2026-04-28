import { TutorialButton } from "@/features/tutorial/components/TutorialButton";
import TutorialContainer from "@/features/tutorial/components/TutorialContainer";
import TutorialList from "@/features/tutorial/components/TutorialList";
import TutorialTitle from "@/features/tutorial/components/TutorialTitle";
import type { TutorialModalProps } from "@/features/tutorial/TutorialModal.types";
import ModalOverlay from "@/shared/ui/overlay/ModalOverlay";

const TutorialModal = ({ visible, onClose }: TutorialModalProps) => {
	if (!visible) return null;
	const rules = [
		"Both players use X marks",
		"Game is played on three 3x3 boards",
		"Players alternate placing Xs",
		"Any board with 3 Xs in a row becomes dead",
		"Last player to make a valid move loses",
		"Strategy: Force opponent to make final move!",
	];

	return (
		<ModalOverlay>
			<TutorialContainer>
				<TutorialTitle text="How&nbsp;to&nbsp;Play&nbsp;Notakto" />

				<TutorialList items={rules} />

				<TutorialButton onClick={onClose}>Close&nbsp;Tutorial</TutorialButton>
			</TutorialContainer>
		</ModalOverlay>
	);
};

export default TutorialModal;
