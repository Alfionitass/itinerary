import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
// import {defaultDocumentNode} from '.struc'

export default defineConfig({
  name: 'default',
  title: 'Travel Itinerary',

  projectId: 't1nylmr1',
  dataset: 'production',

  plugins: [structureTool({
    structure
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
