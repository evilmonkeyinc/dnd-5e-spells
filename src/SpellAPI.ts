import Spell, { SpellcasterClass, School } from './Spell';
import spellData from '../public/spells.json';

export class Query {
    classes?: SpellcasterClass[];
    levels?: number[];
    schools?: School[];
}

export default class SpellAPI {

    private spellByName = new Map<string, Spell>();
    private spellsByClass = new Map<SpellcasterClass, string[]>();
    private spellsByLevel = new Map<number, string[]>();
    private spellsBySchool = new Map<School, string[]>()

    constructor() {
        this.init();
    }

    public get(name: string): Spell | undefined {
        return this.spellByName.get(name);
    }

    public listAll(): Spell[] {
        return spellData as Spell[];
    }

    public list(query: Query): Spell[] {
        let spellList = new Array<Spell>();

        let spellNameList = new Array<string>();
        if (query.classes !== undefined && query.classes.length > 0) {
            let array = new Array<string>();
            query.classes.forEach((spellcasterClass) => {
                let subArray = this.spellsByClass.get(spellcasterClass) || [];
                if (subArray.length > 0) {
                    array.push(...subArray)
                }
            })
            if (array.length > 0) {
                spellNameList.push(...array);
            }
        }
        if (query.levels !== undefined && query.levels.length > 0) {
            let array = new Array<string>();
            query.levels.forEach((level) => {
                let subArray = this.spellsByLevel.get(level) || [];
                if (subArray.length > 0) {
                    array.push(...subArray)
                }
            })
            if (array.length > 0) {
                if (spellNameList.length > 0) {
                    spellNameList = spellNameList.filter((value) => array.includes(value));
                } else {
                    spellNameList.push(...array);
                }
            }
        }
        if (query.schools !== undefined) {
            let array = new Array<string>();
            query.schools.forEach((school) => {
                let subArray = this.spellsBySchool.get(school) || [];
                if (subArray.length > 0) {
                    array.push(...subArray)
                }
            })
            if (array.length > 0) {
                if (spellNameList.length > 0) {
                    spellNameList = spellNameList.filter((value) => array.includes(value));
                } else {
                    spellNameList.push(...array);
                }
            }
        }

        spellNameList.forEach((spellName) => {
            const spell = this.spellByName.get(spellName);
            if (spell !== undefined) {
                spellList.push(spell);
            }
        })

        return spellList;
    }

    public listByClass(spellcasterClass: SpellcasterClass): Spell[] {
        let spellList = new Array<Spell>();
        this.spellsByClass.get(spellcasterClass)?.forEach((spellName) => {
            const spell = this.spellByName.get(spellName);
            if (spell !== undefined) {
                spellList.push(spell);
            }
        })
        return spellList;
    }

    public listByLevel(level: number): Spell[] {
        let spellList = new Array<Spell>();
        this.spellsByLevel.get(level)?.forEach((spellName) => {
            const spell = this.spellByName.get(spellName);
            if (spell !== undefined) {
                spellList.push(spell);
            }
        })
        return spellList;
    }

    public listBySchool(school: School): Spell[] {
        let spellList = new Array<Spell>();
        this.spellsBySchool.get(school)?.forEach((spellName) => {
            const spell = this.spellByName.get(spellName);
            if (spell !== undefined) {
                spellList.push(spell);
            }
        })
        return spellList;
    }

    private init() {
        if (this.spellByName.size === 0) {
            (spellData as Spell[]).forEach((spell: Spell) => {
                this.spellByName.set(spell.name, spell);

                spell.classes.forEach((spellcaster) => {
                    let classArray = this.spellsByClass.get(spellcaster);
                    if (classArray === undefined) {
                        classArray = new Array<string>();
                        this.spellsByClass.set(spellcaster, classArray);
                    }
                    classArray.push(spell.name);
                });

                let levelArray = this.spellsByLevel.get(spell.level);
                if (levelArray === undefined) {
                    levelArray = new Array<string>();
                    this.spellsByLevel.set(spell.level, levelArray);
                }
                levelArray.push(spell.name);

                let schoolArray = this.spellsBySchool.get(spell.school);
                if (schoolArray === undefined) {
                    schoolArray = new Array<string>();
                    this.spellsBySchool.set(spell.school, schoolArray);
                }
                schoolArray.push(spell.name);
            });
        }
    }
}