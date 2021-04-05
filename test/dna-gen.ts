import randomInt from 'random-int';
import {processDNA} from '../service';

const randDNA = randomInt(10000000000000000, 999999999999999999);
console.log('DNA ', randDNA, String(randDNA).length);

const [NFT_INFO, monsterType, element, colors] = processDNA(String(randDNA));
console.log(NFT_INFO, monsterType, element, colors, 'NFT_INFO, colors');
