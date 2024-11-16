import { defineField, defineType } from 'sanity';
import {PinIcon} from '@sanity/icons'

export const aboutSectionType = defineType({
    name: 'aboutTab',
    title: 'About Trip Section',
    type: 'document',
    icon: PinIcon,
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
            name: 'aboutOffer',
            title: 'About Trip',
            type: 'array',
            of: [{type: 'reference',
                to: [{type: 'about'}]
            }],
        }),
    ]
})