import SpellAPI, { Query } from './SpellAPI';
import { SpellcasterClass, School } from './Spell';

describe('list query', () => {

    const tests: {
        name: string,
        query: Query,
        expected: {
            results: number;
        }
    }[] = [
            {
                name: 'list all cantrips',
                query: {
                    levels: [0],
                },
                expected: {
                    results: 24,
                }
            },
            {
                name: 'list wizard spells',
                query: {
                    classes: [
                        SpellcasterClass.Wizard,
                    ]
                },
                expected: {
                    results: 189,
                }
            },
            {
                name: 'list evocation spells',
                query: {
                    schools: [
                        School.Evocation,
                    ]
                },
                expected: {
                    results: 57,
                }
            },
            {
                name: 'list wizard cantrips',
                query: {
                    classes: [
                        SpellcasterClass.Wizard,
                    ],
                    levels: [
                        0,
                    ],
                },
                expected: {
                    results: 14,
                }
            },
            {
                name: 'list wizard evocation cantrips',
                query: {
                    classes: [
                        SpellcasterClass.Wizard,
                    ],
                    levels: [
                        0,
                    ],
                    schools: [
                        School.Evocation,
                    ]
                },
                expected: {
                    results: 5,
                }
            },
            {
                name: 'list all 1st and 2nd level spells',
                query: {
                    levels: [1, 2],
                },
                expected: {
                    results: 99,
                }
            },
        ];

    const spellAPI = new SpellAPI();

    tests.forEach((test) => {
        it(test.name, (done) => {
            const actual = spellAPI.list(test.query);
            expect(actual.length).toEqual(test.expected.results);
            actual.forEach((spell) => {
                if (test.query.classes !== undefined && test.query.classes.length > 0) {
                    const filteredList = test.query.classes.filter((value) => spell.classes.includes(value));
                    expect(filteredList.length).toBeGreaterThan(0);
                }
                if (test.query.levels !== undefined && test.query.levels.length > 0) {
                    expect(test.query.levels).toContain(spell.level);
                }
                if (test.query.schools !== undefined && test.query.schools.length > 0) {
                    expect(test.query.schools).toContain(spell.school);
                }
            });

            done();
        })
    });
})