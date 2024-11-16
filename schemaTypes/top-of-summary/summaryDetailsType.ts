import { defineField, defineType } from 'sanity';

export const summaryDetailsType = defineType({
    name: 'summaryDetails',
    title: 'Summary Details',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'descriptionOne',
            title: 'Description 1',
            description: 'this is required field. min add one description.',
            type: 'string',
            validation: (rule) => rule.required().error(`Please fill in min one description`),
        }),
        defineField({
            name: 'descriptionTwo',
            title: 'Description 2',
            description: 'optional field.',
            type: 'string',
        }),
        defineField({
            name: 'toolbar',
            title: 'Toolbar',
            description: 'optional field.',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            description: 'optional field.',
            options: {source: 'descriptionOne'},
        }),
    ]
})

export const advantageType = defineType({
    name: 'advantage',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        })
    ]
})