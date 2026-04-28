import WinnerAction from "@/features/winner/ui/components/WinnerAction";
import WinnerButton from "@/features/winner/ui/components/WinnerButton";
import WinnerContainer from "@/features/winner/ui/components/WinnerContainer";
import WinnerMessage from "@/features/winner/ui/components/WinnerMessage";
import WinnerTitle from "@/features/winner/ui/components/WinnerTitle";
import type WinnerModalProps from "@/features/winner/WinnerModal.types";
import ModalOverlay from "@/shared/ui/overlay/ModalOverlay";

const WinnerModal = ({
	visible,
	winner,
	onPlayAgain,
	onMenu,
}: WinnerModalProps) => {
	if (!visible) return null;
	return (
		<ModalOverlay>
			<WinnerContainer>
				<WinnerTitle text="Game Over!" />
				<WinnerMessage
					text={winner === "You" ? "You won!" : `${winner} wins`}
				/>
				<WinnerAction>
					<WinnerButton onClick={onPlayAgain}>Play Again</WinnerButton>
					<WinnerButton onClick={onMenu}>Main Menu</WinnerButton>
				</WinnerAction>
			</WinnerContainer>
		</ModalOverlay>
	);
};

export default WinnerModal;
