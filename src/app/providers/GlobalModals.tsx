"use client";

import ProfileModal from "@/features/profile/ui/ProfileModal";
import ShortcutModal from "@/features/shortcut/ui/ShortcutModal";
import SoundConfigModal from "@/features/sound-config/ui/SoundConfigModal";
import TutorialModal from "@/features/tutorial/TutorialModal";
import { useGlobalModal } from "@/shared/lib/globalModalStore/useGlobalModalStore";

export default function GlobalModals() {
	const { activeModal, closeModal } = useGlobalModal();

	return (
		<>
			<SoundConfigModal
				visible={activeModal === "soundConfig"}
				onClose={closeModal}
			/>
			<ShortcutModal
				visible={activeModal === "shortcut"}
				onClose={closeModal}
			/>
			<TutorialModal
				visible={activeModal === "tutorial"}
				onClose={closeModal}
			/>
			<ProfileModal visible={activeModal === "profile"} onClose={closeModal} />
		</>
	);
}
