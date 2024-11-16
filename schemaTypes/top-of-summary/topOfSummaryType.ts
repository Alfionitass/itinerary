import { defineField, defineType } from 'sanity';

export const topOfSummaryType = defineType({
    name: 'topSummary',
    title: 'Top of Summary',
    type: 'document',
    fields: [
        defineField({
            name: 'countryTitle',
            type: 'string'
        }),
        defineField({
            name: 'year',
            title: 'Trip Date',
            type: 'date'
        }),
        defineField({
            name: 'summaryDesc',
            title: 'Summary Description',
            type: 'reference',
            to: [{type: 'summaryDescription'}],
        }),
        defineField({
            name: 'accomodation',
            title: 'Travel and Accomodation',
            type: 'reference',
            to: [{type: 'summaryDetails'}]
        }),
        defineField({
            name: 'meals',
            title: 'Meals',
            type: 'reference',
            to: [{type: 'summaryDetails'}]
        }),
        defineField({
            name: 'activity',
            title: 'Activity Level',
            type: 'reference',
            to: [{type: 'summaryDetails'}]
        }),
        defineField({
            name: 'itinerary',
            type: 'reference',
            to: [{type: 'summaryDetails'}]
        }),
        defineField({
            name: 'booking',
            title: 'How to Book',
            type: 'reference',
            to: [{type: 'summaryDetails'}]
        }),
        defineField({
            name: 'image',
            type: 'image'
        }),
        defineField({
            name: 'code',
            title: 'Trip Code',
            type: 'string',
        }),
        defineField({
            name: 'advantageList',
            type: 'array',
            of: [{type: 'reference',
                to: [{type: 'advantage'}]
            }]
        })
    ]
})