import spells from '../public/spells.json';
import spellsByClass from '../public/spells_by_class.json';
import Spell from './Spell';
import { SpellsByClass } from './SpellsByClass';

export function all(): Spell[] {
    return spells as Spell[];
}

export function classList(): SpellsByClass {
    return spellsByClass as SpellsByClass;
}
