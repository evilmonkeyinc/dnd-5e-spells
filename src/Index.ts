import data from '../public/spells.json';
import Spell from './Spell';

export function all(): Spell[] {
    return data as Spell[];
}
