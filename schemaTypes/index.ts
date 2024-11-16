import { advantageType, summaryDetailsType } from "./top-of-summary/summaryDetailsType";
import { summaryDescriptionType } from "./top-of-summary/summaryDescriptionType";
import { topOfSummaryType } from "./top-of-summary/topOfSummaryType";
import { itineraryType } from "./itinerary/itineraryType";
import { 
    itineraryDetailsType, 
    itineraryArrivalType, 
    itineraryWelcomeType,
    itineraryAccomodationType,
    itineraryMealsType
} from "./itinerary/itineraryDetailsType";
import { aboutType } from "./about/aboutType";
import { highlightType } from "./highlight/highlightType";
import { pageType } from "./pageType";
import { faqType } from "./faq/faqType";
import { itinerarySectionType } from "./itinerary/itinerarySectionType";
import { aboutSectionType } from "./about/aboutSectionType";
import { highlightSectionType } from "./highlight/highlightSectionType";
import { faqSectionType } from "./faq/faqSectionType";

export const schemaTypes = [
    pageType,
    topOfSummaryType,
    summaryDescriptionType,
    summaryDetailsType,
    advantageType,
    itinerarySectionType,
    itineraryType,
    itineraryDetailsType, 
    itineraryArrivalType,
    itineraryWelcomeType,
    itineraryAccomodationType,
    itineraryMealsType,
    aboutSectionType,
    aboutType,
    highlightSectionType,
    highlightType,
    faqSectionType,
    faqType
]
