import fs from 'fs';
import {Blob, NFTStorage} from 'nft.storage';
import {
	adjectives,
	Config,
	names,
	uniqueNamesGenerator,
} from 'unique-names-generator';
import {
	allElementAttacks,
	allElements,
	allMonstersList,
	allRarity,
	NFT,
} from './constants';
import {NFT_STORAGE_API_KEY} from './secrets';
export const uploadToIPFS = async (file: string): Promise<any> => {
	const client = new NFTStorage({token: NFT_STORAGE_API_KEY});
	const data = await fs.promises.readFile(file);
	const cid = await client.storeBlob(new Blob([data]));
	console.log(cid);
	return cid;
};
const getRandomName = () => {
	const config: Config = {
		dictionaries: [adjectives, names],
		separator: '-',
		length: 2,
		style: 'capital',
	};
	const name = uniqueNamesGenerator(config);
	return name;
};
const getAdjective = () => {
	const config: Config = {
		dictionaries: [adjectives],
		separator: '-',
		length: 1,
		style: 'capital',
	};
	const adjective = uniqueNamesGenerator(config);
	return adjective;
};
const getNumFromRange = (
	num: number,
	in_min = 0,
	in_max = 9,
	out_min = 20,
	out_max = 30
) => {
	const res =
		((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
	return Math.floor(res);
};
type returnDNA = [
	NFT,
	string,
	string,
	{
		color1: number;
		color2: number;
		color3: number;
	}
];
export const processDNA = (DNA: string): returnDNA => {
	const monsterTypeIdx = Number(DNA.substr(0, 2)) % allMonstersList.length; // first 2 numbers
	const monsterType = allMonstersList[monsterTypeIdx];
	const [color1, color2, color3] = DNA.substr(2, 3).split('').map(Number);
	const colors = {
		color1,
		color2,
		color3,
	};
	const elementIdx = Number(DNA[5]) % allElements.length;
	const element = allElements[elementIdx];
	const rarityIdx = Number(DNA[6]) % allRarity.length;
	const rarity = allRarity[rarityIdx];
	const luck = Number(DNA.substr(7, 2));
	const allCurrentElemAttacks = allElementAttacks[element];
	const allElemExceptCurrent = allElements.filter((val) => val != element);
	const exceptElemLen = allElemExceptCurrent.length;

	const [elem2Idx, elem3Idx] = DNA.substr(9, 2).split('').map(Number);
	const element2 = allElemExceptCurrent[elem2Idx % exceptElemLen];
	const element2Attacks = allElementAttacks[element2];
	const element3 = allElemExceptCurrent[elem3Idx % exceptElemLen];
	const element3Attacks = allElementAttacks[element3];
	const [atck1, atck2, atck3, atck4, atck5] = DNA.substr(11, 5)
		.split('')
		.map(Number);
	const hpPotion = Number(DNA[16]);
	const attack1 = `${
		allCurrentElemAttacks[atck1 % allCurrentElemAttacks.length]
	} - ${getNumFromRange(atck1, 0, 9, 40, 50)} DP`;
	const attack2 = `${
		allCurrentElemAttacks[atck2 % allCurrentElemAttacks.length]
	} - ${getNumFromRange(atck2, 0, 9, 20, 50)} DP`;
	const attack3 = `${
		allCurrentElemAttacks[atck3 % allCurrentElemAttacks.length]
	} - ${getNumFromRange(atck3, 0, 9, 20, 50)} DP`;
	const attack4 = `${
		element2Attacks[atck4 % element2Attacks.length]
	} - ${getNumFromRange(atck4, 0, 9, 1, 20)} DP`;
	const attack5 = `${
		element3Attacks[atck5 % element3Attacks.length]
	} - ${getNumFromRange(atck5, 0, 9, 1, 20)} DP`;
	const hpPotionVal = `${getNumFromRange(hpPotion)} HP`;
	const name = getRandomName();
	const description = `${name} is a ${getAdjective()} NFT Monster ready for Battles.`;
	const attributes = [];
	attributes.push({
		trait_type: 'DNA',
		value: DNA,
	});
	attributes.push({
		trait_type: 'familia',
		value: monsterType,
	});
	attributes.push({
		trait_type: 'element',
		value: element,
	});
	attributes.push({
		trait_type: 'rarity',
		value: rarity,
	});
	attributes.push({
		trait_type: 'Health',
		value: '100',
	});
	attributes.push({
		trait_type: 'luck',
		value: `${luck}`,
	});
	attributes.push({
		trait_type: 'attack1',
		value: attack1,
	});
	attributes.push({
		trait_type: 'attack2',
		value: attack2,
	});
	attributes.push({
		trait_type: 'attack3',
		value: attack3,
	});
	attributes.push({
		trait_type: 'attack4',
		value: attack4,
	});
	attributes.push({
		trait_type: 'attack5',
		value: attack5,
	});
	attributes.push({
		trait_type: 'HP Potion',
		value: hpPotionVal,
	});
	const NFT_INFO: NFT = {
		name,
		description,
		attributes,
		image: '',
	};
	return [NFT_INFO, monsterType, element, colors];
};
