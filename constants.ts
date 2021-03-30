export const Monsters = {
	Frankenstein: 'Frankenstein',
	Tigris: 'Tigris',
	Arthropod: 'Arthropod',
	Apoidea: 'Apoidea',
};

export const allMonstersList = Object.values(Monsters);

export const allElements = ['fire', 'water', 'grass', 'poison', 'ground'];
export const allRarity = ['common', 'uncommon', 'rare', 'epic', 'legendary'];

// interface IAllElemColors {
//   fire: string[];
//   water: string[];
//   grass: string[];
//   poison: string[];
//   ground: string[];
// }
export const allElementColors: {[index: string]: string[]} = {
	fire: ['#8B4537', '#9F4E3E', '#A95342', '#CA6A57', '#D28171'],
	water: ['#40B1D1', '#2B8AA6', '#319CBA', '#184E5D', '#133D48'],
	grass: ['#13543A', '#166344', '#1A734F', '#1D8259', '#2D9E71'],
	poison: ['#413999', '#7D75CF', '#6259C5', '#242056', '#5A50C2'],
	ground: ['#7A5F1B', '#4D3C11', '#6B5318', '#82651D', '#9E7E2D'],
};

export interface NFT {
	name: string;
	image: string;
	description: string;
	attributes: any[];
}
