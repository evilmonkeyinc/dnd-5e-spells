
export enum AttackSave {
    CharismaSave = 'charisma_save',
    ConstitutionSave = 'constitution_save',
    DexteritySave = 'dexterity_save',
    IntelligenceSave = 'intelligence_save',
    MeleeSpellAttack = 'melee_spell_attack',
    RangedSpellAttack = 'ranged_spell_attack',
    Special = 'special',
    StrengthSave = 'strength_save',
    WisdomSave = 'wisdom_save',
}

export enum CastingTime {
    Action = 'action',
    ActionOr8Hours = 'action or 8 hours',
    BonusAction = 'bonus action',
    Reaction = 'reaction',
    The10Minutes = '10 minutes',
    The12Hours = '12 hours',
    The1Hour = '1 hour',
    The1Minute = '1 minute',
    The24Hours = '24 hours',
    The8Hours = '8 hours',
}

export interface Components {
    verbal?: boolean;
    somatic?: boolean;
    material?: Material;
}

export interface Material {
    description: string;
    consumed: boolean;
}

export enum School {
    Abjuration = 'abjuration',
    Conjuration = 'conjuration',
    Divination = 'divination',
    Enchantment = 'enchantment',
    Evocation = 'evocation',
    Illusion = 'illusion',
    Necromancy = 'necromancy',
    Transmutation = 'transmutation',
}

export default interface Spell {
    name: string;
    school: School;
    level: number;
    casting_time: CastingTime;
    range: string;
    components: Components;
    duration: string;
    description: string[];
    higher_levels?: string;
    ritual?: boolean;
    attack_save?: AttackSave;
    concentration?: boolean;
    reaction_trigger?: string;
}
