"use client";

import { usePathname } from "next/navigation";
import type { ShortcutModalProps } from "@/features/shortcut/ShortcutModal.type";
import ShortcutButton from "@/features/shortcut/ui/components/ShortcutButton";
import ShortcutContainer from "@/features/shortcut/ui/components/ShortcutContainer";
import ShortcutList from "@/features/shortcut/ui/components/ShortcutList";
import ShortcutTitle from "@/features/shortcut/ui/components/ShortcutTitle";
import pageShortcuts from "@/shared/config/shortcut.config";
import ModalOverlay from "@/shared/ui/overlay/ModalOverlay";

export default function ShortcutModal({
	visible,
	onClose,
}: ShortcutModalProps) {
	const pathname = usePathname();
	const shortcuts = pathname ? pageShortcuts[pathname] || [] : [];

	if (!visible) return null;

	return (
		<ModalOverlay>
			<ShortcutContainer>
				<ShortcutTitle text="Keyboard Shortcuts" />

				<ShortcutList shortcuts={shortcuts} />

				<ShortcutButton onClick={onClose}>Return</ShortcutButton>
			</ShortcutContainer>
		</ModalOverlay>
	);
}
