import { ENTITY_TYPES } from '../data/constants';

export const DEFAULT_GAME = {
    title: "Classic Mystery Game",
    entities: {
        [ENTITY_TYPES.PLACE]: [
            { name: 'ballroom', type: ENTITY_TYPES.PLACE },
            { name: 'conservatory', type: ENTITY_TYPES.PLACE },
            { name: 'library', type: ENTITY_TYPES.PLACE },
            { name: 'kitchen', type: ENTITY_TYPES.PLACE },
            { name: 'billiard_room', type: ENTITY_TYPES.PLACE },
            { name: 'study', type: ENTITY_TYPES.PLACE },
            { name: 'hall', type: ENTITY_TYPES.PLACE },
            { name: 'lounge', type: ENTITY_TYPES.PLACE },
            { name: 'dining_room', type: ENTITY_TYPES.PLACE }
        ],
        [ENTITY_TYPES.PERSON]: [
            { name: 'scarlet', type: ENTITY_TYPES.PERSON },
            { name: 'orchid', type: ENTITY_TYPES.PERSON },
            { name: 'peacock', type: ENTITY_TYPES.PERSON },
            { name: 'green', type: ENTITY_TYPES.PERSON },
            { name: 'mustard', type: ENTITY_TYPES.PERSON },
            { name: 'plum', type: ENTITY_TYPES.PERSON }
        ],
        [ENTITY_TYPES.WEAPON]: [
            { name: 'candle_stick', type: ENTITY_TYPES.WEAPON },
            { name: 'revolver', type: ENTITY_TYPES.WEAPON },
            { name: 'wrench', type: ENTITY_TYPES.WEAPON },
            { name: 'dagger', type: ENTITY_TYPES.WEAPON },
            { name: 'lead_pipe', type: ENTITY_TYPES.WEAPON },
            { name: 'rope', type: ENTITY_TYPES.WEAPON }
        ]
    }
}