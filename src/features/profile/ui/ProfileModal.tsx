/** biome-ignore-all lint/style/noRestrictedImports: <explanation> */
import Image from "next/image";
import { useCoins } from "@/shared/lib/store/coins/useCoins";
import { useProfile } from "@/shared/lib/store/profile/useProfile";
import { useUser } from "@/shared/lib/store/user/useUser";
import { useXP } from "@/shared/lib/store/xp/useXP";
import ModalOverlay from "@/shared/ui/overlay/ModalOverlay";
import type { ProfileModalProps } from "../ProfileModal.type";
import ProfileButton from "./components/ProfileButton";
import ProfileContainer from "./components/ProfileContainer";
import ProfileTitle from "./components/ProfileTitle";

const ProfileModal = ({ visible, onClose }: ProfileModalProps) => {
	const name = useProfile((state) => state.name);
	const email = useProfile((state) => state.email);
	const pic = useProfile((state) => state.pic);
	const coins = useCoins((state) => state.coins);
	const xp = useXP((state) => state.XP);

	const authReady = useUser((state) => state.authReady);
	const user = useUser((state) => state.user);
	const isValidPic = pic && pic !== "empty.empty";
	if (!visible) return null;
	return (
		<ModalOverlay>
			<ProfileContainer>
				<ProfileTitle text="Profile" />

				{authReady && user ? (
					<>
						{isValidPic ? (
							<Image
								src={pic}
								alt="profile"
								width={80}
								height={80}
								className="mx-auto border-border-pixel border-3"
							/>
						) : (
							<div className="mx-auto font-pixel text-[8px] text-muted">
								IMAGE LOAD ERROR
							</div>
						)}

						<div className="space-y-2 my-4">
							<div className="font-pixel text-[8px] text-cream-dim text-center">
								NAME: <span className="text-cream">{name}</span>
							</div>
							<div className="font-pixel text-[8px] text-cream-dim text-center">
								EMAIL: <span className="text-cream">{email}</span>
							</div>
							<div className="font-pixel text-[8px] text-cream-dim text-center">
								COINS: <span className="text-accent">{coins}</span>
							</div>
							<div className="font-pixel text-[8px] text-cream-dim text-center">
								XP: <span className="text-accent">{xp}</span>
							</div>
						</div>
					</>
				) : (
					<div className="font-pixel text-[9px] text-muted m-5 text-center">
						PLEASE LOGIN
					</div>
				)}

				<ProfileButton onClick={onClose}>Close&nbsp;Profile</ProfileButton>
			</ProfileContainer>
		</ModalOverlay>
	);
};

export default ProfileModal;
