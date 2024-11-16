import { defineField, defineType } from 'sanity';
import {PinIcon} from '@sanity/icons'

export const aboutType = defineType({
    name: 'about',
    title: 'About Trip',
    type: 'document',
    icon: PinIcon,
    fields: [
        defineField({
            name: 'details',
            type: 'array',
            of: [{type: 'block'}]
        })
    ]
})