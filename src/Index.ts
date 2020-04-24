import spells from '../public/spells.json';
import Spell from './Spell';
import SpellAPI from './SpellAPI';

let spellAPI: SpellAPI | undefined;

export function getSpellAPI(): SpellAPI {
    if (spellAPI === undefined) {
        spellAPI = new SpellAPI();
    }
    return spellAPI;
}

export function raw(): Spell[] {
    return spells as Spell[];
}

