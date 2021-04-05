export const Monsters = {
	Frankenstein: 'Frankenstein',
	Tigris: 'Tigris',
	Arthropod: 'Arthropod',
	Apoidea: 'Apoidea',
};

export const allMonstersList = Object.values(Monsters);

export const allElements = ['fire', 'water', 'grass', 'poison', 'ground'];
export const allRarity = ['common', 'uncommon', 'rare', 'epic', 'legendary'];

export const allElementAttacks: {[index: string]: string[]} = {
	fire: ['Ember', 'Blaze Kick', 'Flamethrower', 'Fire Fang', 'Fire Punch'],
	water: [
		'Hydro Cannon',
		'Water Pulse',
		'Aqua Tail',
		'Water Gun',
		'Bubble Beam',
	],
	grass: [
		'Leaf Storm',
		'Petal Dance',
		'Solar Beam',
		'Seed Flare',
		'Energy Ball',
	],
	poison: ['Acid', 'Sludge Bomb', 'Venoshock', 'Toxic Spikes', 'Sludge Wave'],
	ground: ['Drill Run', 'Mud Bomb', 'Earthquake', 'Spikes', 'Sand Attack'],
};

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
