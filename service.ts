import fs from 'fs';
import {Blob, NFTStorage} from 'nft.storage';
import {
	adjectives,
	Config,
	names,
	uniqueNamesGenerator,
} from 'unique-names-generator';
import {allElements, allMonstersList, allRarity, NFT} from './constants';
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
export const processDNA = (DNA: string) => {
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
	const name = getRandomName();
	const description = `${name} is a ${getAdjective()} NFT Monster ready for Battles.`;
	const attributes = [];
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
		trait_type: 'luck',
		value: luck,
	});
	const NFT_INFO: NFT = {
		name,
		description,
		attributes,
		image: '',
	};
	return [NFT_INFO, monsterType, element, colors];
};
