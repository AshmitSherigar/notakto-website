interface Platform {
	name: string;
	icon: string;
	desc: string;
}

export default interface PlatformCardListProps {
	platforms: Platform[];
}
