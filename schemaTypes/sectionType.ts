import { defineField, defineType } from 'sanity';

export const sectionType = defineType({
    name: 'section',
    title: 'Tab Section',
    type: 'document',
    fieldsets: [
        { 
            name: 'instruction', 
            title: 'Section Instructions',
            description: 'additional field if there is any additional instruction need to add on this section',
            options: { 
                columns: 2,
                collapsed: true
            }
        },
        {
            name: 'linkSection',
            title: 'Link Section',
            description: 'additional field if there is any link need to add for this section',
            options: {
                collapsed: true
            }
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
            name: 'instructions1',
            type: 'string',
            fieldset: 'instruction'
        }),
        defineField({
            name: 'instructions2',
            type: 'string',
            fieldset: 'instruction'
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
            name: 'sectionDetails',
            title: 'Section Details',
            type: 'array',
            of: [{type: 'itinerary'}, {type: 'about'}, {type: 'highlight'}, {type: 'faq'}]
        }),
        defineField({
            name: 'sectionDetails2',
            title: 'Section Details 2',
            type: 'array',
            of: [{type: 'reference',
                to: [
                    {type: 'highlight'},
                  ]
            }]
        }),
    ]
})