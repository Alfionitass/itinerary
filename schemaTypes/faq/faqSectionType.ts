import { defineField, defineType } from 'sanity';
import {HelpCircleIcon} from '@sanity/icons';

export const faqSectionType = defineType({
    name: 'faqTab',
    title: 'FAQ Section',
    type: 'document',
    icon: HelpCircleIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'faqOffer',
            title: 'FAQ',
            type: 'array',
            of: [{type: 'reference',
                to: [{type: 'faq'}]
            }]
        })
    ]
})