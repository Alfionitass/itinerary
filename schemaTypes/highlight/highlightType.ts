import { defineField, defineType } from 'sanity';
import {CheckmarkIcon} from '@sanity/icons'

export const highlightType = defineType({
    name: 'highlight',
    title: 'Travel Highlight',
    type: 'document',
    icon: CheckmarkIcon,
    fields: [
        defineField({
            name: 'details',
            type: 'string',
        })
    ]
})