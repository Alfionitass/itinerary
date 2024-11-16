import type {StructureResolver} from 'sanity/structure'
import {EarthAmericasIcon, BookIcon, CheckmarkIcon, HelpCircleIcon, BasketIcon, PinIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.documentTypeListItem('page').title('Travel Itinerary').icon(BookIcon),
      S.divider(),
      S.documentTypeListItem('topSummary').title('Summary Section').icon(BasketIcon),
      S.documentTypeListItem('itineraryTab').title('Itinerary Section').icon(EarthAmericasIcon),
      S.documentTypeListItem('aboutTab').title('About Trip Section').icon(PinIcon),
      S.documentTypeListItem('highlightTab').title('Highlight Section').icon(CheckmarkIcon),
      S.documentTypeListItem('faqTab').title('FAQ Section').icon(HelpCircleIcon),
    ])