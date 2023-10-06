export interface SuperHero extends NewSuperHero {
	id: number;
	creationDate: Date;
}

export interface NewSuperHero {
	name: string;
	heroName: string;
	powers: string[];
	level: number;
	description: string;
}
