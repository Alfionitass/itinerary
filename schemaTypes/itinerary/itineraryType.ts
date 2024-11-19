import { defineField, defineType } from 'sanity';
import {EarthAmericasIcon} from '@sanity/icons'

export const itineraryType = defineType({
    name: 'itinerary',
    title: 'Itinerary',
    type: 'document',
    icon: EarthAmericasIcon,
    fieldsets: [
        { 
            name: 'schedule', 
            title: 'Schedule Details', 
            description: 'optional field to add the additional schedule such as arrival, departure, etc.',
            options: { 
                columns: 2,
                collapsed: true
            }
        },
    ],
    fields: [
        defineField({
            name: 'orderId',
            type: 'number'
        }),
        defineField({
            name: 'itineraryTitle',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'experience',
            title: 'Travel Experience',
            description: 'optional field',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            type: 'string'
        }),
        defineField({
            name: 'town',
            type: 'string',
        }),
        defineField({
            name: 'schedule1',
            type: 'string',
            fieldset: 'schedule'
        }),
        defineField({
            name: 'schedule2',
            type: 'string',
            fieldset: 'schedule'
        }),
        defineField({
            name: 'image',
            title: 'Image 1',
            type: 'image',
        }),
        defineField({
            name: 'imageDescription',
            title: 'Image Description',
            type: 'array',
            of: [{type: 'block'}]
        }),
        defineField({
            name: 'details',
            title: 'Itinerary details',
            type: 'array',
            of: [{type: 'reference',
                to: [
                    {type: 'transfer'},
                    {type: 'welcome'}, 
                    {type: 'accomodation'},
                    {type: 'meals'}
                ]
            }],
            options: {
                insertMenu: {
                    showIcons: true,
                },
            }
        }),
        defineField({
            name: 'details2',
            title: 'Included and optional experiences',
            type: 'array',
            of: [{type: 'reference',
                to: [{type: 'itineraryDetails'}]
            }],
        }), 
    ]
})