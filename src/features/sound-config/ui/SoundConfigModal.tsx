"use client";
import type { SoundConfigModalProps } from "@/features/sound-config/SoundConfigModal.type";
import { SoundConfigButton } from "@/features/sound-config/ui/components/SoundConfigButton";
import SoundConfigContainer from "@/features/sound-config/ui/components/SoundConfigContainer";
import SoundConfigLabel from "@/features/sound-config/ui/components/SoundConfigLabel";
import { SoundConfigSlider } from "@/features/sound-config/ui/components/SoundConfigSlider";
import SoundConfigTitle from "@/features/sound-config/ui/components/SoundConfigTitle";
import { SoundMuteButton } from "@/features/sound-config/ui/components/SoundMuteButton";
import { useSound } from "@/shared/lib/sounds/useSound";
import ModalOverlay from "@/shared/ui/overlay/ModalOverlay";

SoundConfigSection;

import SoundConfigControls from "@/features/sound-config/ui/components/SoundConfigControl";
import SoundConfigSection from "@/features/sound-config/ui/components/SoundConfigSection";

export default function SoundConfigModal({
	visible,
	onClose,
}: SoundConfigModalProps) {
	const {
		bgMute,
		bgVolume,
		setBgMute,
		setBgVolume,
		sfxMute,
		sfxVolume,
		setSfxMute,
		setSfxVolume,
	} = useSound();

	const resetSounds = () => {
		setBgVolume(0.3);
		setSfxVolume(0.5);
		// setBgMute(true); // incase reset sound is supposed to make it mute also
		// setSfxMute(true);
	};

	if (!visible) return null;
	return (
		<ModalOverlay>
			<SoundConfigContainer>
				<SoundConfigTitle text="Sound Configuration" />
				<SoundConfigSection>
					<SoundConfigLabel
						label="Background Music"
						htmlFor="bg-music-slider"
					/>
					<SoundConfigSlider
						id="bg-music-slider"
						value={Math.round(bgVolume * 100)}
						onChange={(e) => setBgVolume(Number(e.target.value) / 100)}
					/>
					<SoundMuteButton onClick={() => setBgMute(!bgMute)}>
						{bgMute ? "Unmute" : "Mute"}
					</SoundMuteButton>
				</SoundConfigSection>

				<SoundConfigSection>
					<SoundConfigLabel
						label="Player Move Sound"
						htmlFor="player-move-slider"
					/>
					<SoundConfigSlider
						id="player-move-slider"
						value={Math.round(sfxVolume * 100)}
						onChange={(e) => setSfxVolume(Number(e.target.value) / 100)}
					/>
					<SoundMuteButton onClick={() => setSfxMute(!sfxMute)}>
						{sfxMute ? "Unmute" : "Mute"}
					</SoundMuteButton>
				</SoundConfigSection>

				{/* Controls */}
				<SoundConfigControls>
					<SoundConfigButton onClick={resetSounds}>
						Reset Sounds
					</SoundConfigButton>
					<SoundConfigButton onClick={onClose}>Return</SoundConfigButton>
				</SoundConfigControls>
			</SoundConfigContainer>
		</ModalOverlay>
	);
}
