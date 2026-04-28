"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { PlayerNamesModalProps } from "@/features/player-name/PlayerNameModal.types";
import PlayerNameFormContainer from "@/features/player-name/ui/components/PlayerNameFormContainer";
import PlayerNameModalContainer from "@/features/player-name/ui/components/PlayerNameModalContainer";
import PlayerNameModalTitle from "@/features/player-name/ui/components/PlayerNameModalTitle";
import { useToastCooldown } from "@/shared/lib/useToastCooldown";
import ModalOverlay from "@/shared/ui/overlay/ModalOverlay";
import {
	TOAST_DURATION,
	TOAST_IDS,
} from "@/shared/ui/toast/CustomToastContainer.config";
import { PlayerInput } from "@/widgets/Game/ui/PlayerInput";
import { PlayerStartButton } from "@/widgets/Game/ui/PlayerStartButton";

const MAX_PLAYER_NAME_LENGTH = 15;

const PlayerNamesModal = ({
	visible,
	onSubmit,
	initialNames = ["Player 1", "Player 2"],
}: PlayerNamesModalProps) => {
	const [player1, setPlayer1] = useState(initialNames[0] || "Player 1");
	const [player2, setPlayer2] = useState(initialNames[1] || "Player 2");

	const { canShowToast, triggerToastCooldown, resetCooldown } =
		useToastCooldown(TOAST_DURATION);

	useEffect(() => {
		setPlayer1(initialNames[0] || "Player 1");
		setPlayer2(initialNames[1] || "Player 2");
	}, [initialNames]);

	const handleSubmit = () => {
		if (!canShowToast()) return;

		if (player1.trim().toLowerCase() === player2.trim().toLowerCase()) {
			toast("Player 1 and Player 2 cannot have the same name.", {
				toastId: TOAST_IDS.PlayerNames.Duplicate,
				autoClose: TOAST_DURATION,
				onClose: resetCooldown, // reset cooldown if closed early
			});
			triggerToastCooldown();
			return;
		}
		toast.dismiss(TOAST_IDS.PlayerNames.Duplicate);
		resetCooldown();

		onSubmit(player1 || "Player 1", player2 || "Player 2");
	};

	if (!visible) return null;

	return (
		<ModalOverlay>
			<PlayerNameModalContainer>
				<PlayerNameModalTitle text="Enter Player Names" />
				<PlayerNameFormContainer>
					<div>
						<PlayerInput
							value={player1}
							onChange={(e) => setPlayer1(e.target.value)}
							placeholder="Player 1 Name"
							maxLength={MAX_PLAYER_NAME_LENGTH}
						/>
						{/* ✅ Character counter - right aligned */}
						<div className="text-xl text-white mt-1 text-right">
							{player1.length}/{MAX_PLAYER_NAME_LENGTH} characters
						</div>
					</div>

					<div>
						<PlayerInput
							value={player2}
							onChange={(e) => setPlayer2(e.target.value)}
							placeholder="Player 2 Name"
							maxLength={MAX_PLAYER_NAME_LENGTH}
						/>
						{/* ✅ Character counter - right aligned */}
						<div className="text-xl text-white mt-1 text-right">
							{player2.length}/{MAX_PLAYER_NAME_LENGTH} characters
						</div>
					</div>
				</PlayerNameFormContainer>

				<PlayerStartButton onClick={handleSubmit}>Start Game</PlayerStartButton>
			</PlayerNameModalContainer>
		</ModalOverlay>
	);
};

export default PlayerNamesModal;
