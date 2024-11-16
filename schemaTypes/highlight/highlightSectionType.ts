import { defineField, defineType } from 'sanity';
import {CheckmarkIcon} from '@sanity/icons'

export const highlightSectionType = defineType({
    name: 'highlightTab',
    title: 'Travel Highlight Section',
    type: 'document',
    icon: CheckmarkIcon,
    fieldsets: [
        {
            name: 'linkSection',
            title: 'Link Section',
        }
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
            name: 'linkName',
            type: 'string',
            fieldset: 'linkSection'
        }),
        defineField({
            name: 'link',
            type: 'url',
            fieldset: 'linkSection'
        }),
        defineField({
            name: 'highlightOffer',
            title: 'Travel Highlight',
            type: 'array',
            of: [{type: 'reference',
                to: [{type: 'highlight'}]
            }],
        }),
    ]
})