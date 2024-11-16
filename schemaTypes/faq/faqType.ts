import { defineField, defineType } from 'sanity';
import {HelpCircleIcon} from '@sanity/icons';

export const faqType = defineType({
    name: 'faq',
    title: 'Frequently Asked Questions',
    type: 'document',
    icon: HelpCircleIcon,
    fields: [
        defineField({
            name: 'question',
            type: 'string'
        }),
        defineField({
            name: 'answer',
            type: 'array',
            of: [{type: 'block'}]
        })
    ]
})