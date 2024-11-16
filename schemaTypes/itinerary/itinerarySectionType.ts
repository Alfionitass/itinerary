import { defineField, defineType } from 'sanity';
import {EarthAmericasIcon} from '@sanity/icons'

export const itinerarySectionType = defineType({
    name: 'itineraryTab',
    title: 'Itinerary Section',
    type: 'document',
    icon: EarthAmericasIcon,
    fieldsets: [
        { 
            name: 'instruction', 
            title: 'Instructions',
            options: { 
                columns: 2,
            }
        },
    ],
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'subtitle',
            type: 'string'
        }),
        defineField({
            name: 'instructions1',
            type: 'string',
            fieldset: 'instruction'
        }),
        defineField({
            name: 'instructions2',
            type: 'string',
            fieldset: 'instruction'
        }),
        defineField({
            name: 'itineraryOffer',
            title: 'Itinerary',
            type: 'array',
            of: [{type: 'reference',
                to: [{type: 'itinerary'}]
            }],
        }),
    ]
})