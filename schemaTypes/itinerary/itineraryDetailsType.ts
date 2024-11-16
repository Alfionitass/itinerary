import { defineField, defineType } from 'sanity';
import {UsersIcon, LemonIcon, TransferIcon, MoonIcon, HelpCircleIcon} from '@sanity/icons';

export const itineraryArrivalType = defineType({
    name: 'transfer',
    title: 'Arrival/ Departure Transfer',
    type: 'document',
    icon: TransferIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            initialValue: 'Arrival/ Departure Transfer',
        }),
    ]
})

export const itineraryWelcomeType = defineType({
    name: 'welcome',
    title: 'Welcome',
    type: 'document',
    icon: UsersIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            initialValue: 'Welcome'
        }),
    ]
})

export const itineraryAccomodationType = defineType({
    name: 'accomodation',
    title: 'Accomodation',
    type: 'document',
    icon: MoonIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            initialValue: 'Accomodation'
        }),
    ]
})

export const itineraryMealsType = defineType({
    name: 'meals',
    title: 'Included Meals',
    type: 'document',
    icon: LemonIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            initialValue: 'Included Meals'
        }),
    ]
})

export const itineraryDetailsType = defineType({
    name: 'itineraryDetails',
    title: 'Itenerary experiences',
    type: 'document',
    fieldsets: [
        { 
            name: 'priceInfo', 
            title: 'Pricing Info', 
            description: 'below fields only required if the itinerary tag is equal to Additional cost applies',
            options: {
                collapsed: true
            }
        }
    ],
    fields: [
        defineField({
            name: 'image',
            type: 'image',
        }),
        defineField({
            name: 'imageTitle',
            type: 'string'
        }),
        defineField({
            name: 'subtitle',
            title: 'Image Description',
            type: 'string'
        }),
        defineField({
            name: 'tag',
            type: 'string',
            options: {
                list: ['included with trip', 'additional cost applies'],
                layout: 'radio',
            },
        }),
        defineField({
            name: 'age',
            type: 'string',
            options: {
                list: ['Adults', 'Kids'],
                layout: 'radio',
            },
            fieldset: 'priceInfo'
        }),
        defineField({
            name: 'price',
            type: 'string',
            fieldset: 'priceInfo'
        }),
        defineField({
            name: 'additionalBook',
            title: 'How to Book?',
            type: 'string',
            fieldset: 'priceInfo'
        })
    ]
})

