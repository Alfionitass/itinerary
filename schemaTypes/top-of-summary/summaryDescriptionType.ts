import { defineField, defineType } from 'sanity';

export const summaryDescriptionType = defineType({
    name: 'summaryDescription',
    title: 'Summary Description',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'array',
            of: [{type: 'block'}],
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{type: 'block'}],
        })
    ]
})