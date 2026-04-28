type GlobalModalType =
	| "soundConfig"
	| "shortcut"
	| "tutorial"
	| "profile"
	| "resetConfirmation"
	| "exitConfirmation"
	| "boardConfig"
	| "difficulty"
	| "names"
	| "winner"
	| null;

export default interface GlobalModalStore {
	activeModal: GlobalModalType;
	openModal: (modal: GlobalModalType) => void;
	closeModal: () => void;
}
