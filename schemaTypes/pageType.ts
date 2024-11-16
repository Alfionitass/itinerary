import { defineField, defineType } from 'sanity';
import {BookIcon} from '@sanity/icons';

export const pageType = defineType({
    name: 'page',
    title: 'Travel Itinerary',
    type: 'document',
    icon: BookIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Country',
            type: 'string'
        }),
        defineField({
            name: 'summary',
            title: 'Top Country Summary',
            type: 'reference',
            to: [{type: 'topSummary'}]
        }),
        defineField({
            name: 'itinerarySection',
            title: 'Itinerary',
            type: 'reference',
            to: [{type: 'itineraryTab'}]
        }),
        defineField({
            name: 'aboutSection',
            title: 'Sightseeing Highlights',
            type: 'reference',
            to: [{type: 'aboutTab'}]
        }),
        defineField({
            name: 'highlightSection',
            title: 'Travel Highlights',
            type: 'reference',
            to: [{type: 'highlightTab'}]
        }),
        defineField({
            name: 'faqSection',
            title: 'Frequently Asked and Questions',
            type: 'reference',
            to: [{type: 'faqTab'}]
        })
    ]
})